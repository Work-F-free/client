import { cn } from "@/lib/shadcn/utils";

 
interface GroupVariantsProps {
  items: readonly number[];
  onClick?: (value: number) => void;
  value?: number;
  className?: string;
}

export const GroupVariants: React.FC<GroupVariantsProps> = ({
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
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onClick?.(item)}
          className={cn(
            'flex items-center text-primary justify-center cursor-pointer h-[25px] sm:h-[30px] px-3 sm:px-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
            {
              'bg-white shadow': item === value,
            }
          )}
        >
          <b>{item} </b>
        </button>
      ))}
    </div>
  );
};
