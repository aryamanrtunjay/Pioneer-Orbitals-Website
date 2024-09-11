import Image from "next/image";
import Hero from "@/components/Home_Page/Hero";
import Mission from "@/components/Home_Page/Mission";
import Features from "@/components/Home_Page/Features";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Mission />
      <Features />
    </main>
  );
}
