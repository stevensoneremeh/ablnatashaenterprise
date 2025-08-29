import type { Category } from "@/types/category"
import Image from "next/image"

const SingleItem = ({ item }: { item: Category }) => {
  return (
    <a href="#" className="group flex flex-col items-center hover-lift">
      <div className="futuristic-card max-w-[140px] w-full h-36 rounded-2xl flex items-center justify-center mb-6 p-6 group-hover:neon-glow transition-all duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 scale-110"></div>

        <Image
          src={item.img || "/placeholder.svg"}
          alt="Category"
          width={82}
          height={62}
          className="relative z-10 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex justify-center">
        <h3 className="inline-block font-semibold text-center text-foreground relative overflow-hidden group-hover:text-primary transition-colors duration-300">
          <span className="relative z-10">{item.title}</span>

          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>

          <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
        </h3>
      </div>
    </a>
  )
}

export default SingleItem
