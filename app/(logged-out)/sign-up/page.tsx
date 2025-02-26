"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, PersonStandingIcon } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { PasswordInput } from "@/components/ui/password-input";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

const accountTypeFormSchema = z
  .object({
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.accountType === "company" && !data.companyName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["companyName"],
        message: "Company name is required",
      });
    }
    if (data.accountType === "company" && (!data.numberOfEmployees || data.numberOfEmployees < 1)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["numberOfEmployees"],
        message: "Number of employees is required",
      });
    }
  });

const passwordFormSchema = z
  .object({
    password: z
      .string()
      .min(8, "The password is too short, min 8 chars")
      .refine((password) => {
        return /[!@#$%^&*_(),.?":{}|<>]/.test(password);
      }, "The password must contain at least one special character"),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      console.log("not match");
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "Passwords don't match",
      });
    }
  });

const baseFormSchema = z.object({
  email: z.string().email(),
  acceptTerms: z.boolean(),
  dateOfBirth: z.date().refine((date) => {
    const today = new Date();
    const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

    return date <= eighteenYearsAgo;
  }, "You must be at least 18 years old"),
});

const formSchema = baseFormSchema.and(passwordFormSchema).and(accountTypeFormSchema);

export default function LoginPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", companyName: "", numberOfEmployees: 0, password: "", confirmPassword: "" },
  });

  const handleSubmit = () => {
    console.log("validation passed");
    router.push("/dashboard");
  };

  const accountType = form.watch("accountType");
  const dateOfBirthFromDate = new Date();

  dateOfBirthFromDate.setFullYear(dateOfBirthFromDate.getFullYear() - 100);

  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription>Sign up to your SupportMe account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="test@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account type</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an account type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {accountType === "company" && (
                <>
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company name</FormLabel>
                        <FormControl>
                          <Input placeholder="Company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="numberOfEmployees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employees</FormLabel>
                        <FormControl>
                          <Input type="number" min={0} placeholder="Employees" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col pt-2">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            type="button"
                            className="w-full normal-case justify-between ">
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent align="start" className="w-auto p-0">
                        <Calendar
                          mode="single"
                          defaultMonth={field.value}
                          selected={field.value}
                          onSelect={field.onChange}
                          weekStartsOn={1}
                          fromDate={dateOfBirthFromDate}
                          toDate={new Date()}
                          captionLayout="dropdown-buttons"
                          fixedWeeks
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="*******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password confirm</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="*******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex gap-2 mt-3">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>I accept the terms and conditions</FormLabel>
                    </div>
                    <FormDescription>
                      By creating an account, you agree to our terms and conditions.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Sign up</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="justify-between">
          <small>Already have an account?</small>
          <Button variant="outline" size="sm">
            <Link href="/login">Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
