import { useState } from "react";
import { s3minio } from "@/config/minio";

interface UpdateImageProps {
  imageData?: Uint8Array | null;
  onUpdate: (file: File) => void;
}

interface UpdateImageProps {
  imageData?: Uint8Array | null;
  onUpdate: (file: File) => void;
}

export const UpdateImage: React.FC<UpdateImageProps> = ({
  imageData,
  onUpdate,
}) => {
  const [preview, setPreview] = useState<string | null>(
    imageData ? URL.createObjectURL(new Blob([imageData])) : null,
  );

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onUpdate(file);

      const params = {
        Bucket: s3minio.bucketName,
        Key: s3minio.generate_name_photo(
          "ekqmfp1i32fm13f",
          "innwork",
          file.name,
        ),
        Body: file,
      };

      try {
        await s3minio.minioClient.upload(params).promise();
        console.log("File uploaded successfully");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
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
