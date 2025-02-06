import { FC } from 'react';
import { Title } from '../title';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { cn } from '@/lib/shadcn/utils';

interface InfoBlockProps {
  className?: string
}

const info = [
  {
    title: "Удобный поиск",
    description: 'Быстрый поиск по фильтрам.',
  },
  {
    title: "Простое бронирование",
    description: 'Бронирование в пару кликов.',
  },
  {
    title: "Гибкие условия",
    description: 'Бронирование на час, день, месяц.',
  },
  {
    title: "Безопасная оплата",
    description: 'Оплата онлайн картой или кошельком.',
  }
];


export const InfoBlock: FC<InfoBlockProps> = (({ className }) => {
  return (
    <div className={cn(className)}>

      <div className='flex gap-4 mb-6'>
        <div className="hidden xl:block w-[350px] relative overflow-hidden rounded">
          <img className="w-full object-cover object-center h-full absolute top-0 " src='/notebook.png' alt='' />
        </div>
        <div>
          <Title text={'Весь функционал в удобном личном кабинете'} size="md" className="mb-2 font-bold" />
          <p className='mb-4'>Никакой бюрократии, всё под рукой. Пользуйтесь в смартфоне или на компьютере, как вам удобнее.</p>


          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>

            {info.map((item, index) => {
              return (
                <Card key={index} className='p-4'>
                  <Title size='sm' text={item.title} className='mb-2' />
                  <p className='font-light'>{item.description}</p>
                </Card>
              );
            })}
          </div>
          <Button className='px-14'>Регистрация</Button>
        </div>
      </div>
    </div>
  );
})
