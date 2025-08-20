import { FormSection } from "../components/formSection/FormSection";
import { SortOptions } from "../components/sortOptions/SortOptions";
import { EventCardList } from "../components/eventCardList/EventCardList";
import { InformSection } from "../components/informSetion/InformSection";
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
        <InformSection
          loading={loading}
          data={data}
          startD={startD}
          endD={endD}
          eventsFlag={eventsFlag}
          error={error}
        />
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
