import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#1b1b1b]">
      <Navbar />
      <Hero></Hero>
    </main>
  );
}
