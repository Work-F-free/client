import { FC, memo } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';
import { CoworkingCard } from '../coworking-card';
import { OfferCard, Theme } from '../offer-card';
import { cn } from '@/lib/shadcn/utils';
import { Title } from '../title';


interface RecommendationProps {
  className?: string
}

const quantity = 10;

export const Recommendation: FC<RecommendationProps> = memo(({ className }) => {
  return (
    <div className={cn('px-12 relative', className)}>
      <Title text={'Подобрали для вас'} size="md" className="mb-4 font-bold" />
      <Carousel
        className="w-full pb-6"
      >
        <CarouselContent>
          {Array.from({ length: quantity }).map((_, index) => {

            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/5">
                {
                  index === quantity - 1 ? (
                    <OfferCard theme={Theme.BLUE} title='Разместить свой коворкинг' button='Разместить' path="/" />
                  ) : index % 5 === 2 ? (
                    <OfferCard theme={Theme.PINK} title='Посмотреть все предложения' button='Открыть' path="/" />
                  ) : (
                    <CoworkingCard
                      id={index}
                      name={'Коворкинг'}
                      additions={['Wi-Fi', 'Парковка', 'Чай']}
                      price={2000}
                      imageUrl={'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
                    />
                  )
                }
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute top-1/2 -left-10 flex items-center justify-center"  >
          <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0  " />
        </div>
        <div className="absolute top-1/2 -right-10 flex items-center justify-center"  >
          <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 " />
        </div>
      </Carousel>
    </div>

  );
})
