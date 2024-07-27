"use client";

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
import { useParams } from "next/navigation";

import addMedicineUtil from "@/utils/medicine/addMedicineUtil";

export default function DemoForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    mode: "onBlur",
    defaultValues: {
      patientName: "",
      medicineName: "",
      fromDate: "",
      toDate: "",
      note: "",
      doses: [{ time: "", dose: "", note: "" }],
    },
  });

  const {
    fields: doseFields,
    append: appendDose,
    remove: removeDose,
  } = useFieldArray({
    name: "doses",
    control: form.control,
  });
  let careCircleId: { slug: string } = useParams();
  const onSubmit = (values: FormValues) => {
    return addMedicineUtil(careCircleId.slug, values);
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
                  name="patientName"
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
                {/* medicine name */}
                <FormField
                  control={form.control}
                  name="medicineName"
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
                {/* dates */}
                <div className="md:flex">
                  <div className="md:mr-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="fromDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="date"
                              placeholder="From Date"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="md:mr-2 w-1/2">
                    <FormField
                      control={form.control}
                      name="toDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="date"
                              placeholder="To Date"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                {/* note */}
                <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Note</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" placeholder="Note" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {doseFields.map((dose, index) => (
                  <div
                    key={dose.id}
                    className="space-y-4 border p-4 rounded-md relative"
                  >
                    {index > 0 && (
                      <Button
                        type="button"
                        variant="ghost"
                        className="absolute top-2 right-2"
                        onClick={() => removeDose(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                    <div className="md:flex">
                      <div className="md:mr-2 w-1/3">
                        <FormField
                          control={form.control}
                          name={`doses.${index}.dose`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Dose</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="text"
                                  placeholder="Prescribed Dose"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="md:mr-2 w-1/3">
                        <FormField
                          control={form.control}
                          name={`doses.${index}.time`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Dose Time</FormLabel>
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
                      </div>
                      <div className="md:mr- w-1/3">
                        <FormField
                          control={form.control}
                          name={`doses.${index}.note`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Note</FormLabel>
                              <FormControl>
                                <Input {...field} type="text" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add dose button */}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    appendDose({
                      // id: `${useID}`,
                      dose: "",
                      time: "",
                      note: "",
                    })
                  }
                >
                  Add Dose
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
