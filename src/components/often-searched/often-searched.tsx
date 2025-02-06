import { cn } from '@/lib/shadcn/utils';
import React from 'react';
import { Title } from '../title';
import { paths } from '@/config/paths/paths';

interface OftenSearchedProps {
  className?: string
}

const list = [
  {
    description: 'Найти ближайший коворкинг',
    image: 'buildings.png',
    path: '#map'
  },
  {
    description: 'Арендовать переговорную',
    image: 'conference-room.png',
    path: paths.agrageted.coworking_list()
  }, {
    description: 'Организовать мероприятие',
    image: 'event-space.png',
    path: paths.agrageted.coworking_list()
  }, {
    description: 'Личный аккаунт',
    image: 'buildings.png',
    path: paths.app.profile()
  }
]

export const OftenSearched: React.FC<OftenSearchedProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Title text={'Часто ищут'} size="md" className="mb-2 font-bold" />
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 '>  {
        list.map((item, index) => (
          <a key={index} href={item.path}>
            <div className="h-[100px] relative overflow-hidden rounded">
              <img className="w-full object-cover object-center h-full absolute top-0 " src={item.image} alt={item.description} loading='lazy' />
            </div>
            <p className='text-[14px] mt-1 mb-6'>{item.description}</p>
          </a>
        ))
      }
      </div>
    </div>
  );
};
