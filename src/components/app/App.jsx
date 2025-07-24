// import { useState } from "react";
import EventCard from "../eventCard/EventCard";
import { FormSection } from "../formSection/FormSection";

import "./App.css";

function App() {
  let currentDate = new Date();
  let pastDate = new Date();

  pastDate.setDate(currentDate.getDate() - 30);

  currentDate = currentDate.toISOString().split("T")[0];
  pastDate = pastDate.toISOString().split("T")[0];

  return (
    <>
      <FormSection todayDate={currentDate} pastDate={pastDate} />
      <EventCard
        eventName="Solar Flare"
        datetime="2025-07-28"
        time="14.00"
        class="M5"
      />
    </>
  );
}

export default App;
