"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import CustomSelect from "./CustomSelect"
import { useAppSelector } from "@/redux/store"
import { useSelector } from "react-redux"
import { selectTotalPrice } from "@/redux/features/cart-slice"
import { useCartModalContext } from "@/app/context/CartSidebarModalContext"
import { useAuth } from "@/components/Auth/AuthProvider"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [navigationOpen, setNavigationOpen] = useState(false)
  const [stickyMenu, setStickyMenu] = useState(false)
  const { openCartModal } = useCartModalContext()
  const { user, profile, signOut } = useAuth()

  const product = useAppSelector((state) => state.cartReducer.items)
  const totalPrice = useSelector(selectTotalPrice)

  const handleOpenCartModal = () => {
    openCartModal()
  }

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true)
    } else {
      setStickyMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu)
  })

  const options = [
    { label: "All Categories", value: "0" },
    { label: "Real Estate", value: "1" },
    { label: "Automobiles", value: "2" },
    { label: "Perfumes", value: "3" },
    { label: "Human Hair", value: "4" },
    { label: "Wines", value: "5" },
    { label: "Bags", value: "6" },
    { label: "Luxury Items", value: "7" },
  ]

  return (
    <header
      className={`fixed left-0 top-0 w-full z-[9999] transition-all ease-in-out duration-300 ${
        stickyMenu
          ? "glass-morphism shadow-2xl border-b border-border/30"
          : "bg-background/80 backdrop-blur-xl border-b border-border/20"
      }`}
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
        {/*  header top start  */}
        <div
          className={`flex flex-col lg:flex-row gap-5 items-end lg:items-center xl:justify-between ease-out duration-200 ${
            stickyMenu ? "py-4" : "py-6"
          }`}
        >
          {/*  header top left  */}
          <div className="xl:w-auto flex-col sm:flex-row w-full flex sm:justify-between sm:items-center gap-5 sm:gap-10">
            <Link className="flex-shrink-0 group" href="/">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)] transition-all duration-300 group-hover:scale-105">
                ABL NATASHA ENTERPRISES
              </div>
            </Link>

            <div className="max-w-[475px] w-full">
              <form>
                <div className="flex items-center">
                  <CustomSelect options={options} />

                  <div className="relative max-w-[333px] sm:min-w-[333px] w-full">
                    {/*  divider  */}
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 inline-block w-px h-5.5 bg-border/50"></span>
                    <input
                      onChange={(e) => setSearchQuery(e.target.value)}
                      value={searchQuery}
                      type="search"
                      name="search"
                      id="search"
                      placeholder="I am shopping for..."
                      autoComplete="off"
                      className="futuristic-input custom-search w-full rounded-r-xl !border-l-0 border border-border/50 py-3 pl-4 pr-10 outline-none ease-in duration-300 hover:border-primary/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    />

                    <button
                      id="search-btn"
                      aria-label="Search"
                      className="flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 ease-in duration-200 hover:text-primary hover:drop-shadow-[0_0_5px_hsl(var(--primary)/0.5)]"
                    >
                      <svg
                        className="fill-current w-5 h-5"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.2687 15.6656L12.6281 11.8969C14.5406 9.28123 14.3437 5.5406 11.9531 3.1781C10.6875 1.91248 8.99995 1.20935 7.19995 1.20935C5.39995 1.20935 3.71245 1.91248 2.44683 3.1781C-0.168799 5.79373 -0.168799 10.0687 2.44683 12.6844C3.71245 13.95 5.39995 14.6531 7.19995 14.6531C8.91558 14.6531 10.5187 14.0062 11.7843 12.8531L16.4812 16.65C16.5937 16.7344 16.7343 16.7906 16.875 16.7906C17.0718 16.7906 17.2406 16.7062 17.3531 16.5656C17.5781 16.2844 17.55 15.8906 17.2687 15.6656ZM7.19995 13.3875C5.73745 13.3875 4.38745 12.825 3.34683 11.7844C1.20933 9.64685 1.20933 6.18748 3.34683 4.0781C4.38745 3.03748 5.73745 2.47498 7.19995 2.47498C8.66245 2.47498 10.0125 3.03748 11.0531 4.0781C13.1906 6.2156 13.1906 9.67498 11.0531 11.7844C10.0406 12.825 8.66245 13.3875 7.19995 13.3875Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/*  header top right  */}
          <div className="flex w-full lg:w-auto items-center gap-7.5">
            <div className="hidden xl:flex items-center gap-3.5 p-3 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300">
              <div className="p-2 rounded-lg bg-primary/10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.7177 3.09215C5.94388 1.80121 7.9721 2.04307 8.98569 3.47665L10.2467 5.26014C11.0574 6.4068 10.9889 8.00097 10.0214 9.01965L9.7765 9.27743C9.77582 9.27921 9.7751 9.28115 9.77436 9.28323C9.76142 9.31959 9.7287 9.43538 9.7609 9.65513C9.82765 10.1107 10.1793 11.0364 11.607 12.5394C13.0391 14.0472 13.9078 14.4025 14.3103 14.4679C14.484 14.4961 14.5748 14.4716 14.6038 14.4614L15.0124 14.0312C15.8862 13.1113 17.2485 12.9301 18.347 13.5623L20.2575 14.662C21.8904 15.6019 22.2705 17.9011 20.9655 19.275L19.545 20.7705C19.1016 21.2373 18.497 21.6358 17.75 21.7095C15.9261 21.8895 11.701 21.655 7.27161 16.9917C3.13844 12.6403 2.35326 8.85538 2.25401 7.00615L2.92011 6.9704L2.25401 7.00615C2.20497 6.09248 2.61224 5.30879 3.1481 4.74464L4.7177 3.09215ZM7.7609 4.34262C7.24855 3.61797 6.32812 3.57473 5.80528 4.12518L4.23568 5.77767C3.90429 6.12656 3.73042 6.52646 3.75185 6.92576C3.83289 8.43558 4.48307 11.8779 8.35919 15.9587C12.4234 20.2375 16.1676 20.3584 17.6026 20.2167C17.8864 20.1887 18.1783 20.0313 18.4574 19.7375L19.8779 18.2419C20.4907 17.5968 20.3301 16.4345 19.5092 15.962L17.5987 14.8624C17.086 14.5673 16.4854 14.6584 16.1 15.0642L15.6445 15.5437L15.1174 15.043C15.6445 15.5438 15.6438 15.5445 15.6432 15.5452L15.6417 15.5467L15.6388 15.5498L15.6324 15.5562L15.6181 15.5704C15.6078 15.5803 15.5959 15.5913 15.5825 15.6031C15.5556 15.6266 15.5223 15.6535 15.4824 15.6819C15.4022 15.7387 15.2955 15.8012 15.1606 15.8544C14.8846 15.9633 14.5201 16.0216 14.0699 15.9485C13.1923 15.806 12.0422 15.1757 10.5194 13.5724C8.99202 11.9644 8.40746 10.7647 8.27675 9.87259C8.21022 9.41852 8.26346 9.05492 8.36116 8.78035C8.40921 8.64533 8.46594 8.53766 8.51826 8.4559C8.54435 8.41514 8.56922 8.381 8.5912 8.35322C8.60219 8.33933 8.61246 8.32703 8.62182 8.31627L8.63514 8.30129L8.64125 8.29465L8.64415 8.29154L8.64556 8.29004C8.64625 8.28931 8.64694 8.28859 9.17861 8.79357L8.64695 8.28858L8.93376 7.98662C9.3793 7.51755 9.44403 6.72317 9.02189 6.1261L7.7609 4.34262Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div>
                <span className="block text-xs text-muted-foreground uppercase tracking-wider">24/7 SUPPORT</span>
                <p className="font-semibold text-sm text-foreground">(+965) 7492-3477</p>
              </div>
            </div>

            {/*  divider  */}
            <span className="hidden xl:block w-px h-8 bg-border/30"></span>

            <div className="flex w-full lg:w-auto justify-between items-center gap-5">
              <div className="flex items-center gap-5">
                {user ? (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 1.25C9.37666 1.25 7.25001 3.37665 7.25001 6C7.25001 8.62335 9.37666 10.75 12 10.75C14.6234 10.75 16.75 8.62335 16.75 6C16.75 3.37665 14.6234 1.25 12 1.25ZM8.75001 6C8.75001 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6C15.25 7.79493 13.7949 9.25 12 9.25C10.2051 9.25 8.75001 7.79493 8.75001 6Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 12.25C9.68646 12.25 7.55494 12.7759 5.97546 13.6643C4.4195 14.5396 3.25001 15.8661 3.25001 17.5L3.24995 17.602C3.24882 18.7638 3.2474 20.222 4.52642 21.2635C5.15589 21.7761 6.03649 22.1406 7.22622 22.3815C8.41927 22.6229 9.97424 22.75 12 22.75C14.0258 22.75 15.5808 22.6229 16.7738 22.3815C17.9635 22.1406 18.8441 21.7761 19.4736 21.2635C20.7526 20.222 20.7512 18.7638 20.7501 17.602L20.75 17.5C20.75 15.8661 19.5805 14.5396 18.0246 13.6643C16.4451 12.7759 14.3136 12.25 12 12.25ZM4.75001 17.5C4.75001 16.6487 5.37139 15.7251 6.71085 14.9717C8.02681 14.2315 9.89529 13.75 12 13.75C14.1047 13.75 15.9732 14.2315 17.2892 14.9717C18.6286 15.7251 19.25 16.6487 19.25 17.5C19.25 18.8078 19.2097 19.544 18.5264 20.1004C18.1559 20.4022 17.5365 20.6967 16.4762 20.9113C15.4193 21.1252 13.9742 21.25 12 21.25C10.0258 21.25 8.58075 21.1252 7.5238 20.9113C6.46354 20.6967 5.84413 20.4022 5.4736 20.1004C4.79033 19.544 4.75001 18.8078 4.75001 17.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    <div>
                      <span className="block text-xs text-muted-foreground uppercase tracking-wider">Welcome</span>
                      <p className="font-semibold text-sm text-foreground">{profile?.full_name || user.email}</p>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/signin"
                    className="flex items-center gap-3 p-3 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                      >
                        {/* SVG path here */}
                      </svg>
                    </div>

                    <div>
                      <span className="block text-xs text-muted-foreground uppercase tracking-wider">account</span>
                      <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                        Sign In
                      </p>
                    </div>
                  </Link>
                )}

                <button
                  onClick={handleOpenCartModal}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300 group"
                >
                  <span className="inline-block relative">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                      >
                        <path
                          d="M15.5433 9.5172C15.829 9.21725 15.8174 8.74252 15.5174 8.45686C15.2175 8.17119 14.7428 8.18277 14.4571 8.48272L12.1431 10.9125L11.5433 10.2827C11.2576 9.98277 10.7829 9.97119 10.483 10.2569C10.183 10.5425 10.1714 11.0173 10.4571 11.3172L11.6 12.5172C11.7415 12.6658 11.9378 12.75 12.1431 12.75C12.3483 12.75 12.5446 12.6658 12.6862 12.5172L15.5433 9.5172Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span className="font-semibold text-sm text-foreground">{totalPrice} USD</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*  header top end  */}
      </div>
    </header>
  )
}

export default Header
