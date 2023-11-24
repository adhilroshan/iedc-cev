import Cursor from "@/components/Cursor";
import YourReactComponent from "@/components/Demo";
import Hero from "@/components/Hero";
import { Group } from "@/components/Kunjappu";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#1b1b1b]">
      <Navbar />
      <Hero></Hero>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <h1 className="text-[#fff] text-4xl font-bold text-center my-10">
            About Us
          </h1>
          <p className="text-[#fff] text-lg font-normal text-center my-10">
            IEDC CEV is a community of students who are passionate about
            technology and entrepreneurship. We are a group of like-minded
            individuals who are driven to learn, build and create. We believe
            that technology and innovation can solve the worlds biggest problems
            and we are here to make it happen.
          </p>
        </div>
      </div>
      <Group />
      {/* <YourReactComponent /> */}
    </main>
  );
}
