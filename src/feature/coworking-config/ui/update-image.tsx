import { useState } from "react";

interface UpdateImageProps {
  imagePreview?: string | null;
  onUpdate: (file: File) => void;
}

export const UpdateImage: React.FC<UpdateImageProps> = ({
  imagePreview,
  onUpdate,
}) => {
  const [preview, setPreview] = useState<string | null>(imagePreview || null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      onUpdate(file);
    }
  };

  return (
    <div className="w-full h-48 border border-gray-300 rounded-lg flex items-center justify-center relative overflow-hidden">
      {preview ? (
        <img
          src={preview}
          alt="Uploaded"
          className="object-cover w-full h-full"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
          Нет фото ;с
        </div>
      )}
      <label className="absolute bottom-2 right-2 bg-gray-900 text-white px-3 py-2 text-sm rounded cursor-pointer">
        Обновить
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};
