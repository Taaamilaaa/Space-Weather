import axios from "axios";
import { eventNameSelect, imgFilter } from "../utils/helpers.js";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov/DONKI/";

export async function fetchData(start, end, eventTypes) {
  const allResponses = [];
  if (!start || !end || eventTypes.length === 0) return [];

  for (let event of eventTypes) {
    const query = eventNameSelect(event) || event;

    try {
      const response = await axios.get(
        `${BASE_URL}${event}?startDate=${start}&endDate=${end}&api_key=${API_KEY}`
      );
      const eventImages = await axios.get(
        `https://images-api.nasa.gov/search?q=${query}&media_type=image`
      );

      const img = imgFilter(eventImages.data.collection.items);

      allResponses.push({
        type: event,
        data: response.data,
        DONKIimg: img,
      });
    } catch (error) {
      console.error(`Error fetching ${event}:`, error);
    }
  }

  return allResponses;
}
