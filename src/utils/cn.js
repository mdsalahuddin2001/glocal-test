import clsx from "clsx";
import { twMerge } from "tailwind-merge";
// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
export const cn = (...classes) => twMerge(clsx(...classes));
