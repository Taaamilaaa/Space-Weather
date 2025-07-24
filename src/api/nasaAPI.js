import { useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov/DONKI/";
const GEO_STORM = "GST";
const SUN_FLARE = "FLR";
const SOLAR_ENERGETIC_PARTIKLE = "SEP";
const MAGNETOPAUSE_CROSSING = "MPC";
const RADIATION_BELT_ENHANCEMENT = "RBE";
const HIGHT_SPEED_STREAM = "HSS";

const START_DAY = "startDate=2025-07-01"; //yyyy-MM-dd
const END_DAY = "endDate=2025-07-22"; //yyyy-MM-dd

// useEffect(() => {
//   async function fetchData() {
//     const response = await axios.get(
//       `${BASE_URL}${SUN_FLARE}?${START_DAY}&${END_DAY}&api_key=${API_KEY}`
//     );

//     console.log(response);
//   }
//   fetchData();
// }, []);
