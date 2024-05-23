import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";
import { HeaderBar } from "./headerbar";

interface GridContainerProps {
  children: ReactNode
  className?: string;
}

export function GridContainer({children, className}: GridContainerProps) {
  const defaultClass = "w-full max-w-grid mx-auto px-20"
  const combinedClass = twMerge(defaultClass, className)
  return (
    <div className={combinedClass}>
      {children}
    </div>
  )
}