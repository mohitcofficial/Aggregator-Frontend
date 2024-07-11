"use client";
import React, { useRef } from "react";
import classes from "./ZoomParallax.module.css";
import Image from "next/image";
import Image1 from "../../../public/images/parallax/Image1.jpg";
import Image2 from "../../../public/images/parallax/Image2.jpg";
import Image3 from "../../../public/images/parallax/Image3.jpg";
import Image4 from "../../../public/images/parallax/Image4.jpg";
import Image5 from "../../../public/images/parallax/Image5.jpg";
import Image6 from "../../../public/images/parallax/Image6.jpg";
import Image7 from "../../../public/images/parallax/Image7.jpg";
import { useScroll, useTransform, motion } from "framer-motion";

function ZoomParallax() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Image1,
      scale: scale4,
    },
    {
      src: Image2,
      scale: scale4,
    },
    {
      src: Image3,
      scale: scale4,
    },
    {
      src: Image4,
      scale: scale4,
    },
    {
      src: Image5,
      scale: scale4,
    },
    {
      src: Image6,
      scale: scale4,
    },
    {
      src: Image7,
      scale: scale4,
    },
  ];

  return (
    <>
      <span className={classes.heading}>Gallery</span>
      <div ref={container} className={classes.container}>
        <div className={classes.sticky}>
          <motion.div style={{ scale: scale4 }} className={classes.element}>
            <div className={classes.imageContainer}>
              <Image
                className={classes.image}
                src={Image1}
                fill
                alt="image"
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </motion.div>
          <motion.div style={{ scale: scale8 }} className={classes.element}>
            <div className={classes.imageContainer2}>
              <Image
                className={classes.image}
                src={Image2}
                fill
                alt="image"
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </motion.div>
          <motion.div style={{ scale: scale6 }} className={classes.element}>
            <div className={classes.imageContainer3}>
              <Image
                className={classes.image}
                src={Image3}
                fill
                alt="image"
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </motion.div>
          <motion.div style={{ scale: scale5 }} className={classes.element}>
            <div className={classes.imageContainer4}>
              <Image
                className={classes.image}
                src={Image4}
                fill
                alt="image"
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </motion.div>
          <motion.div style={{ scale: scale6 }} className={classes.element}>
            <div className={classes.imageContainer5}>
              <Image
                className={classes.image}
                src={Image5}
                fill
                alt="image"
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </motion.div>
          <motion.div style={{ scale: scale8 }} className={classes.element}>
            <div className={classes.imageContainer6}>
              <Image
                className={classes.image}
                src={Image6}
                fill
                alt="image"
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </motion.div>
          <motion.div style={{ scale: scale9 }} className={classes.element}>
            <div className={classes.imageContainer7}>
              <Image
                className={classes.image}
                src={Image7}
                fill
                alt="image"
                placeholder="blur"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ZoomParallax;
