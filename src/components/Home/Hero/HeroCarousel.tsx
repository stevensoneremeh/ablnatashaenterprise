"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css/pagination"
import "swiper/css"

import Image from "next/image"
import Link from "next/link"

const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-12 sm:py-16 lg:py-20 pl-6 sm:pl-8 lg:pl-12">
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <span className="block font-bold text-3xl sm:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent neon-text">
                Premium
              </span>
              <span className="block text-foreground text-sm sm:text-lg font-semibold p-3 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30">
                Real Estate
                <br />
                Collection
              </span>
            </div>

            <h1 className="font-bold text-foreground text-xl sm:text-3xl mb-4 text-balance">
              <Link
                href="/shop-with-sidebar?category=real-estate"
                className="hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
              >
                Discover Luxury Properties in Prime Locations
              </Link>
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Explore our exclusive collection of premium real estate properties, from luxury apartments to commercial
              spaces in Nigeria's most sought-after locations.
            </p>

            <Link
              href="/shop-with-sidebar?category=real-estate"
              className="futuristic-button inline-flex font-semibold text-primary-foreground text-sm rounded-xl bg-primary py-4 px-10 shadow-lg hover:shadow-xl hover:shadow-primary/25"
            >
              Explore Properties
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
            <Image
              src="/luxury-real-estate-building-modern-architecture.png"
              alt="luxury real estate"
              width={351}
              height={358}
              className="object-cover relative z-10 rounded-xl"
            />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-12 sm:py-16 lg:py-20 pl-6 sm:pl-8 lg:pl-12">
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <span className="block font-bold text-3xl sm:text-5xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent neon-text">
                Luxury
              </span>
              <span className="block text-foreground text-sm sm:text-lg font-semibold p-3 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30">
                Automobile
                <br />
                Collection
              </span>
            </div>

            <h1 className="font-bold text-foreground text-xl sm:text-3xl mb-4 text-balance">
              <Link
                href="/shop-with-sidebar?category=automobiles"
                className="hover:text-accent transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(var(--accent)/0.5)]"
              >
                Premium Vehicles for Distinguished Clients
              </Link>
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Discover our curated selection of luxury automobiles, featuring the finest vehicles from renowned
              manufacturers worldwide.
            </p>

            <Link
              href="/shop-with-sidebar?category=automobiles"
              className="futuristic-button inline-flex font-semibold text-primary-foreground text-sm rounded-xl bg-accent py-4 px-10 shadow-lg hover:shadow-xl hover:shadow-accent/25"
            >
              View Collection
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
            <Image
              src="/luxury-car-automobile-premium-vehicle.png"
              alt="luxury automobile"
              width={351}
              height={358}
              className="object-cover relative z-10 rounded-xl"
            />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-12 sm:py-16 lg:py-20 pl-6 sm:pl-8 lg:pl-12">
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <span className="block font-bold text-3xl sm:text-5xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent neon-text">
                Premium
              </span>
              <span className="block text-foreground text-sm sm:text-lg font-semibold p-3 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30">
                Lifestyle
                <br />
                Products
              </span>
            </div>

            <h1 className="font-bold text-foreground text-xl sm:text-3xl mb-4 text-balance">
              <Link
                href="/shop-with-sidebar?category=perfumes"
                className="hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
              >
                Exquisite Perfumes & Luxury Accessories
              </Link>
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Indulge in our exclusive collection of premium perfumes, luxury bags, and finest wines curated for the
              discerning individual.
            </p>

            <Link
              href="/shop-with-sidebar?category=perfumes"
              className="futuristic-button inline-flex font-semibold text-primary-foreground text-sm rounded-xl bg-gradient-to-r from-primary to-accent py-4 px-10 shadow-lg hover:shadow-xl hover:shadow-primary/25"
            >
              Shop Luxury
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
            <Image
              src="/luxury-perfume-bottles-premium-lifestyle-products.png"
              alt="luxury lifestyle products"
              width={351}
              height={358}
              className="object-cover relative z-10 rounded-xl"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroCarousel
