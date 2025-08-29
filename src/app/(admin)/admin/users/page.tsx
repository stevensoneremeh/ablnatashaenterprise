import AdminUsers from "@/components/Admin/Users";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users Management | Admin Dashboard",
  description: "Manage users for ABL NATASHA ENTERPRISES",
};

export default function AdminUsersPage() {
  return <AdminUsers />;
}
