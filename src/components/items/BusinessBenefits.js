import ArticleIcon from "@mui/icons-material/Article";
import BusinessIcon from "@mui/icons-material/Business";
import GavelIcon from "@mui/icons-material/Gavel";
import HandshakeIcon from "@mui/icons-material/Handshake";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PercentIcon from "@mui/icons-material/Percent";
import classes from "./WhyUs.module.css";
import WhyUsCard from "./WhyUsCard";
import SecurityIcon from "@mui/icons-material/Security";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BalanceIcon from "@mui/icons-material/Balance";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ShieldIcon from "@mui/icons-material/Shield";

function BusinessBenefits() {
  return (
    <div className={classes.container}>
      <WhyUsCard
        heading={"Liability Protection"}
        text={
          "Provides protection from personal liability and shields against various risks and losses."
        }
        icon={
          <SecurityIcon
            // fontSize="large"
            sx={{
              color: "#FCAB14",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color} ${classes.icon}`}
          />
        }
      />
      <WhyUsCard
        heading={"Enhanced Financial Standing"}
        text={
          "Facilitates easier access to bank loans and attracts trustworthy investors effortlessly."
        }
        icon={
          <AccountBalanceIcon
            sx={{
              color: "#FCAB14",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Increased Capital Investment and Stability"}
        text={
          "Allows for greater capital infusion, enhancing business stability and growth potential."
        }
        icon={
          <BalanceIcon
            sx={{
              color: "#FCAB14",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Establishes Legal Entity"}
        text={
          "Registering your business grants it a distinct legal identity separate from its owners."
        }
        icon={
          <PersonSearchIcon
            sx={{
              color: "#FCAB14",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Asset Protection"}
        text={
          "Offers protection of company assets by limiting personal liability"
        }
        icon={
          <ShieldIcon
            sx={{
              color: "#FCAB14",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
      <WhyUsCard
        heading={"Enhanced Business Credibility"}
        text={
          "Boosts credibility, making it easier to raise capital and attract investment for business expansion and development."
        }
        icon={
          <SignalCellularAltIcon
            sx={{
              color: "#FCAB14",
              fontSize: 45,
            }}
            className={`${classes.gradientText} ${classes.color}`}
          />
        }
      />
    </div>
  );
}

export default BusinessBenefits;
