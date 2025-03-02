import { cva, type VariantProps } from "class-variance-authority";
import { FC, memo, ReactNode } from "react";

import { cn } from "@/lib/shadcn/utils";

const containerVariants = cva("", {
  variants: {
    variant: {
      default: "container mx-auto px-4",
      center: "h-screen flex flex-col items-center justify-center",
      sidebar: "flex flex-col gap-2 px-4 overflow-hidden w-full mb-4",
    },
  },
});

interface ContainerProps extends VariantProps<typeof containerVariants> {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = memo(({ children, variant }) => {
  return <main className={cn(containerVariants({ variant }))}>{children}</main>;
});
