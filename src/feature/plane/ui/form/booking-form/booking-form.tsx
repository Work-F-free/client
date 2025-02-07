import { DateVariants } from "@/components/date-variants";
import { Button } from "@/components/ui/button";
import { formatTime, generateDatesMap, generateSchedule } from "@/lib";
import { FC, useEffect, useState } from "react";

interface BookingFormProps {
  seat?: number
}

type TBooking = {
  from: Date;
  to: Date;
}

export const BookingForm: FC<BookingFormProps> = ({ seat }) => {
  const [booked, setBookings] = useState<TBooking[]>([]);
  const dates = generateDatesMap(5);
  const [date, setDate] = useState(new Date());
  const [schedule, setSchedule] = useState<TBooking[]>([]);

  useEffect(() => {
    const generatedSchedule = generateSchedule(date)
    setSchedule(generatedSchedule);
  }, [date]);


  function isTimeSlotBooked(startTime: Date): boolean {
    const start = new Date(startTime);

    for (const booking of booked) {
      const bookingFrom = new Date(booking.from);
      const bookingTo = new Date(booking.to);

      if (start >= bookingFrom && start < bookingTo) {
        return true;
      }
    }

    return false;
  }


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
          "seatNumber": 1,
          "capacity": 0,
          "price": 230,
          "description": "string",
          "bookings": [
            {
              "from": new Date("2025-02-07T07:33:15.809Z"),
              "to": new Date("2025-02-07T07:43:15.809Z")
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
              "from": new Date("2025-02-07T07:43:15.809Z"),
              "to": new Date("2025-02-07T07:43:15.809Z")
            }
          ]
        }
      ],
      "description": "string"
    }

    const book = responce.seats.find(item => item.seatNumber === Number(seat))?.bookings || []
    setBookings(book)
  }, []);


  return <div>
    <DateVariants
      items={dates}
      value={date}
      onClick={(value) => setDate(value)}
    />
    <div className="my-4">
      {schedule.map((item, index) => (
        <div className={'border-b py-2 '} key={index}>
          <span >{formatTime(item.from)}</span>
          <Button className="ml-4 sm:w-5/6 text-start" variant="ghost" disabled={isTimeSlotBooked(item.from)}>
            {isTimeSlotBooked(item.from) ? 'Забронировано' : 'Забронировать'}
          </Button>
        </div>
      ))}

    </div>

  </div>;
};
