import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
export const gtSuper = localFont({
  src: [
    {
      path: "./fonts/GT-Super-Text-Bold-Trial.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/GT-Super-Text-Black-Trial.otf",
      weight: "900",
      style: "extra-bold",
    },
  ],
});
export const trumpSoft = localFont({
  src: [
    {
      path: "./fonts/TrumpSoftPro.woff2",
    },
  ],
});
export const inter = Inter({ subsets: ["latin"] });
