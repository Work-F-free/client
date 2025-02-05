import { cn } from '@/lib/shadcn/utils';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Building2, User } from 'lucide-react';
import { Card } from '../ui/card';
import { Title } from '../title';

export enum Theme {
  BLUE = 'blue',
  PINK = 'pink'
}

interface Props {
  theme: Theme
  title: string;
  button: string;
  path: string;
  className?: string
}
export const OfferCard: React.FC<Props> = ({
  theme,
  title,
  button,
  path,
  className,
}) => {
  return (
    <Card className={cn(className, `w-full flex flex-col p-5 h-full justify-between rounded-lg overflow-hidden ${theme === Theme.BLUE ? 'bg-blue-500' : 'bg-pink-300'}`)}>
      <div>
        <div className='bg-gray-50 rounded-lg w-[48px] h-[48px] flex items-center justify-center mb-5'>
          {theme === Theme.BLUE ? <Building2 className={'stroke-blue-500'} size={24} /> : <User className={'stroke-pink-300'} size={24} />}
        </div>
        <Title size='sm' text={title} className={` ${theme === Theme.BLUE ? 'text-white' : ''}`} />
      </div>
      <Link to={path}>
        <Button className={`w-full ${theme === Theme.BLUE ? 'dark' : ''}`}>{button}</Button>
      </Link>
    </Card>
  );
};
