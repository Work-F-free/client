import { cn } from '@/lib/shadcn/utils';
import { Navigation } from 'lucide-react';
import { useState, useEffect, FC } from 'react';

interface GeolocationProps {
  className?: string
}

export const Geolocation: FC<GeolocationProps> = ({ className }) => {
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const position: GeolocationPosition = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
        );

        if (!response.ok) {
          return
        }
        const data = await response.json();
        const city = data.address.city || data.address.town || data.address.village || '';
        setLocation(city);
      } catch (err) {
        console.error(err);
      }
    };

    getLocation();
  }, []);
  if (location) {
    return (
      <div className={cn(className)}>
        <span className='bg-black/25 text-white py-1 flex gap-2 items-center px-3 font-light rounded'>
          <Navigation size={16} fill='#fff' /> {location}
        </span>
      </div>
    );
  }

}
