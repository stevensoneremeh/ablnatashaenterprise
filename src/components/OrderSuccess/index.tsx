'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Breadcrumb from '../Common/Breadcrumb'

const OrderSuccess = () => {
  const searchParams = useSearchParams()
  const reference = searchParams.get('ref')
  const [orderDetails, setOrderDetails] = useState(null)

  useEffect(() => {
    if (reference) {
      // You can fetch order details here if needed
      setOrderDetails({ reference })
    }
  }, [reference])

  return (
    <>
      <Breadcrumb title="Order Success" pages={["Order Success"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-white rounded-xl shadow-1 px-4 py-10 sm:py-15 lg:py-20 xl:py-25">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="font-bold text-green-600 text-4xl lg:text-[45px] lg:leading-[57px] mb-5">
                Payment Successful!
              </h2>

              <h3 className="font-medium text-dark text-xl sm:text-2xl mb-3">
                Your order has been confirmed
              </h3>

              <p className="max-w-[491px] w-full mx-auto mb-7.5 text-gray-600">
                Thank you for your purchase! We have received your payment and your order is being processed. 
                You will receive an email confirmation shortly.
              </p>

              {reference && (
                <div className="bg-gray-50 rounded-lg p-4 mb-7.5 max-w-md mx-auto">
                  <p className="text-sm text-gray-600 mb-1">Payment Reference:</p>
                  <p className="font-mono text-sm font-medium text-gray-900">{reference}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/my-account"
                  className="inline-flex items-center gap-2 font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  View My Orders
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 font-medium text-blue bg-white border-2 border-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue hover:text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderSuccess;