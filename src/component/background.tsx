import Image from "next/image";
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";

import Bg from "../assets/bgteste.png"
import { GridContainer } from "./gridcontainer";

interface BackgroundProps {
  children: ReactNode
  className?: string;
}

export function Background({children, className}: BackgroundProps) {
  const defaultClass = "w-full h-screen flex justify-center"
  const combinedClass = twMerge(defaultClass, className)
  return (
    <div className={combinedClass}>
      <Image
        src={Bg}
        alt="background"
        className="w-full h-screen z-[-1] absolute"
      />
      <GridContainer>
        {children}
      </GridContainer>
    </div>
  )
}