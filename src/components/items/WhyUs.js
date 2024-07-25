import React from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import CheckIcon from "@mui/icons-material/Check";
import BalanceIcon from "@mui/icons-material/Balance";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import classes from "./WhyUs.module.css";
import WhyUsCard from "./WhyUsCard";

function WhyUs() {
  const fontSize = { lg: 100, md: 50, sm: 44, xs: 36 };

  return (
    <div className={classes.container}>
      <div className={classes.backgroundDesign}></div>
      <div className={classes.cardContainerleft}>
        <WhyUsCard
          heading={"Vibrant Community"}
          text={
            "Join a diverse and supportive community of professionals, fostering collaboration, networking, and potential partnerships."
          }
          icon={
            <Diversity3Icon
              sx={{
                color: "#ffff",
                backgroundColor: "#00a0d0",
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                border: "4px solid #fff",
              }}
              className={`${classes.gradientText} ${classes.color} ${classes.icon}`}
            />
          }
        />
      </div>
      <div className={classes.cardContainerRight}>
        <WhyUsCard
          heading={"Flexible Memberships"}
          text={
            "Enjoy a range of membership options tailored to your needs, from part-time to full-time, ensuring maximum convenience and cost-effectiveness."
          }
          icon={
            <CardMembershipIcon
              sx={{
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                color: "#fff",
                backgroundColor: "#FCAB14",
                border: "4px solid #fff",
              }}
              className={`${classes.gradientText} ${classes.color}`}
            />
          }
          right={true}
        />
      </div>
      <div className={classes.cardContainerleft}>
        <WhyUsCard
          heading={"Inspiring Workspaces"}
          text={
            "Work in well-designed and fully-equipped spaces that promote productivity, creativity, and comfort."
          }
          icon={
            <WorkspacesIcon
              sx={{
                color: "#ffff",
                backgroundColor: "#00a0d0",
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                border: "4px solid #fff",
              }}
              className={`${classes.gradientText} ${classes.color}`}
            />
          }
        />
      </div>
      <div className={classes.cardContainerRight}>
        <WhyUsCard
          heading={"Hassle-Free Setup"}
          text={
            "Skip the overhead costs and administrative burden with our ready-to-use workspaces and supportive staff."
          }
          icon={
            <CheckIcon
              sx={{
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                color: "#fff",
                backgroundColor: "#FCAB14",
                border: "4px solid #fff",
              }}
              className={`${classes.gradientText} ${classes.color}`}
            />
          }
          right={true}
        />
      </div>
      <div className={classes.cardContainerleft}>
        <WhyUsCard
          heading={"Work-Life Balance"}
          text={
            "Achieve work-life balance in a conducive environment that encourages focus and well-being."
          }
          icon={
            <BalanceIcon
              sx={{
                color: "#ffff",
                backgroundColor: "#00a0d0",
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                border: "4px solid #fff",
              }}
              className={`${classes.gradientText} ${classes.color}`}
            />
          }
        />
      </div>
      <div className={classes.cardContainerRight}>
        <WhyUsCard
          heading={"Personalised Solutions"}
          text={
            "Receive tailored workspace solutions to meet your unique requirements and preferences."
          }
          icon={
            <EmojiObjectsIcon
              sx={{
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                color: "#fff",
                backgroundColor: "#FCAB14",
                border: "4px solid #fff",
              }}
              className={`${classes.gradientText} ${classes.color}`}
            />
          }
          right={true}
        />
      </div>
    </div>
  );
}

export default WhyUs;
