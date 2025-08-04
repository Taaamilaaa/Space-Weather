import axios from "axios";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov/DONKI/";

export async function fetchData(start, end, eventTypes) {
  const allResponses = [];
  if (!start || !end || eventTypes.length === 0) return [];

  for (let event of eventTypes) {
    try {
      const response = await axios.get(
        `${BASE_URL}${event}?startDate=${start}&endDate=${end}&api_key=${API_KEY}`
      );
      allResponses.push({ type: event, data: response.data });
    } catch (error) {
      console.error(`Error fetching ${event}:`, error);
    }
  }

  return allResponses;
}
