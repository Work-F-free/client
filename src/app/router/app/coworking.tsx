import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { CoworkingConfig } from "@/feature/coworking-config";
import { PlanView } from "@/feature/plane";
import { Button } from "@/components/ui/button";
import { UpdateImage } from "@/feature/coworking-config/ui/update-image";
import { AppState } from "@/store";
import { setImageFile } from "@/store/slice/coworking/coworking-slice";
import { CoreServiceAPI, CreateUpdateCoworkingRequest } from "@/config/api";
import { TSeat } from "@/feature/plane/type/type";

const Coworking = () => {
  const { action } = useParams<{ action?: string }>();
  const dispatch = useDispatch();

  const { formData, planeData, imageFile } = useSelector(
    (state: AppState) => state.coworking,
  );

  const [imagePreview, setImagePreview] = useState<string | null>(
    imageFile ? URL.createObjectURL(imageFile) : null,
  );

  const handleImageUpdate = (file: File) => {
    setImagePreview(URL.createObjectURL(file));
    dispatch(setImageFile(file));
  };

  const handleSubmit = () => {
    if (
      !formData.name_coworking ||
      !formData.address ||
      !formData.description
    ) {
      alert("Заполните все поля!");
      return;
    }

    if (!planeData.seats.length) {
      alert("Добавьте хотя бы одно место!");
      return;
    }

    if (!imageFile) {
      alert("Загрузите изображение!");
      return;
    }

    const CoreApi = new CoreServiceAPI();
    const NewCoowrking: CreateUpdateCoworkingRequest = {
      address: formData.address,
      name: formData.name_coworking,
      description: formData.description,
      owner: "Efim",
      latitude: 0,
      longitude: 0,
      seats: planeData.seats.map((seat: TSeat) => ({
        seatNumber: seat.seat_n,
        type: seat.type,
        capacity: seat.capacity,
        price: seat.price,
        description: "Default description",
      })),
    };

    console.log(NewCoowrking);

    const resNewCow = CoreApi.createCoworking(NewCoowrking);

    console.log(resNewCow);
  };

  return (
    <section className="flex flex-col gap-6">
      <UpdateImage imagePreview={imagePreview} onUpdate={handleImageUpdate} />
      <CoworkingConfig initalData={formData} />
      <PlanView key={action} mode={"editor"} initalPlane={planeData} />
      <div className="w-full h-[1px] bg-gray-200"></div>
      <Button onClick={handleSubmit}>
        {action === "new" ? "Добавить" : "Обновить"}
      </Button>
    </section>
  );
};

export default Coworking;
