import HeroCarousel from "./HeroCarousel"
import HeroFeature from "./HeroFeature"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="overflow-hidden pb-16 lg:pb-20 xl:pb-24 pt-32 sm:pt-28 lg:pt-32 xl:pt-40 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary)/0.15)_0%,transparent_50%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.1)_0%,transparent_50%)]"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 relative z-10">
        <div className="flex flex-wrap gap-6">
          <div className="xl:max-w-[757px] w-full">
            <div className="futuristic-card relative z-1 rounded-2xl overflow-hidden neon-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl"></div>
              <div className="absolute right-0 bottom-0 -z-1">
                <div className="w-[534px] h-[520px] bg-gradient-to-tl from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
              </div>

              <div className="relative z-10">
                <HeroCarousel />
              </div>
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-6">
              <div className="futuristic-card w-full relative rounded-2xl p-6 sm:p-8 hover-lift group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="flex-1">
                    <h2 className="max-w-[180px] font-bold text-foreground text-xl mb-6 group-hover:text-primary transition-colors duration-300">
                      <a href="#" className="hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]">
                        Premium Real Estate Properties
                      </a>
                    </h2>

                    <div className="space-y-2">
                      <p className="font-medium text-muted-foreground text-sm uppercase tracking-wider">
                        luxury properties
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-bold text-2xl text-primary neon-text">From ₦50M</span>
                        <span className="font-medium text-lg text-muted-foreground line-through">₦75M</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Image
                      src="/luxury-estate.png"
                      alt="luxury property"
                      width={100}
                      height={120}
                      className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              <div className="futuristic-card w-full relative rounded-2xl p-6 sm:p-8 hover-lift group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="flex-1">
                    <h2 className="max-w-[180px] font-bold text-foreground text-xl mb-6 group-hover:text-accent transition-colors duration-300">
                      <a href="#" className="hover:drop-shadow-[0_0_10px_hsl(var(--accent)/0.5)]">
                        Premium Automobiles
                      </a>
                    </h2>

                    <div className="space-y-2">
                      <p className="font-medium text-muted-foreground text-sm uppercase tracking-wider">
                        luxury vehicles
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-bold text-2xl text-accent neon-text">From ₦25M</span>
                        <span className="font-medium text-lg text-muted-foreground line-through">₦35M</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Image
                      src="/luxury-automobile-car.png"
                      alt="luxury automobile"
                      width={100}
                      height={120}
                      className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero features */}
      <HeroFeature />
    </section>
  )
}

export default Hero
