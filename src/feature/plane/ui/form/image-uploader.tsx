import { Input } from "@/components/ui/input";
import { ChangeEvent, FC, useCallback } from "react";

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

export const ImageUploader: FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const handlerChangeFile = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        onImageUpload(file);
      }
    },
    [onImageUpload],
  );

  return (
    <div>
      <Input type="file" accept="image/*" onChange={handlerChangeFile} />
    </div>
  );
};
