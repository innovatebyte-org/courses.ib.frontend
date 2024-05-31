import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });

export const sfui = localFont({
  src: [
    {
      path: "../../public/ib_fonts/SFUIDisplay-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/ib_fonts/SFUIDisplay-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/ib_fonts/SFUIDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/ib_fonts/SFUIDisplay-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/ib_fonts/SFUIDisplay-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});
