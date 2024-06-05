"use client";
import { useRouter } from "next/navigation";
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useForm, useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ccschema from "@/schema/AddCareCircleSchema";

const AddMedLog = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(ccschema),
    defaultValues: {
      name: "",
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

  const { fields: medicineFields, append: appendMedicine } = useFieldArray({
    control: form.control,
    name: "medicines",
  });

  const { fields: doseFields, append: appendDose } = useFieldArray({
    control: form.control,
    name: "doses",
  });

  const onSubmit = (data: z.infer<typeof ccschema>) => {
    // TODO: handle submission
    console.log(data);
    return "";
    // return addMedLog(data, router);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Patient Name</FormLabel>
                <FormControl>
                  <Input {...field} type="text" placeholder="Patient Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {medicineFields.map((medicine, index) => (
            <div key={medicine.id} className="space-y-4 border p-4 rounded-md">
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
                  <div key={dose.id} className="space-y-2">
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
                  onClick={() => appendDose({ time: "", dose: "", note: "" })}
                >
                  Add Dose
                </Button>
              </div>
            </div>
          ))}
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
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default AddMedLog;
