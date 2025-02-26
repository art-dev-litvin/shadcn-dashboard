import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { columns, Employee } from "./columns";

const employees: Employee[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    avatar: "https://cdn.pixabay.com/photo/2022/05/04/22/24/fashion-7174896_1280.jpg",
    teamName: "Development",
  },
  { id: 2, firstName: "Jane", lastName: "Smith", teamName: "Marketing" },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Johnson",
    avatar: "https://cdn.pixabay.com/photo/2022/08/14/09/55/frau-7385461_1280.jpg",
    isTeamLeader: true,
    teamName: "Development",
  },
  { id: 4, firstName: "Emily", lastName: "Davis", teamName: "Sales" },
  { id: 5, firstName: "David", lastName: "Wilson", teamName: "Support" },
  {
    id: 6,
    firstName: "Michael",
    lastName: "Brown",
    avatar: "https://cdn.pixabay.com/photo/2022/03/25/03/37/male-7090223_1280.jpg",
    isTeamLeader: true,
    teamName: "Development",
  },
  { id: 7, firstName: "Sarah", lastName: "Miller", teamName: "HR" },
  { id: 8, firstName: "Chris", lastName: "Martinez", teamName: "Finance" },
  { id: 9, firstName: "Daniel", lastName: "Rodriguez", teamName: "Operations" },
  {
    id: 10,
    firstName: "Jessica",
    lastName: "Garcia",
    avatar: "https://t3.ftcdn.net/jpg/10/58/69/32/360_F_1058693218_8Z4SuFvcgnfNBTYeE9zllG8rRa2cSbf8.jpg",
    isTeamLeader: true,
    teamName: "Marketing",
  },
];

const awaitFunc = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export default async function EmployeesPage() {
  await awaitFunc(2000);

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable data={employees} columns={columns} />
      </CardContent>
    </Card>
  );
}
