import AdminOrders from "@/components/Admin/Orders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders Management | Admin Dashboard",
  description: "Manage orders for ABL NATASHA ENTERPRISES",
};

export default function AdminOrdersPage() {
  return <AdminOrders />;
}
