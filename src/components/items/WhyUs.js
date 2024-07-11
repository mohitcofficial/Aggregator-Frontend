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
  return (
    <div className={classes.container}>
      <WhyUsCard
        heading={"Vibrant Community"}
        text={
          "Join a diverse and supportive community of professionals, fostering collaboration, networking, and potential partnerships."
        }
        icon={
          <Diversity3Icon
            // fontSize="large"
            sx={{
              color: "#EC6A3B",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color} ${classes.icon}`}
          />
        }
      />
      <WhyUsCard
        heading={"Flexible Memberships"}
        text={
          "Enjoy a range of membership options tailored to your needs, from part-time to full-time, ensuring maximum convenience and cost-effectiveness."
        }
        icon={
          <CardMembershipIcon
            sx={{
              color: "#EC6A3B",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Inspiring Workspaces"}
        text={
          "Work in well-designed and fully-equipped spaces that promote productivity, creativity, and comfort."
        }
        icon={
          <WorkspacesIcon
            sx={{
              color: "#EC6A3B",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Hassle-Free Setup"}
        text={
          "Skip the overhead costs and administrative burden with our ready-to-use workspaces and supportive staff."
        }
        icon={
          <CheckIcon
            sx={{
              color: "#EC6A3B",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Work-Life Balance"}
        text={
          "Achieve work-life balance in a conducive environment that encourages focus and well-being."
        }
        icon={
          <BalanceIcon
            sx={{
              color: "#EC6A3B",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Personalised Solutions"}
        text={
          "Receive tailored workspace solutions to meet your unique requirements and preferences."
        }
        icon={
          <EmojiObjectsIcon
            sx={{
              color: "#EC6A3B",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
    </div>
  );
}

export default WhyUs;
