import { FormSection } from "../components/formSection/FormSection";
import { SortOptions } from "../components/sortOptions/SortOptions";
import { EventCardList } from "../components/eventCardList/EventCardList";

export function HomePage({
  todayDate,
  onFormSubmite,
  today,
  maxPastDate,
  loading,
  data,
  startD,
  endD,
  eventsFlag,
  error,
  setSortMethod,
}) {
  return (
    <>
      <section>
        <h1> Welcome to the SPACE WEATHER</h1>

        <FormSection
          todayDate={todayDate}
          onFormSubmite={onFormSubmite}
          today={today}
          maxPastDate={maxPastDate}
        />
      </section>
      <section>
        {loading && <p>Loading data, please wait...</p>}
        {data && (
          <p>
            From {startD} to {endD} we find {data.length} events.
          </p>
        )}
        {eventsFlag && (
          <p>
            There are no events from {startD} to {endD}
          </p>
        )}
        {error && (
          <p>Whoops, something went wrong! Please try reloading this page!</p>
        )}
      </section>

      {data && (
        <section>
          <SortOptions onSortChange={setSortMethod} />
          <EventCardList events={data} />
        </section>
      )}
    </>
  );
}
