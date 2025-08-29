import { DefaultSeo } from "next-seo"

const DefaultSEO = () => {
  return (
    <DefaultSeo
      title="ABL NATASHA ENTERPRISES | Premium Real Estate, Cars, Perfumes & More"
      description="Your trusted partner for luxury real estate, automobiles, perfumes, human hair, wines and premium bags in Nigeria. Discover premium properties and luxury lifestyle products."
      canonical="https://www.ablnatashaenterprises.com"
      openGraph={{
        type: "website",
        locale: "en_NG",
        url: "https://www.ablnatashaenterprises.com",
        siteName: "ABL NATASHA ENTERPRISES",
        title: "ABL NATASHA ENTERPRISES | Premium Real Estate, Cars, Perfumes & More",
        description:
          "Your trusted partner for luxury real estate, automobiles, perfumes, human hair, wines and premium bags in Nigeria.",
        images: [
          {
            url: "https://www.ablnatashaenterprises.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "ABL NATASHA ENTERPRISES - Luxury Real Estate and Premium Products",
          },
        ],
      }}
      twitter={{
        handle: "@ablnatasha",
        site: "@ablnatasha",
        cardType: "summary_large_image",
      }}
      additionalMetaTags={[
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "theme-color",
          content: "#d4af37",
        },
        {
          name: "msapplication-TileColor",
          content: "#d4af37",
        },
        {
          name: "keywords",
          content:
            "luxury real estate Nigeria, premium automobiles, luxury perfumes, human hair, wines, premium bags, Lagos properties, luxury lifestyle",
        },
        {
          name: "author",
          content: "ABL NATASHA ENTERPRISES",
        },
        {
          name: "robots",
          content: "index, follow",
        },
      ]}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ]}
    />
  )
}

export default DefaultSEO
