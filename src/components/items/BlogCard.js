import React from "react";
import classes from "./BlogCard.module.css";
import Image from "next/image";
import BlogImage from "../../../public/images/BlogImage.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ReadMoreButton2 from "@/utils/buttons/ReadMoreButton2";

function BlogCard({ heading, content }) {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={BlogImage}
          alt="Image"
          fill={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <p className={classes.heading}>{heading}</p>
      <p className={classes.content}>{content}</p>
      ,<ReadMoreButton2 />
    </div>
  );
}

export default BlogCard;
