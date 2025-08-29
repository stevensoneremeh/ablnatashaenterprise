import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const { reference } = await request.json()

    if (!reference) {
      return NextResponse.json(
        { error: 'Payment reference is required' },
        { status: 400 }
      )
    }

    // Verify payment with Paystack
    const paystackResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    )

    const paystackData = await paystackResponse.json()

    if (!paystackData.status) {
      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      )
    }

    const { data } = paystackData

    // Update order status in database
    const supabase = createServerClient()
    
    const { error } = await supabase
      .from('orders')
      .update({
        payment_status: data.status === 'success' ? 'paid' : 'failed',
        status: data.status === 'success' ? 'confirmed' : 'cancelled',
        payment_reference: reference,
        updated_at: new Date().toISOString()
      })
      .eq('payment_reference', reference)

    if (error) {
      console.error('Database update error:', error)
      return NextResponse.json(
        { error: 'Failed to update order status' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: {
        reference: data.reference,
        amount: data.amount / 100, // Convert from kobo to naira
        status: data.status,
        paid_at: data.paid_at,
        customer: data.customer
      }
    })

  } catch (error) {
    console.error('Payment verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}