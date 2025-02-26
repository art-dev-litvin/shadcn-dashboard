import React from "react";
import Link from "next/link";
import TeamsLineChart from "./teams-line-chart";
import TeamDistributionChart from "./team-distribution-chart";
import { Button } from "@/components/ui/button";
import { PieChartIcon, StarIcon, UsersIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const teamLeaders = [
  {
    firstName: "John",
    lastName: "Doe",
    avatar: "https://cdn.pixabay.com/photo/2022/05/04/22/24/fashion-7174896_1280.jpg",
  },
  { firstName: "Jane", lastName: "Smith", avatar: "" },
  {
    firstName: "Alice",
    lastName: "Johnson",
    avatar: "https://cdn.pixabay.com/photo/2022/08/14/09/55/frau-7385461_1280.jpg",
  },
  { firstName: "Emily", lastName: "Davis", avatar: "" },
  { firstName: "David", lastName: "Wilson", avatar: "" },
  {
    firstName: "Michael",
    lastName: "Brown",
    avatar: "https://cdn.pixabay.com/photo/2022/03/25/03/37/male-7090223_1280.jpg",
  },
  { firstName: "Sarah", lastName: "Miller", avatar: "" },
  { firstName: "Chris", lastName: "Martinez", avatar: "" },
  { firstName: "Daniel", lastName: "Rodriguez", avatar: "" },
  {
    firstName: "Jessica",
    lastName: "Garcia",
    avatar: "https://t3.ftcdn.net/jpg/10/58/69/32/360_F_1058693218_8Z4SuFvcgnfNBTYeE9zllG8rRa2cSbf8.jpg",
  },
];

export default function TeamsStats() {
  return (
    <div className="mt-3">
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <UsersIcon />
            <p className="text-5xl font-bold grow">8</p>
            <Button asChild size="sm" className="self-center">
              <Link href="/dashboard/employees">View all</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex justify-between items-center">
              <span>Total leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((teamLeader) => (
              <TooltipProvider key={`${teamLeader.firstName} ${teamLeader.lastName}`}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {teamLeader.avatar && (
                        <AvatarImage
                          className="object-cover"
                          src={teamLeader.avatar}
                          alt={`${teamLeader.firstName} ${teamLeader.lastName}`}
                        />
                      )}
                      <AvatarFallback>
                        {teamLeader.firstName[0]}
                        {teamLeader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamLeader.firstName} {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex justify-between items-center">
              <span>Team distribution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center p-0">
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>
      <div className="mt-4 ">
        <TeamsLineChart />
      </div>
    </div>
  );
}
