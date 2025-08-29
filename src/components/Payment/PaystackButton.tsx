'use client'

import { usePaystackPayment } from 'react-paystack'
import { generatePaystackReference, formatAmountForPaystack } from '@/lib/paystack'
import { useAuth } from '@/components/Auth/AuthProvider'

interface PaystackButtonProps {
  amount: number
  email?: string
  onSuccess: (reference: string) => void
  onClose?: () => void
  className?: string
  children: React.ReactNode
  metadata?: Record<string, any>
}

const PaystackButton = ({
  amount,
  email,
  onSuccess,
  onClose,
  className = '',
  children,
  metadata = {}
}: PaystackButtonProps) => {
  const { user } = useAuth()
  
  const config = {
    reference: generatePaystackReference(),
    email: email || user?.email || '',
    amount: formatAmountForPaystack(amount),
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
    currency: 'NGN',
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: user?.user_metadata?.full_name || "Guest"
        }
      ],
      ...metadata
    }
  }

  const initializePayment = usePaystackPayment(config)

  const handlePayment = () => {
    if (!config.email) {
      alert('Please provide an email address')
      return
    }

    if (!config.publicKey) {
      alert('Paystack configuration error')
      return
    }

    initializePayment({
      onSuccess: (response) => {
        onSuccess(response.reference)
      },
      onClose: () => {
        onClose?.()
      }
    })
  }

  return (
    <button
      onClick={handlePayment}
      className={`inline-flex items-center justify-center font-medium transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  )
}

export default PaystackButton