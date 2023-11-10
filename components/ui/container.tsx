import { cn } from "@/libs/utils";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("container lg:px-[20vw]  py-5 lg:py-8", className)}>
      {children}
    </div>
  );
};

export default Container;
