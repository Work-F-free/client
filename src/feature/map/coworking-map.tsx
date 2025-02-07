import { paths } from '@/config/paths/paths';
import { cn } from '@/lib/shadcn/utils';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface CoworkingMapProps {
  className?: string,
  geometrylist: { geometry: [string, string], id: string | number }[]
}


export const CoworkingMapFC: FC<CoworkingMapProps> = ({ className, geometrylist }) => {
  const navigate = useNavigate();
  const mapOptions = {
    center: [59.9386, 30.3141],
    zoom: 11,
    controls: ["zoomControl"]
  }
  return (
    <section className={cn(className)} id="map">
      <YMaps query={{ load: "package.full" }}>
        <Map
          state={mapOptions}
          width="100%"
          height="80vh"
        >
          {geometrylist.map((item) => (
            <Placemark
              onClick={() => { navigate(paths.agrageted.coworking_id(item.id.toString())) }}
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
