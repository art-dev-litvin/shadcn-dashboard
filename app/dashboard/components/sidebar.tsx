import React from "react";
import SidebarTitle from "./sidebar-title";
import SidebarNav from "./sidebar-nav";
import SidebarActions from "./sidebar-actions";

export default function Sidebar() {
  return (
    <aside className="bg-muted  md:basis-72 px-3 py-4 flex-col justify-between hidden md:flex">
      <div>
        <header>
          <SidebarTitle />
        </header>
        <SidebarNav />
      </div>
      <footer>
        <SidebarActions />
      </footer>
    </aside>
  );
}
