import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ClientProviders from "./ClientProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>ABL NATASHA ENTERPRISES | Premium Real Estate, Cars, Perfumes & More</title>
        <meta name="description" content="Your trusted partner for luxury real estate, automobiles, perfumes, human hair, wines and premium bags in Nigeria" />
      </head>
      <body suppressHydrationWarning={true}>
        <ClientProviders>
          <Header />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}