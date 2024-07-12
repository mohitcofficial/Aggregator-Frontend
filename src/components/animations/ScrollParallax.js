"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import classes from "./ScrollParallax.module.css";
import Business1 from "../../../public/images/parallax2/Business1.jpg";
import Business2 from "../../../public/images/parallax2/Business2.jpg";
import Business3 from "../../../public/images/parallax2/Business3.jpg";
import Business4 from "../../../public/images/parallax2/Business4.jpg";
import Business5 from "../../../public/images/parallax2/Business5.jpg";
import Image from "next/image";

function ScrollParallax() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const one = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const two = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const three = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const four = useTransform(scrollYProgress, [0, 1], [0, -125]);
  return (
    <div className={classes.container}>
      <motion.div className={classes.container2}>
        <Image
          className={classes.image1}
          src={Business1}
          fill={true}
          alt=""
          placeholder="blur"
          sizes="(max-width: 768px) 100vw"
        />
      </motion.div>
      <motion.div style={{ y: one }} className={classes.container3}>
        <Image
          className={classes.image2}
          src={Business2}
          fill={true}
          alt=""
          placeholder="blur"
          sizes="(max-width: 768px) 100vw"
        />
      </motion.div>
      <motion.div style={{ x: three }} className={classes.container4}>
        <Image
          className={classes.image2}
          src={Business3}
          fill={true}
          alt=""
          placeholder="blur"
          sizes="(max-width: 768px) 100vw"
        />
      </motion.div>
      <motion.div style={{ x: four }} className={classes.container5}>
        <Image
          className={classes.image2}
          src={Business4}
          fill={true}
          alt=""
          placeholder="blur"
          sizes="(max-width: 768px) 100vw"
        />
      </motion.div>
      <motion.div style={{ y: two }} className={classes.container6}>
        <Image
          className={classes.image2}
          src={Business5}
          fill={true}
          alt=""
          placeholder="blur"
          sizes="(max-width: 768px) 100vw"
        />
      </motion.div>
    </div>
  );
}

export default ScrollParallax;
