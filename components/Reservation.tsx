// components/Reservation.tsx
"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
};

export function Reservation() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="reservation" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-3xl mx-auto">
        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="font-serif text-3xl text-secondary">Reserve Your Table</CardTitle>
            <CardDescription>Book a table online and we'll confirm shortly.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" {...register("name", { required: true })} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" {...register("phone", { required: true })} />
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" {...register("date", { required: true })} />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" {...register("time", { required: true })} />
                </div>
                <div>
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input id="guests" type="number" min="1" {...register("guests", { required: true, min: 1 })} />
                </div>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={status === "loading"}>
                {status === "loading" ? "Submitting..." : "Book Table"}
              </Button>
              {status === "success" && <p className="text-green-600 text-center">Reservation request sent! We'll confirm soon.</p>}
              {status === "error" && <p className="text-red-600 text-center">Something went wrong. Please call us directly.</p>}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}