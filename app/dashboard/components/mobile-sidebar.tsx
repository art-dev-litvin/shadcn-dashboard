"use client";

import React from "react";
import { MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import SidebarTitle from "./sidebar-title";
import SidebarNav from "./sidebar-nav";
import SidebarActions from "./sidebar-actions";

export default function MobileSidebar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="fixed w-full top-0 left-0 bg-background p-4 border-b border-border z-50 flex justify-between md:hidden">
      <SidebarTitle />
      <Drawer
        open={menuOpen}
        onOpenChange={(open) => setMenuOpen(open)}
        onClose={() => setMenuOpen(false)}
        direction="right">
        <DrawerTrigger>
          <MenuIcon size={40} />
        </DrawerTrigger>
        <DrawerContent aria-describedby="drawer-description" className="px-3 pb-3">
          <DrawerTitle />
          <DrawerDescription />
          <div className="mt-3">
            <SidebarTitle />
            <SidebarNav />
            <SidebarActions />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
