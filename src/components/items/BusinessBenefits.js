import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BalanceIcon from "@mui/icons-material/Balance";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import SecurityIcon from "@mui/icons-material/Security";
import ShieldIcon from "@mui/icons-material/Shield";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import classes from "./WhyUs.module.css";
import WhyUsCard from "./WhyUsCard";

function BusinessBenefits() {
  const fontSize = { lg: 100, md: 50, sm: 44, xs: 36 };

  return (
    <div className={classes.container}>
      <div className={classes.backgroundDesign}></div>

      <div className={classes.cardContainerleft}>
        <WhyUsCard
          heading={"Liability Protection"}
          text={
            "Provides protection from personal liability and shields against various risks and losses."
          }
          icon={
            <SecurityIcon
              // fontSize="large"
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
          heading={"Enhanced Financial Standing"}
          text={
            "Facilitates easier access to bank loans and attracts trustworthy investors effortlessly."
          }
          icon={
            <AccountBalanceIcon
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
          heading={"Increased Capital Investment and Stability"}
          text={
            "Allows for greater capital infusion, enhancing business stability and growth potential."
          }
          icon={
            <BalanceIcon
              sx={{
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                color: "#fff",
                backgroundColor: "#00a0d0",
                border: "4px solid #fff",
              }}
              className={`${classes.gradientText} ${classes.color}`}
            />
          }
        />
      </div>
      <div className={classes.cardContainerRight}>
        <WhyUsCard
          heading={"Establishes Legal Entity"}
          text={
            "Registering your business grants it a distinct legal identity separate from its owners."
          }
          icon={
            <PersonSearchIcon
              sx={{
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                border: "4px solid #fff",
                color: "#fff",
                backgroundColor: "#FCAB14",
              }}
              className={`${classes.gradientText} ${classes.color}`}
            />
          }
          right={true}
        />
      </div>
      <div className={classes.cardContainerleft}>
        <WhyUsCard
          heading={"Asset Protection"}
          text={
            "Offers protection of company assets by limiting personal liability"
          }
          icon={
            <ShieldIcon
              sx={{
                fontSize: fontSize,
                borderRadius: "50%",
                padding: "20px",
                color: "#fff",
                backgroundColor: "#00a0d0",
                border: "4px solid #fff",
              }}
              className={`${classes.gradientText} ${classes.color}`}
            />
          }
        />
      </div>
      <div className={classes.cardContainerRight}>
        <WhyUsCard
          heading={"Enhanced Business Credibility"}
          text={
            "Boosts credibility, making it easier to raise capital and attract investment for business expansion and development."
          }
          icon={
            <SignalCellularAltIcon
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

export default BusinessBenefits;
