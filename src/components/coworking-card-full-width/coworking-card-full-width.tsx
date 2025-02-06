import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, } from 'lucide-react';
import { Card } from '../ui/card';
import { generateRandomNumber } from '@/moki/generate-rating';
import { CoworkingItem } from '@/feature/list/model';
import { CoworkingInfo } from '../coworking-info/coworking-info';
import { Title } from '../title';
import { paths } from '@/config/paths/paths';

interface Props {
  item: CoworkingItem
}

export const CoworkingCardFullWidth: React.FC<Props> = ({
  item
}) => {
  return (
    <Link to={paths.agrageted.coworking_id(item.id)}>
      <Card className='sm:flex flex-1 overflow-hidden cursor-pointer  bg-stone-50 hover:bg-blue-50 transition duration-300'>
        <div className="h-[200px] sm:h-auto sm:w-2/5 relative">
          <img className="w-full object-cover object-center h-full absolute top-0" src={`/coworkings/coworkings-${generateRandomNumber(1, 10).toFixed(0)}.jpeg`} alt={item.name} />
        </div>
        <div className="w-full px-7 py-5 ">
          <Title text={item.name} size="md" className="font-extrabold mb-1" />
          <CoworkingInfo item={item} />
          <span className="flex font-light gap-1 items-center text-[14px] text-gray-400">
            <MapPin size={12} /> {item.address}
          </span>
        </div>
      </Card>
    </Link>
  );
};
