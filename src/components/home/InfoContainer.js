import Image from "next/image";
import WelcomeImage from "../../../public/images/Image1.png";
import classes from "./InfoContainer.module.css";

const InfoContainer = () => {
  return (
    <div className={classes.container1}>
      <div className={classes.leftContainer}>
        <div className={classes.backgroundDesign}></div>
        <Image
          className={classes.image}
          src={WelcomeImage}
          alt="Image"
          fill={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.heading}>
          Elevate Your Work Experience: Discover the Fusion of Coworking Spaces
          and Virtual Offices
        </div>
        <div className={classes.content}>
          <p className={classes.text}>
            Welcome to Virtualxcel Explore the dynamic synergy between coworking
            spaces and virtual offices—a game-changing combination designed to
            amplify productivity, foster collaboration, and transcend
            boundaries.
          </p>
          <p className={classes.text}>
            Step into a world where work is no longer confined to traditional
            cubicles and rigid structures. Our meticulously curated coworking
            spaces are vibrant hubs where creativity ignites and connections
            flourish. Join a diverse community of like-minded professionals,
            from freelancers to established businesses, in an environment that
            nurtures collaboration and sparks innovation.
          </p>
          <p className={classes.text}>
            Elevate your work experience with our combined offering of coworking
            spaces and virtual offices. Unleash your potential, collaborate
            effortlessly, and embrace a new era of productivity—wherever you
            are, whenever you need. Experience the fusion of innovation and
            functionality; welcome to the future of work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
