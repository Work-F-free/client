import { cn } from '@/lib/shadcn/utils';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { FC } from 'react';

interface CoworkingMapProps {
  className?: string,
  geometrylist: [string, string][]
}


export const CoworkingMap: FC<CoworkingMapProps> = ({ className, geometrylist }) => {
  const mapOptions = {
    center: [59.9386, 30.3141],
    zoom: 11,
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
          {geometrylist.map((item, index) => (
            <Placemark
              onClick={() => { }}
              key={index}
              defaultGeometry={item}
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
