import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABL NATASHA ENTERPRISES | Premium Real Estate, Cars, Perfumes & More",
  description: "Your trusted partner for luxury real estate, automobiles, perfumes, human hair, wines and premium bags in Nigeria",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
