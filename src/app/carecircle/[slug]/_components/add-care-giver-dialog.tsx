"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import addCareCircle from "@/utils/careCircle/addCareCircleUtil";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import addCareGiverSchema from "@/schema/AddCareGiverSchema";
import { useState } from "react";
import { inviteCareGiver } from "@/services/api/carecircle";
import { useParams } from "next/navigation";

const AddCareGiver = () => {
  const form = useForm({
    resolver: zodResolver(addCareGiverSchema),
    defaultValues: {
      email: "",
    },
  });
  const [open, setOpen] = useState(false);
  const carecircleId: { slug: string } = useParams();
  const onSubmit = async (data: z.infer<typeof addCareGiverSchema>) => {
    const response = await inviteCareGiver(carecircleId.slug, data);
    if (response && response.isSuccess) {
      setOpen(false);
      alert(`Invitation sent to ${data.email}`);
    } else {
      alert(`Couldn't send the invite. Please try again`);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="my-6">
        <Button variant="outline">Invite to Care Team</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite to Care Team</DialogTitle>
          <DialogDescription>
            Send invite to join this carecircle
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Enter Email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCareGiver;
