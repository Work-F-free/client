import { DateVariants } from "@/components/date-variants";
import { GroupVariants } from "@/components/group-variants";
import { TSeat } from "@/feature/plane/type/type";
import { generateDatesMap } from "@/lib";
import { FC, useEffect, useState } from "react";

interface BookingFormProps {
  seat: TSeat
}

export const BookingForm: FC<BookingFormProps> = ({ seat }) => {
  const dates = generateDatesMap(5);
  const [date, setDate] = useState(new Date());



  useEffect(() => {

    const responce = {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "name": "string",
      "address": "string",
      "owner": "string",
      "seats": [
        {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "type": "WORKPLACE",
          "seatNumber": 0,
          "capacity": 0,
          "price": 230,
          "description": "string",
          "bookings": [
            {
              "from": new Date("2025-02-06T07:43:15.809Z"),
              "to": new Date("2025-02-06T07:43:15.809Z")
            }
          ]
        }, {
          "id": "3fa85f64-5717-4562b3fc-2c963f66afa6",
          "type": "WORKPLACE",
          "seatNumber": 0,
          "capacity": 0,
          "price": 210,
          "description": "string",
          "bookings": [
            {
              "from": new Date("2025-02-06T07:43:15.809Z"),
              "to": new Date("2025-02-06T07:43:15.809Z")
            }
          ]
        }
      ],
      "description": "string"
    }

    console.log(responce.seats.find((item) => item.id === "3fa85f64-5717-4562-b3fc-2c963f66afa6"));

  }, []);


  return <div>
    <DateVariants
      items={dates}
      value={date}
      onClick={(value) => setDate(value)}
    />



    <div className=""></div>

  </div>;
};
