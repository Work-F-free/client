import { cn } from '@/lib/shadcn/utils';
import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../title';
import { Dot, MapPin, Star } from 'lucide-react';
import { Card } from '../ui/card';
import { generateRandomNumber } from '@/moki/generate-rating';
import { generateRandomAdditionals } from '@/moki/generate-additionals';
interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string; 
  className?: string;
}

export const CoworkingCard: React.FC<Props> = ({
  name,
  price, 
  imageUrl,
  className,
}) => {
  return (
    <Card className={cn(className, 'w-full bg-gray-50 rounded-lg overflow-hidden')}>
      <Link to={`/`}>
        <div className="h-[160px] relative overflow-hidden">
          <img className="w-full object-cover object-left-bottom h-full absolute top-0" src={imageUrl} alt={name} />
        </div>
        <div className="p-4">
          <Title text={name} size="xs" className="mb-1 font-light text-blue-600" />
          <div className='flex gap-2'>
            <span className="text-[16px] flex gap-1  text-yellow-400">
              <Star size={20} fill="#FFBA18" strokeWidth={0} />
              {generateRandomNumber(4.2, 5).toFixed(1)}
            </span>
            <span>
            {generateRandomAdditionals().map((addition, index) => (
                <span key={index} className="text-[16px] font-light inline-flex
                ">
                  <Dot />
                  {addition}
                </span>
              ))}
            </span>
          </div>

          <div className="text-[18px] my-3">
            Средняя цена: {price}&nbsp;₽
          </div>

          <span className="flex font-light gap-1 items-center text-[14px] text-gray-400">
            <MapPin size={12} /> в 5 минутах от вас
          </span>
        </div>
      </Link>
    </Card>
  );
};
