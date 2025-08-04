import { EventCard } from "../eventCard/EventCard";

export function EventCardList({ events }) {
  return (
    <>
      <ul>
        {events.map((e) => {
          for (const el in e) {
            if (Object.prototype.hasOwnProperty.call(e, el)) {
              return (
                <EventCard
                  type={e.type}
                  title={e.title}
                  startTime={e.startTime}
                  peakTime={e.peakTime}
                  endTime={e.endTime}
                  eventTime={e.eventTime}
                  classType={e.classType}
                  note={e.note}
                  instruments={e.instruments}
                  link={e.link}
                  linkedEvents={e.linkedEvents}
                  key={e.id}
                  date={e.date}
                  kpIndex={e.kpIndex}
                />
              );
            }
          }
        })}
      </ul>
    </>
  );
}
