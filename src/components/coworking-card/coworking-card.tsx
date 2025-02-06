import { cn } from '@/lib/shadcn/utils';
import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../title';
import { Dot, MapPin, Star } from 'lucide-react';
import { Card } from '../ui/card';
import { generateRandomNumber } from '@/moki/generate-rating';
import { generateRandomAdditionals } from '@/moki/generate-additionals';
import { paths } from '@/config/paths/paths';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const CoworkingCard: React.FC<Props> = ({
  id, 
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <Link to={paths.agrageted.coworking_id(id)}>
      <Card className={cn(className, 'w-full  cursor-pointer hover:bg-gray-50 transition duration-300 rounded-lg overflow-hidden h-full')}>
        <div className="h-[160px] relative overflow-hidden">
          <img className="w-full object-cover object-left-bottom h-full absolute top-0" src={imageUrl} alt={name} />
        </div>
        <div className="p-4">
          <div>
            <Title text={name} size="xs" className="mb-1 text-blue-600" />
            <div className='gap-2 min-h-[80px] mb-2'>
              <span className="text-[16px] items-center  gap-1 font-semibold text-yellow-400 inline-flex
                ">
                <Star size={20} fill="#FFBA18" strokeWidth={0} />
                {generateRandomNumber(4.2, 5).toFixed(1)}
              </span>
              {generateRandomAdditionals().map((addition, index) => (
                <span key={index} className="text-[16px] items-center font-light inline-flex
                ">
                  <Dot size={20} />
                  {addition}
                </span>
              ))}
            </div>  
            <Title text={`Средняя цена: ${price}₽`} size="sm" className="mb-4" />
          </div>
          <span className="flex font-light gap-1 items-center text-[14px] text-gray-400">
            <MapPin size={12} /> в 5 минутах от вас
          </span>
        </div>
      </Card>
    </Link>
  );
};
