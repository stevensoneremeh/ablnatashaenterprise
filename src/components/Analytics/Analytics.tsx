import { Analytics } from "@vercel/analytics/next"
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
