import { Title } from "@/components/title";
import { EditFormCow } from "./form/edit-form-cow";

export const CoworkingConfig = () => {
  return (
    <div className="w-full">
      <Title text="Новый ковворикнг" className="font-medium" />

      <EditFormCow />
    </div>
  );
};
