import React from "react";
import { useFieldArray, Control } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

interface DoseFieldsProps {
  control: Control<any>;
  medicineIndex: number;
}

const DoseFields: React.FC<DoseFieldsProps> = ({ control, medicineIndex }) => {
  const {
    fields: doseFields,
    append: appendDose,
    remove: removeDose,
  } = useFieldArray({
    name: `medicines.${medicineIndex}.doses`,
    control,
  });

  return (
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
          <div className="md:flex">
            <div className="md:mr-2">
              <FormField
                control={control}
                name={`medicines.${medicineIndex}.doses.${doseIndex}.time`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <Input {...field} type="time" placeholder="Time" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:mr-2">
              <FormField
                control={control}
                name={`medicines.${medicineIndex}.doses.${doseIndex}.dose`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dose</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Dose" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="md:mr-2">
              <FormField
                control={control}
                name={`medicines.${medicineIndex}.doses.${doseIndex}.note`}
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
            </div>
          </div>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={() =>
          appendDose({
            time: "",
            dose: "",
            note: "",
          })
        }
      >
        Add Dose
      </Button>
    </div>
  );
};

export default DoseFields;
