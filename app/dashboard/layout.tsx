import React from "react";
import Sidebar from "./components/sidebar";
import MobileSidebar from "./components/mobile-sidebar";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <MobileSidebar />
      <main className="grow px-6 py-4 mt-20 md:mt-0">
        <h1 className="text-4xl">Welcome back, Artem!</h1>
        {children}
      </main>
    </div>
  );
}
