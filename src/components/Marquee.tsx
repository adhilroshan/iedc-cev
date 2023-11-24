// wipe.css and normalize-wheel are not used, so you can remove them from imports

import "./styles.css";

import React, { useState, useRef, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useRafLoop } from "react-use";
import { useWindowSize } from "@react-hook/window-size";

const marqueeConfig = {
  images: [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs as needed
  ],
  speed: 2,
  threshold: 0.014,
  wheelFactor: 1.8,
  dragFactor: 1.2,
};

interface MarqueeItemProps {
  images: string[];
  speed: { get: () => number };
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ images, speed }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect>({
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  const xRef = useRef(0);

  const [width, height] = useWindowSize();

  const setX = () => {
    if (!itemRef.current || !rectRef.current) return;
    const xPercentage = (xRef.current / rectRef.current.width) * 100;
    if (xPercentage < -100) xRef.current = 0;
    if (xPercentage > 0) xRef.current = -rectRef.current.width;
    itemRef.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;
  };

  useEffect(() => {
    rectRef.current =
      itemRef.current?.getBoundingClientRect() || rectRef.current;
  }, [width, height]);

  const loop = () => {
    xRef.current -= speed.get();
    setX();
  };

  useRafLoop(loop, true);

  return (
    <div className="item" ref={itemRef}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} className="image" />
      ))}
    </div>
  );
};

const InteractiveMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const slowDownRef = useRef(false);
  const isScrollingRef = useRef(false);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const xRef = useRef(0);
  const wRef = useRef(window.innerWidth).current;
  const speed = useSpring(marqueeConfig.speed, {
    damping: 40,
    stiffness: 90,
    mass: 5,
  });
  const opacity = useTransform(
    speed,
    [-wRef * 0.25, 0, wRef * 0.25],
    [1, 0, 1]
  );
  const skewX = useTransform(
    speed,
    [-wRef * 0.25, 0, wRef * 0.25],
    [-25, 0, 25]
  );

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const normalized = e.deltaY / Math.abs(e.deltaY);
    xRef.current = normalized * marqueeConfig.wheelFactor;

    window.clearTimeout(isScrollingRef.current);
    isScrollingRef.current = setTimeout(() => {
      speed.set(marqueeConfig.speed);
    }, 30);
  };

  const onDragStart = () => {
    slowDownRef.current = true;
    marqueeRef.current?.classList.add("drag");
    speed.set(0);
  };

  const onDrag = (e: MouseEvent, info: { delta: { x: number } }) => {
    speed.set(marqueeConfig.dragFactor * -info.delta.x);
  };

  const onDragEnd = () => {
    slowDownRef.current = false;
    marqueeRef.current?.classList.remove("drag");
    xRef.current = marqueeConfig.speed;
  };

  const loop = () => {
    if (slowDownRef.current || Math.abs(xRef.current) < marqueeConfig.threshold)
      return;
    xRef.current *= 0.66;
    xRef.current =
      xRef.current < 0 ? Math.min(xRef.current, 0) : Math.max(xRef.current, 0);
    speed.set(marqueeConfig.speed + xRef.current);
  };

  useRafLoop(loop, true);

  return (
    <>
      <motion.div className="bg" style={{ opacity }} ref={constraintsRef} />
      <motion.div
        className="marquee"
        ref={marqueeRef}
        style={{ skewX }}
        onWheel={onWheel}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        dragElastic={0.000001}
      >
        <MarqueeItem images={marqueeConfig.images} speed={speed} />
        <MarqueeItem images={marqueeConfig.images} speed={speed} />
      </motion.div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <InteractiveMarquee />
    </div>
  );
};

export default App;
