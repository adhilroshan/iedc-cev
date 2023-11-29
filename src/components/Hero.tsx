"use client";
import React from "react";
import HeroImg from "./HeroImg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

function Hero() {
  const up = {
    animate: {
      y: [0, -2400],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    },
  };
  const down = {
    animate: {
      y: [-2400, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    },
  };
  return (
    <div className="flex w-screen h-screen justify-between ">
      <div className="absolute w-screen h-screen z-0 ">
        <Image
          src="/assets/Section.png"
          fill
          className="w-full h-full object-cover"
          alt="img"
        />
      </div>
      <div className="mr-16 ml-20 flex h-full flex-col justify-center gap-4 z-10">
        <h1 className="text-5xl font-semibold text-white">IEDC CEV</h1>
        <p className="overflow-clip w-[40vw] text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sit,
          qui ipsam magni, aut numquam odit iste rerum dolore laudantium
          expedita blanditiis a facere facilis ut consectetur possimus
          necessitatibus molestias.
        </p>
        <Link href="/join" className="bg-purple-400 rounded-sm w-fit px-7 py-2">
          Join Us
        </Link>
      </div>
      <div className="w-full gap-3 mx-10  overflow-hidden z-10  flex justify-end flex-wrap  ">
        <motion.div
          variants={up}
          animate="animate"
          className="relative w-96 -top-16 flex flex-col gap-3 flex-nowrap"
        >
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
        </motion.div>
        <motion.div
          variants={down}
          animate="animate"
          className="relative w-96 flex  flex-col gap-3"
        >
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
          <HeroImg />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
