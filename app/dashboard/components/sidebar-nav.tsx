import React from "react";
import NavItem from "./nav-item";

export default function SidebarNav() {
  return (
    <nav>
      <div className="border-t dark:border-t-black border-t-zinc-500 mt-3">
        <ul className="flex flex-col gap-2 mt-3">
          <NavItem href="/dashboard">My dashboard</NavItem>
          <NavItem href="/dashboard/teams">Teams</NavItem>
          <NavItem href="/dashboard/employees">Employees</NavItem>
          <NavItem href="/dashboard/account">Account</NavItem>
          <NavItem href="/dashboard/settings">Settings</NavItem>
        </ul>
      </div>
    </nav>
  );
}
