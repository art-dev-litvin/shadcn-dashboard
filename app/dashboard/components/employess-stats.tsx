import React from "react";
import EmployeesCard from "./employees-card";
import Link from "next/link";
import EmployeeOfMonthImage from "@/assets/employee-of-month.jpg";
import { Button } from "@/components/ui/button";
import { BadgeCheckIcon, PartyPopperIcon, UserCheck2Icon, UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EmployeesBarChart from "./employees-bar-chart";

export default function EmployessStats() {
  return (
    <div className="mt-3">
      <div className="grid lg:grid-cols-3 gap-4">
        <EmployeesCard title="Total employees">
          <div className="flex gap-2">
            <UserIcon />
            <p className="text-5xl font-bold grow">100</p>
            <Button asChild size="sm" className="self-center">
              <Link href="/dashboard/employees">View all</Link>
            </Button>
          </div>
        </EmployeesCard>
        <EmployeesCard title="Employees present">
          <div className="flex gap-2">
            <UserCheck2Icon />
            <p className="text-5xl font-bold">80</p>
          </div>
          <p className="text-green-600 flex gap-2 mt-6">
            <BadgeCheckIcon />
            80% of employees are present!
          </p>
        </EmployeesCard>
        <EmployeesCard title="Employee of the month" className="border-pink-500">
          <div className="grow">
            <div className="flex gap-2 items-center">
              <Avatar className="">
                <AvatarImage
                  src={EmployeeOfMonthImage.src}
                  className="object-cover"
                  alt="employee of the month"
                />
                <AvatarFallback>CM</AvatarFallback>
              </Avatar>
              <span className="text-2xl">Colin Murray!</span>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <PartyPopperIcon className="text-primary" />
            <span className="text-muted-foreground">Congratulations, Colin!</span>
          </div>
        </EmployeesCard>
      </div>
      <div className="mt-4">
        <EmployeesBarChart />
      </div>
    </div>
  );
}
