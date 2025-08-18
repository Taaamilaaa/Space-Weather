import { EventCard } from "../eventCard/EventCard";

export function EventCardList({ events }) {
  return (
    <>
      <ul>
        {events.map((e) => {
          for (const el in e) {
            if (Object.prototype.hasOwnProperty.call(e, el)) {
              return <EventCard evEl={e} key={e.id} />;
            }
          }
        })}
      </ul>
    </>
  );
}
