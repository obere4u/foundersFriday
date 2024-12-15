import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  fallback: ["Arial", "Helvetica", "sans-serif"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export { montserrat };
