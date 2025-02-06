import { FC } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';
import { CoworkingCard } from '../coworking-card';
import { OfferCard, Theme } from '../offer-card';
import { cn } from '@/lib/shadcn/utils';
import { Title } from '../title';


interface RecommendationProps {
  className?: string
}

const quantity = 10;

export const Recommendation: FC<RecommendationProps> = ({ className }) => {
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
                      price={2000}
                      imageUrl={`/coworkings/coworkings-${index % 10 + 1}.jpeg`}
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
}
