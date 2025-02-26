import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function EmployeesCard({ title, children, className }: Props) {
  return (
    <Card className={cn(className, "flex flex-col")}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col grow">{children}</CardContent>
    </Card>
  );
}
