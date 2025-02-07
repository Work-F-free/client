import { Container } from '@/components/container';
import { CoworkingInfo } from '@/components/coworking-info';
import { Title } from '@/components/title';
import { Button } from '@/components/ui/button';
import { CoworkingItemDetailed } from '@/feature/list/model';
import { CoworkingChunk } from '@/feature/map';
import { PlanView, TPlane } from '@/feature/plane';
import { generateCoordinates } from '@/moki/generate-coordinates';
import { generateRandomNumber } from '@/moki/generate-rating';
import { MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const examplePlanCleint: TPlane = {
  id: "1",
  background: "",
  seats: [
    {
      seat_n: "1",
      type: "workplace",
      color: "#ef4444",
      coord_x: 100,
      coord_y: 100,
      capacity: 1,
      price: 500,
    },
    {
      seat_n: "2",
      type: "meeting_room",
      color: "#22c55e",
      coord_x: 200,
      coord_y: 200,
      capacity: 4,
      price: 2000,
    },
  ],
};

const Coworking = () => {
  const [item, setItem] = useState<CoworkingItemDetailed>();
  const bookRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const scrollToElement = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    //   const getCoworkingDetail = async () => {
    //     try {
    //       const response = await fetch(
    //         ' '
    //       ).catch((err) => console.error(err));

    //       if (!response?.ok) {
    //         throw new Error(`HTTP error!: ${response?.status}`);
    //       } 

    //       const data: CoworkingItemDetailed = await response.json();
    setItem({
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
    });
    //     } catch (error) {
    //       console.error("Error fetching articles:", error);
    //     }
    //   };

    //   getCoworkingDetail();
  }, []);


  return (
    <Container variant={'default'}>
      <div className=' md:flex justify-between mt-4'>
        <div>
          <span className='bg-gray-200 font-semibold rounded-md px-4 py-1 mr-4'>
            от {item?.seats?.reduce((min, seat) => {
              return seat.price < min ? seat.price : min;
            }, Infinity)}  ₽
          </span>
          <span className='bg-slate-200 font-semibold rounded-md px-4 py-1'>
            {item?.seats?.reduce((sum, seat) => sum + seat.capacity, 0)} свободных мест
          </span>

          <Title text={item?.name ?? ''} size="xl" className="font-extrabold" />
        </div>
        <Button onClick={() => scrollToElement(bookRef)} className='bg-blue-500 w-full md:w-auto'>Забронировать</Button>
      </div>{item && <CoworkingInfo item={item} />}
      <span onClick={() => scrollToElement(mapRef)} className="flex cursor-pointer font-light gap-1 items-center text-[16px] text-gray-400">
        <MapPin size={12} /> {item?.address}
      </span>

      <div className="h-[500px] relative">
        <img className="w-full object-cover object-center h-full absolute top-0" src={`/coworkings/coworkings-${generateRandomNumber(1, 10).toFixed(0)}.jpeg`} alt={item?.name} />
      </div>
      <div id="book" ref={bookRef} className='mt-8'>

        <PlanView mode={"client"} initalPlane={examplePlanCleint} />
      </div>

      <div id="map" ref={mapRef} >
        <CoworkingChunk className='my-8' geometrylist={[{ geometry: generateCoordinates(), id: 1 }]} />
      </div>
    </Container>
  );
};

export default Coworking;
