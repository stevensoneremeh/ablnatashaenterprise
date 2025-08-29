import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ClientProviders from "./ClientProviders";
import { AuthProvider } from "@/components/Auth/AuthProvider";

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
        <AuthProvider>
          <ClientProviders>
            <Header />
            {children}
            <Footer />
          </ClientProviders>
        </AuthProvider>
      </body>
    </html>
  );
}
