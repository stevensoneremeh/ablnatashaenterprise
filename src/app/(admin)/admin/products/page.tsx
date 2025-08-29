import AdminProducts from "@/components/Admin/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Management | Admin Dashboard",
  description: "Manage products for ABL NATASHA ENTERPRISES",
};

export default function AdminProductsPage() {
  return <AdminProducts />;
}