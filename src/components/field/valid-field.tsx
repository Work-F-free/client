import { HTMLInputTypeAttribute } from "react";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

interface PropsValidateField<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  rules?: RegisterOptions<T>;
  type?: HTMLInputTypeAttribute;
}

export const ValidateField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  rules,
  type,
}: PropsValidateField<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>
          <FormMessage>
            {fieldState.error ? fieldState.error.message : null}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};
