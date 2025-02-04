import { cn } from '@/lib/shadcn/utils';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { FC } from 'react';


interface CoworkingMapProps {
  className?: string
}

const coworkingData = [
  {
    id: 1,
    geometry: [55.751574, 37.573856],
    name: 'Коворкинг 1',
    additions: ['Wi-Fi', 'Парковка', 'Чай'],
    price: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    geometry: [55.765432, 37.604212],
    name: 'Коворкинг 2',
    additions: ['Wi-Fi', 'Кофе', 'Принтер'],
    price: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 3,
    geometry: [55.742124, 37.627654],
    name: 'Коворкинг 3',
    additions: ['Wi-Fi', 'Кухня'],
    price: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
];


export const CoworkingMap: FC<CoworkingMapProps> = ({ className }) => {
  const mapOptions = {
    center: [55.76, 37.64],
    zoom: 13,
    controls: ["zoomControl"]
  }
  return (
    <section className={cn(className)}>
      <YMaps query={{ load: "package.full" }}>
        <Map
          state={mapOptions}
          width="100%"
          height="80vh"
        >
          {coworkingData.map((item) => (
            <Placemark
              onClick={() => { }}
              key={item.id}
              defaultGeometry={item.geometry}
              options={{
                iconImageSize: [10, 10],
                preset: "islands"
              }}
            />
          ))}
        </Map>
      </YMaps>
    </section>
  );
};
