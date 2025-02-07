import { EditFormCow } from "./form/edit-form-cow";
import { TEditCoworkigShema } from "../shema/shema-config";
import { FC } from "react";

interface CoworkingConfigProps {
  initalData: TEditCoworkigShema;
}

export const CoworkingConfig: FC<CoworkingConfigProps> = ({ initalData }) => {
  return (
    <div className="w-full">
      <EditFormCow initalData={initalData} />
    </div>
  );
};
