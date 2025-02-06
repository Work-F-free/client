import { cn } from "@/lib/shadcn/utils";
import { Button } from "../ui/button";

 

interface IPaginationItemProps {
  value: string;
  disabled: boolean;
  currentPage: boolean;
  onClick?: () => void;
}

export const PaginationItem: React.FC<IPaginationItemProps> = ({
  value,
  disabled,
  currentPage,
  onClick,
}) => {
  return (
    <Button
      variant="outline"
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={cn(
        'p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400 w-[25px] h-[25px] rounded-[8px] md:w-[30px] md:h-[30px] md:rounded-[10px]',
        {
          'bg-primary text-white': currentPage,
        }
      )}
    >
      <b className="text-sm">{value}</b>
    </Button>
  );
};
