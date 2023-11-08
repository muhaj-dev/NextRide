import { MouseEventHandler } from "react";
export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }


  export interface CarCardProps {
    imageUrl: string;
    title: string;
    rating: number;
    pricePerDay: number;
  }