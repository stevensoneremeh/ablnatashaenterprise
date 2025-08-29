import AdminDashboard from "@/components/Admin/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | ABL NATASHA ENTERPRISES",
  description: "Admin dashboard for managing ABL NATASHA ENTERPRISES",
};

export default function AdminPage() {
  return <AdminDashboard />;
}
