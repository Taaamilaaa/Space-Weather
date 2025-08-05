import { useState, useEffect } from "react";
import { EventCardList } from "../components/eventCardList/EventCardList";
import { FormSection } from "../components/formSection/FormSection";
import { fetchData } from "../api/nasaAPI.js";
import { dataNormol } from "../utils/helpers.js";
import { SortOptions } from "../components/sortOptions/SortOptions.jsx";
import { sortingEvents } from "../utils/sorting.js";

import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [resp, setResp] = useState([]);

  const [loading, setLoading] = useState(false);

  const [dateRange, setDateRange] = useState({});
  const [eventTypes, setEventTypes] = useState([]);
  const [error, setError] = useState(false);

  const [eventsFlag, setEventsFlag] = useState(false);
  const [sortMethod, setSortMethod] = useState("type");

  let currentDate = new Date();
  let pastDate = new Date();

  pastDate.setDate(currentDate.getDate() - 30);

  currentDate = currentDate.toISOString().split("T")[0];
  pastDate = pastDate.toISOString().split("T")[0];

  const handleForm = (date, eType) => {
    setDateRange(date);
    setEventTypes(eType);
  };

  const { startD, endD } = dateRange;

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setEventsFlag(false);
        setLoading(true);
        const resp = await fetchData(startD, endD, eventTypes);
        setResp(resp);
      } catch (error) {
        // Встановлюємо стан error в true
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, [startD, endD, eventTypes]);

  useEffect(() => {
    if (resp.length === 0) return;
    const respons = dataNormol(resp, setEventsFlag);
    setData(respons);
  }, [resp]);
  useEffect(() => {
    sortingEvents(data, sortMethod, setData);
  }, [sortMethod]);
  return (
    <>
      <FormSection
        todayDate={currentDate}
        onFormSubmite={handleForm}
        today={currentDate}
        maxPastDate={pastDate}
      />
      {loading && <p>Loading data, please wait...</p>}
      {eventsFlag && (
        <p>
          There are no events from {startD} to {endD}
        </p>
      )}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {data && (
        <>
          <SortOptions onSortChange={setSortMethod} />
          <EventCardList events={data} />
        </>
      )}
    </>
  );
}

export default App;
