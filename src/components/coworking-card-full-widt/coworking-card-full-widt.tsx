import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../title';
import { Check, MapPin, Star } from 'lucide-react';
import { Card } from '../ui/card';
import { generateRandomNumber } from '@/moki/generate-rating';
import { generateRandomAdditionals } from '@/moki/generate-additionals';
import { CoworkingItem } from '@/feature/list/model';
interface Props {
  item: CoworkingItem
}

export const CoworkingCardFullWidth: React.FC<Props> = ({
  item
}) => {
  return (
    <Link to={`/coworkings/${item.id}`}>
      <Card className='sm:flex flex-1 overflow-hidden cursor-pointer  bg-stone-50 hover:bg-blue-50 transition duration-300'>
        <div className="h-[200px] sm:h-auto  sm:w-2/5 relative">
          <img className="w-full object-cover object-center h-full absolute top-0" src={`/coworkings/coworkings-${generateRandomNumber(1, 10).toFixed(0)}.jpeg`} alt={item.name} />
        </div>

        <div className="w-full px-7 py-5 ">
          <Title text={item.name} size="md" className="font-extrabold mb-1" />

          <div className='flex gap-3 items-center mb-4'>
            <Title text={item.owner} size="xs" className="font-semibold text-gray-600" />
            <span className="flex gap-1">
              <Star size={20} fill="#FFBA18" strokeWidth={0} />
              <span className="text-[16px] flex gap-1  text-yellow-400 mr-3">
                {generateRandomNumber(4.2, 5).toFixed(1)}
              </span>
            </span>
            <span className='text-gray-500 text-[12px]'>{generateRandomNumber(13, 76).toFixed(0)} оценок</span>

          </div>
          <p>{item.description}</p>
          <ul className='mb-8 pl-2'>
            {generateRandomAdditionals().map((item, index) => (
              <li key={index} className='flex items-center gap-2'>
                <Check size={14} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <span className="flex font-light gap-1 items-center text-[14px] text-gray-400">
            <MapPin size={12} /> {item.address}
          </span>
        </div>
      </Card>
    </Link>
  );
};
