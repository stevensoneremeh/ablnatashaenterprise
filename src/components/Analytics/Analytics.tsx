import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const AnalyticsWrapper = () => {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default AnalyticsWrapper
