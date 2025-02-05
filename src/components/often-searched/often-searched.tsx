import { cn } from '@/lib/shadcn/utils';
import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../title';

interface OftenSearchedProps {
  className?: string
}

const list = [
  {
    description: 'Найти ближайший коворкинг',
    image: 'buildings.png',
    path: '/'
  },
  {
    description: 'Арендовать переговорную',
    image: 'conference-room.png',
    path: '/'
  }, {
    description: 'Организовать мероприятие',
    image: 'event-space.png',
    path: '/'
  }, {
    description: 'Личный аккаунт',
    image: 'buildings.png',
    path: '/'
  }
]

export const OftenSearched: React.FC<OftenSearchedProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Title text={'Часто ищут'} size="md" className="mb-2 font-bold" />
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 '>  {
        list.map((item, index) => (
          <Link key={index} to={item.path}>
            <div className="h-[100px] relative overflow-hidden rounded">
              <img className="w-full object-cover object-center h-full absolute top-0 " src={item.image} alt={item.description} />
            </div>
            <p className='text-[14px] mt-1 mb-6'>{item.description}</p>
          </Link>
        ))
      }
      </div>    </div>
  );
};
