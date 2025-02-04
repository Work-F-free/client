import { SubmitHandler, useForm } from "react-hook-form";

import { Form } from "@/components/ui/form.tsx";

import { TSearchForm } from "../shema/shema-search.ts";

export const SearchForm = () => {
  const handlerSubmitForm: SubmitHandler<TSearchForm> = (data) => {
    console.log(data);
  };

  return (
    <></>
  );
};
