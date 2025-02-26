"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecksIcon } from "lucide-react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", delta: 82, alpha: 40, canary: 67 },
  { name: "Feb", delta: 48, alpha: 45, canary: 23 },
  { name: "Mar", delta: 55, alpha: 50, canary: 78 },
  { name: "Apr", delta: 75, alpha: 42, canary: 34 },
  { name: "May", delta: 60, alpha: 35, canary: 89 },
  { name: "Jun", delta: 88, alpha: 37, canary: 12 },
  { name: "Jul", delta: 72, alpha: 33, canary: 56 },
  { name: "Aug", delta: 85, alpha: 40, canary: 91 },
  { name: "Sep", delta: 37, alpha: 38, canary: 45 },
  { name: "Oct", delta: 89, alpha: 36, canary: 67 },
  { name: "Nov", delta: 74, alpha: 41, canary: 23 },
  { name: "Dec", delta: 80, alpha: 39, canary: 78 },
];

export default function TeamsLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <ListChecksIcon /> <span className="ml-2">Support tickets resolved</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer height={350} width="100%">
          <LineChart data={data}>
            <XAxis fontSize={12} dataKey="name" />
            <YAxis fontSize={12} />
            <Tooltip
              wrapperClassName="dark:!bg-black dark:!border-border !rounded-md"
              labelClassName="font-bold"
            />
            <CartesianGrid strokeDasharray="3" />
            <Line type="monotone" dataKey="delta" stroke="#84cc16" />
            <Line type="monotone" dataKey="alpha" stroke="#3b82f6" />
            <Line type="monotone" dataKey="canary" stroke="#f97316" />
            <Legend formatter={(value) => <span className="capitalize">{value}</span>} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
