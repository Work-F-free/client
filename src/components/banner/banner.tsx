import { FC } from 'react';

import { CoworkingSearch } from '@/feature/search';
import { Title } from '../title';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


interface BannerProps {
  className?: string
}


export const Banner: FC<BannerProps> = (({ }) => {
  return (
    <div className="h-[650px] md:h-[450px] relative overflow-hidden rounded">
      <img className="w-full object-cover object-center h-full absolute top-0 " src='/banner-bg.png' alt='banner' />
      <div className='h-full absolute  w-full bg-black/30'></div>
      <div className='w-full flex justify-center text-[10px] py-2 font-light gap-2 absolute bottom-0 bg-black/55 text-center'>
        <span className='text-white'> На фото: </span>
        <Link to='/'>
          <span className='flex gap-2 items-center'>
            <span className='text-blue-500'>Innnwork Eреван </span>
            <ArrowRight size={10} className={'stroke-blue-500'} />
          </span>
        </Link>
      </div>

      <div className='absolute h-full w-full'>
        <div className='flex flex-col p-6 gap-4 h-full items-center justify-center  '>
          <Title text={'Если выбор коворкинга, то WORK FREE '} size="lg" className="font-semibold  text-center text-white" />
          <CoworkingSearch />
        </div>
      </div>
    </div>
  );
})
