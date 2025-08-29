export interface PaystackConfig {
  publicKey: string
  email: string
  amount: number
  reference?: string
  currency?: string
  channels?: string[]
  metadata?: Record<string, any>
}

export interface PaystackResponse {
  reference: string
  status: string
  message: string
  transaction: string
  trxref: string
}

export const generatePaystackReference = () => {
  return `abl_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export const formatAmountForPaystack = (amount: number): number => {
  // Paystack expects amount in kobo (multiply by 100)
  return Math.round(amount * 100)
}

export const verifyPaystackPayment = async (reference: string) => {
  try {
    const response = await fetch(`/api/payments/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reference }),
    })

    if (!response.ok) {
      throw new Error('Payment verification failed')
    }

    return await response.json()
  } catch (error) {
    console.error('Payment verification error:', error)
    throw error
  }
}