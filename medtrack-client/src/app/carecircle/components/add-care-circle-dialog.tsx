"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import addCareCircle from "@/utils/careCircle/addCareCircleUtil"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import ccschema from "@/schema/addCareCircleSchema"

  
const AddCareCircle = () => {

    const router = useRouter()

    const form = useForm({
      resolver: zodResolver(ccschema),
      defaultValues: {
          name: ""
      },
    });

    const onSubmit =  (data: z.infer<typeof ccschema>) => {
        return addCareCircle(data, router)
    }


    return (
      <Dialog>
      <DialogTrigger asChild className="my-6">
        <Button variant="outline">Create New CareCircle</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Care Circle</DialogTitle>
          <DialogDescription>
            Create a care circle and add care givers to manage patients 
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input
                        {...field}
                        type="text"
                        placeholder="Round 1"
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <DialogFooter>
              <Button type="submit" >Submit</Button>
            </DialogFooter>
            </form>
        </Form>
      </DialogContent>
      </Dialog>
      
    )
}

export default AddCareCircle
