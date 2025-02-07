import { dateToText } from "@/lib";
import { cn } from "@/lib/shadcn/utils";


interface DateVariantsProps {
  items: readonly Date[];
  onClick?: (value: Date) => void;
  value?: Date;
  className?: string;
}

export const DateVariants: React.FC<DateVariantsProps> = ({
  items,
  onClick,
  className,
  value,
}) => {
  return (
    <div
      className={cn(
        className,
        'flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none'
      )}
    >
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => onClick?.(item)}
          className={cn(
            'flex items-center text-primary justify-center cursor-pointer h-[25px] sm:h-[30px] px-3 sm:px-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
            {
              'bg-white shadow': dateToText(item) === dateToText(value),
            }
          )}
        >
          <b>{dateToText(item)} </b>
        </button>
      ))}
    </div>
  );
};
