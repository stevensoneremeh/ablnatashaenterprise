import { AuthProvider } from "@/components/Auth/AuthProvider";
import AdminSidebar from "@/components/Admin/AdminSidebar";
import AdminHeader from "@/components/Admin/AdminHeader";
import "../css/style.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>Admin Dashboard | ABL NATASHA ENTERPRISES</title>
        <meta name="description" content="Admin dashboard for ABL NATASHA ENTERPRISES" />
      </head>
      <body suppressHydrationWarning={true} className="bg-gray-50">
        <AuthProvider>
          <div className="flex h-screen bg-gray-50">
            <AdminSidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <AdminHeader />
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
                {children}
              </main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}