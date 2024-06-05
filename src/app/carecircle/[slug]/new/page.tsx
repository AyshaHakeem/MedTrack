"use client";

import { z } from "zod";
import { useForm, useFieldArray } from "react-hook-form";
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

export default function DemoForm() {
  let num = 0;
  const form = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    mode: "onBlur",
    defaultValues: {
      patient_name: "",
      medicines: [
        {
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

  const {
    fields: doseFields,
    append: appendDose,
    remove: removeDose,
  } = useFieldArray({
    name: `medicines.${num}.doses`,
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <ScrollArea className="h-[70vh]">
              <div className="space-y-4">
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

                {medicineFields.map((medicine, index) => {
                  return (
                    <div
                      key={medicine.id}
                      className="space-y-4 border p-4 rounded-md relative"
                    >
                      {index > 0 && (
                        <Button
                          type="button"
                          variant="ghost"
                          className="absolute top-2 right-2"
                          onClick={() => {
                            num = index;
                            removeMedicine(index);
                          }}
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
                      <div className="flex space-between">
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
                      <div className="space-y-4 border-t pt-4">
                        <h2 className="text-sm">Doses</h2>
                        {doseFields.map((dose, doseIndex) => (
                          <div key={dose.id} className="space-y-2 relative">
                            {doseIndex > 0 && (
                              <Button
                                type="button"
                                variant="ghost"
                                className="absolute top-2 right-2"
                                onClick={() => removeDose(doseIndex)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                            <div className="flex space-between">
                              <FormField
                                control={form.control}
                                name={`medicines.${index}.doses.${doseIndex}.time`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Time</FormLabel>
                                    <FormControl>
                                      <Input
                                        {...field}
                                        type="time"
                                        placeholder="Time"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name={`medicines.${index}.doses.${doseIndex}.dose`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Dose</FormLabel>
                                    <FormControl>
                                      <Input
                                        {...field}
                                        type="text"
                                        placeholder="Dose"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name={`medicines.${index}.doses.${doseIndex}.note`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Note</FormLabel>
                                    <FormControl>
                                      <Input
                                        {...field}
                                        type="text"
                                        placeholder="Note"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() =>
                            appendDose({ time: "", dose: "", note: "" })
                          }
                        >
                          Add Dose
                        </Button>
                      </div>
                    </div>
                  );
                })}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    appendMedicine({
                      name: "",
                      from_date: "",
                      to_date: "",
                      doses: [{ time: "", dose: "", note: "" }],
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
