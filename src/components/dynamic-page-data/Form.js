"use client";
import React from "react";
import classes from "./Form.module.css";

function Form({
  location,
  price = null,
  tenure,
  setTenure,
  setName,
  name,
  email,
  setEmail,
  phone,
  setPhone,
  type,
  setType,
}) {
  const handlePay = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.container}>
      <h2 className={classes.formHeading}>Booking Details</h2>
      <div className={classes.block}>
        <input
          className={`${classes.input}`}
          type="text"
          placeholder="Name"
          name=""
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className={classes.label}>{location}</div>
      </div>
      <div className={classes.block}>
        <input
          className={`${classes.input}`}
          type="Email"
          placeholder="Email"
          name=""
          id=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={`${classes.input}`}
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name=""
          id=""
        />
      </div>
      <div className={classes.block}>
        <select
          id="registrationType"
          name="registrationType"
          className={classes.selectInput}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option className={classes.option} value="businessRegistration">
            Business Registration
          </option>
          <option className={classes.option} value="gstRegistration">
            GST Registration
          </option>
          <option className={classes.option} value="mailingAddress">
            Mailing Address
          </option>
        </select>
        <div className={classes.label}>{price}</div>
      </div>
      <div className={classes.block}>
        <div className={classes.label}>Tenure</div>
        <select
          id="registrationType"
          name="registrationType"
          className={classes.selectInput}
          value={tenure}
          onChange={(e) => {
            setTenure(e.target.value);
          }}
        >
          <option className={classes.option} value={12}>
            12
          </option>
          <option className={classes.option} value={24}>
            24
          </option>
          <option className={classes.option} value={36}>
            36
          </option>
        </select>
      </div>
      <div className={classes.buttonContainer}>
        <button onClick={handlePay} type="submit" className={classes.payButton}>
          Pay Now
        </button>
      </div>
    </form>
  );
}

export default Form;
