"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import classes from "./MultipleSelectDropdown.module.css";
import { useMediaQuery } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = {
  "New Delhi": [
    "Saket",
    "Chhattarpur",
    "Dwarka",
    "Connaught Place",
    "Rajouri Garden",
    "Nehru Place",
    "Asaf Ali",
    "Okhla",
    "Lajpat Nagar",
    "Laxmi Nagar",
  ],
  Chennai: [
    "Anna Salai Rd",
    "Perungudi",
    "Thoraipakkam",
    "Guindy",
    "Saidapet",
    "Teynampet",
  ],
  Chandigarh: ["Industrial Area", "ZirakPur", "Phase 7", "Sector 26"],
  Noida: [
    "Sector 3",
    "Sector 2",
    "Sector 15",
    "Sector 62",
    "Sector 63",
    "Sector 132",
    "Sector 19",
    "Sector 16",
  ],
  Bangalore: [
    "Ganganagar",
    "Whitefield",
    "Indiranagar",
    "HSR Layout",
    "Ganganagar",
    "Koramangala",
  ],
  Mumbai: [
    "Bandra West",
    "Andheri",
    "Bandra Kurla Complex",
    "Santa Cruz",
    "Powai",
    "Airoli",
    "Kandivali West",
    "Malad West",
  ],
  Gurgaon: [
    "Sector 43",
    "Cyber City",
    "Udyog Vihar",
    "Golf Course Road",
    "Sohna Road",
    "MG Road",
    "Sushant Lok",
    "Cyber Park",
    "Palm Court",
  ],
  Goa: ["Panjim", "Verna"],
  Punjab: ["Peermuchalla"],
  Kolkata: [
    "Mukherjee Rd",
    "Elgin",
    "Bidhannagar",
    "Park Street",
    "Salt Lake",
    "East Kolkata Township",
  ],
  Chhattisgarh: ["Bhilai"],
  Pune: [
    "Kharadi",
    "Yervada",
    "Viman Nagar",
    "Pimpri Chinchwad",
    "Hinjewadi",
    "Koregon Park",
    "Bandhan",
    "Baner",
  ],
  Kochi: ["Earnakulam", "Angamaly", "Edappally", "Kakkanad", "Kadavanthra"],
  Hyderabad: [
    "Kondapur",
    "HITEC City",
    "Gachibowli",
    "Madhapur",
    "Banjara Hills",
  ],
};

function getStyles(name, selectedLocations, theme) {
  return {
    fontWeight:
      selectedLocations.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectDropdown({
  selectedLocations,
  setSelectedLocations,
  handleFilter,
  handleResetInput,
  location,
}) {
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  let width;
  if (isExtraSmallScreen) {
    width = "100%";
  } else if (isSmallScreen) {
    width = "100%";
  } else if (isMediumScreen) {
    width = 400;
  } else if (isLargeScreen) {
    width = 500;
  } else {
    width = 500;
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedLocations(typeof value === "string" ? value.split(",") : value);
  };

  const handleReset = (event) => {
    const button = event.target;
    button.classList.remove(classes.bouncy);
    void button.offsetWidth;
    button.classList.add(classes.bouncy);
    setSelectedLocations([]);
    handleResetInput();
  };

  return (
    <div className={classes.container}>
      <div className={classes.marginContainer}>
        <FormControl
          sx={{
            width: width,
          }}
        >
          <InputLabel id="demo-multiple-chip-label">Locations</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={selectedLocations}
            onChange={handleChange}
            input={
              <OutlinedInput id="select-multiple-chip" label="Locations" />
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names[location]?.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, selectedLocations, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className={classes.buttonContainer}>
          <button
            onClick={handleReset}
            className={`${classes.resetButton} ${classes.bouncyButton}`}
          >
            Reset
          </button>
          <button onClick={handleFilter} className={classes.filterButton}>
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
