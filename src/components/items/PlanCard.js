import classes from "./PlanCard.module.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function PlanCard({
  price = 12999,
  tenure,
  setTenure,
  duration = 1,
  flag = false,
  activeIndex,
  setCalculatedPrice,
  type,
  setType,
}) {
  return (
    <div className={classes.container}>
      {flag && <p className={classes.recommended}>Recommended</p>}
      {flag && (
        <p className={classes.save}>Save {duration === 2 ? "10" : "15"}%</p>
      )}

      <div className={classes.content}>
        <div className={classes.price}>
          <CurrencyRupeeIcon
            sx={{
              fontSize: { xs: 20, sm: 20, md: 22, lg: 22 },
            }}
          />
          {flag ? price * duration - 0.1 * price * duration : price}
        </div>
        <p className={classes.duration}>{duration * 12} months</p>
      </div>

      {flag && (
        <div className={classes.content2}>
          <span className={classes.oldPrice}>
            <CurrencyRupeeIcon
              sx={{
                fontSize: { xs: 10, sm: 12, md: 14, lg: 15 },
              }}
            />
            {price * duration}
            <span className={classes.line}></span>
          </span>
        </div>
      )}
      <div className={classes.buttonContainer}>
        <button
          onClick={() => {
            let finalPrice = price;
            let finalTenure = tenure;
            let finalType = type;
            if (duration !== 1)
              finalPrice = price * duration - 0.1 * price * duration;
            if (duration === 2) {
              finalTenure = 24;
            } else if (duration === 3) {
              finalTenure = 36;
            } else {
              finalTenure = 12;
            }
            if (activeIndex === 0) {
              finalType = "businessRegistration";
            } else if (activeIndex === 1) {
              finalType = "gstRegistration";
            } else {
              finalType = "mailingAddress";
            }
            setCalculatedPrice(finalPrice);
            setTenure(finalTenure);
            setType(finalType);
          }}
          className={classes.button}
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default PlanCard;
