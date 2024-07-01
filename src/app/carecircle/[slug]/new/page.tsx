"use client";

import { z } from "zod";
import { useForm, useFieldArray } from "react-hook-form";
import { useId } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { validationSchema, FormValues } from "@/schema/MedLogSchema";
import { DialogFooter } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2 } from "lucide-react";
import DoseFields from "../_components/DoseFields"; // Import the new DoseFields component

export default function DemoForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    mode: "onBlur",
    defaultValues: {
      patient_name: "",
      medicines: [
        {
          // id: "1", // Example of unique ID, you should generate this dynamically
          name: "",
          from_date: "",
          to_date: "",
          doses: [{ time: "", dose: "", note: "" }],
        },
      ],
    },
  });

  const {
    fields: medicineFields,
    append: appendMedicine,
    remove: removeMedicine,
  } = useFieldArray({
    name: "medicines",
    control: form.control,
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl font-bold mx-auto">Add Entry</h2>
      <div className="flex justify-center items-center mt-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 md:w-3/4"
          >
            <ScrollArea className="h-[70vh] p-2">
              <div className="space-y-4 pr-2">
                {/* patient name */}
                <FormField
                  control={form.control}
                  name="patient_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Patient Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Patient Name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {medicineFields.map((medicine, index) => (
                  <div
                    key={medicine.id}
                    className="space-y-4 border p-4 rounded-md relative"
                  >
                    {index > 0 && (
                      <Button
                        type="button"
                        variant="ghost"
                        className="absolute top-2 right-2"
                        onClick={() => removeMedicine(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                    <FormField
                      control={form.control}
                      name={`medicines.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Medicine Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              placeholder="Medicine Name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="md:flex space-between">
                      <div className="md:mr-4">
                        <FormField
                          control={form.control}
                          name={`medicines.${index}.from_date`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>From Date</FormLabel>
                              <FormControl>
                                <Input {...field} type="date" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div>
                        <FormField
                          control={form.control}
                          name={`medicines.${index}.to_date`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>To Date</FormLabel>
                              <FormControl>
                                <Input {...field} type="date" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <DoseFields control={form.control} medicineIndex={index} />
                  </div>
                ))}

                {/* Add medicine button */}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    appendMedicine({
                      // id: `${useID}`,
                      name: "",
                      from_date: "",
                      to_date: "",
                      doses: [
                        {
                          // id: `${new Date().getTime()}-dose`,
                          time: "",
                          dose: "",
                          note: "",
                        },
                      ],
                    })
                  }
                >
                  Add Medicine
                </Button>
              </div>
            </ScrollArea>
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </div>
    </div>
  );
}
