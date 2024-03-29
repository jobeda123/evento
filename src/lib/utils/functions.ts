import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const getCapitalizedString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getDateWithLeadingZero = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
  });
};

export const getShortMonth = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
  });
};

export const getFullDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    weekday: "long",
    month: "long",
  });
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
