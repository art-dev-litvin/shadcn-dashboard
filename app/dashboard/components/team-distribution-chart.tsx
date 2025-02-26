"use client";

import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Delta", value: 30, color: "#84cc16" },
  { name: "Alpha", value: 50, color: "#3b82f6" },
  { name: "Canary", value: 20, color: "#f97316" },
];

export default function TeamDistributionChart() {
  return (
    <ResponsiveContainer height={150} width={150}>
      <PieChart>
        <Tooltip
          wrapperClassName="dark:[&_.recharts-tooltip-item]:!text-white dark:!bg-black dark:!border-border !rounded-md"
          labelClassName="font-bold"
        />
        <Pie data={data} dataKey="value">
          {data.map(({ color, name, value }) => (
            <Cell key={`${name}-${value}`} fill={color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
