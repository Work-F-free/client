import { FC } from 'react'
import { CoworkingMainFilter } from '@/feature/search';
import { Title } from '../title';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Geolocation } from '@/feature/geolocation';


export const Banner: FC = () => {
  return (
    <div className="h-[650px] md:h-[450px] relative overflow-hidden rounded">
      <Geolocation className='absolute z-10 m-1 sm:m-6' />
      <img className="w-full object-cover object-center h-full absolute top-0 " src='/banner-bg.png' alt='Koworka' />
      <div className='h-full absolute  w-full bg-black/30'></div>
      <Link to='/'>
        <div className='w-full flex justify-center text-[10px] py-2 font-light gap-2 absolute bottom-0 bg-black/55 text-center  cursor-pointer'>
          <span className='text-white'> На фото: </span>
          <span className='flex gap-2 items-center'>
            <span className='text-blue-500'>Innnwork Eреван </span>
            <ArrowRight size={10} className={'stroke-blue-500'} />
          </span>
        </div>
      </Link>
      <div className='absolute h-full w-full z-10'>
        <div className='flex flex-col p-6 gap-4 h-full items-center justify-center  '>
          <Title text={'Если выбор коворкинга, то koworka '} size="lg" className="font-semibold text-center text-white" />
          <CoworkingMainFilter />
        </div>
      </div>
    </div>
  );
};
