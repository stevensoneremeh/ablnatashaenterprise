"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { useCallback, useRef, useEffect } from "react"
import data from "./categoryData"

// Import Swiper styles
import "swiper/css/navigation"
import "swiper/css"
import SingleItem from "./SingleItem"

const Categories = () => {
  const sliderRef = useRef(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.init()
    }
  }, [])

  return (
    <section className="overflow-hidden pt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-20 relative z-10">
        <div className="swiper categories-carousel common-carousel">
          {/* section title */}
          <div className="mb-12 flex items-center justify-between">
            <div>
              <span className="flex items-center gap-3 font-semibold text-foreground mb-3 p-3 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 w-fit">
                <div className="p-2 rounded-lg bg-primary/10">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary"
                  >
                    <g clipPath="url(#clip0_834_7356)">
                      <path
                        d="M3.94024 13.4474C2.6523 12.1595 2.00832 11.5155 1.7687 10.68C1.52908 9.84449 1.73387 8.9571 2.14343 7.18231L2.37962 6.15883C2.72419 4.66569 2.89648 3.91912 3.40771 3.40789C3.91894 2.89666 4.66551 2.72437 6.15865 2.3798L7.18213 2.14361C8.95692 1.73405 9.84431 1.52927 10.6798 1.76889C11.5153 2.00851 12.1593 2.65248 13.4472 3.94042L14.9719 5.46512C17.2128 7.70594 18.3332 8.82635 18.3332 10.2186C18.3332 11.6109 17.2128 12.7313 14.9719 14.9721C12.7311 17.2129 11.6107 18.3334 10.2184 18.3334C8.82617 18.3334 7.70576 17.2129 5.46494 14.9721L3.94024 13.4474Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="7.17245"
                        cy="7.39917"
                        r="1.66667"
                        transform="rotate(-45 7.17245 7.39917)"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M9.61837 15.4164L15.4342 9.6004"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_834_7356">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                Categories
              </span>
              <h2 className="font-bold text-2xl xl:text-4xl text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Browse by Category
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="futuristic-button !p-3 !bg-card/50 !text-foreground hover:!bg-primary hover:!text-primary-foreground border border-border/30 hover:border-primary/50 transition-all duration-300"
              >
                <svg
                  className="fill-current w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="futuristic-button !p-3 !bg-card/50 !text-foreground hover:!bg-primary hover:!text-primary-foreground border border-border/30 hover:border-primary/50 transition-all duration-300"
              >
                <svg
                  className="fill-current w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>

          <Swiper
            ref={sliderRef}
            slidesPerView={6}
            spaceBetween={20}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              1200: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            {data.map((item, key) => (
              <SwiperSlide key={key}>
                <SingleItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Categories
