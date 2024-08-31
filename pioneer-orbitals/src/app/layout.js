import { Inter } from "next/font/google";
import { Chakra_Petch } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header/Header";
import InDevelopmentFooter from "@/components/InDevelopmentFooter";

const inter = Inter({ subsets: ["latin"] });
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: "swap",
})

export const metadata = {
  title: "Pioneer Orbitals | Pioneering Space Travel For All",
  description: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chakraPetch.className}>
        <Header />
        {children}
        <InDevelopmentFooter />
      </body>
    </html>
  );
}
