import React from 'react';
import { Title } from '../title';
import { Check, Star } from 'lucide-react';
import { generateRandomNumber } from '@/moki/generate-rating';
import { CoworkingItem } from '@/feature/list/model';
import { generateRandomAdditionals } from '@/moki/generate-additionals';
interface Props {
  item: CoworkingItem
}

export const CoworkingInfo: React.FC<Props> = ({
  item
}) => {
  return (
    <> 
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
    </>
  );
};
