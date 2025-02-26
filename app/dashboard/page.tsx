import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import EmployessStats from "./components/employess-stats";
import TeamsStats from "./components/teams-stats";

export default function DashboardPage() {
  return (
    <Tabs className="mt-3" defaultValue="employees">
      <TabsList>
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
        <TabsTrigger value="teams">Teams stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployessStats />
      </TabsContent>
      <TabsContent value="teams">
        <TeamsStats />
      </TabsContent>
    </Tabs>
  );
}
