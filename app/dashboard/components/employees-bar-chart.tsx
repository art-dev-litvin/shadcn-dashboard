"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LaptopIcon } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import React from "react";

const data = [
  { name: "Jan", workFromOffice: 82, workFromHome: 40 },
  { name: "Feb", workFromOffice: 48, workFromHome: 45 },
  { name: "Mar", workFromOffice: 85, workFromHome: 38 },
  { name: "Apr", workFromOffice: 75, workFromHome: 42 },
  { name: "May", workFromOffice: 60, workFromHome: 35 },
  { name: "Jun", workFromOffice: 88, workFromHome: 37 },
  { name: "Jul", workFromOffice: 72, workFromHome: 33 },
  { name: "Aug", workFromOffice: 85, workFromHome: 40 },
  { name: "Sep", workFromOffice: 37, workFromHome: 38 },
  { name: "Oct", workFromOffice: 89, workFromHome: 36 },
  { name: "Nov", workFromOffice: 74, workFromHome: 41 },
  { name: "Dec", workFromOffice: 80, workFromHome: 39 },
];

export default function EmployeesBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <LaptopIcon /> <span className="ml-2">Employee work locations trends</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer height={350} width="100%">
          <BarChart
            data={data}
            className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800">
            <XAxis dataKey="name" stroke="#888" fontSize={12} />
            <YAxis stroke="#888" fontSize={12} />
            <Tooltip
              separator=": "
              formatter={(value, name) => {
                if (name === "workFromHome") {
                  return [value, "Work from home"];
                } else if (name === "workFromOffice") {
                  return [value, "Work from office"];
                }
              }}
              wrapperClassName="dark:!bg-black dark:!border-border !rounded-md"
              labelClassName="font-bold"
            />
            <Bar dataKey="workFromOffice" stackId={1} fill="#ec4899" />
            <Bar dataKey="workFromHome" radius={[4, 4, 0, 0]} stackId={1} fill="#6d7280" />
            <Legend
              iconType="circle"
              formatter={(value) => {
                if (value === "workFromHome") {
                  return <span>Work from home</span>;
                } else if (value === "workFromOffice") {
                  return <span>Work from office</span>;
                }
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
