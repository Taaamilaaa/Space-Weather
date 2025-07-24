import styles from "./EventCard.module.css";
import { Button } from "../button/Button";
import { EventDataList } from "../eventDataList/EventDataList";
import CardIcon from "../cardIcon/CardIcon";

function EventCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitleWrapper}>
        <CardIcon />
        <h3>{props.eventName}</h3>
      </div>
      <EventDataList
        eventName="Solar Flare"
        datetime="2025-07-28"
        time="14.00"
        eventClass="M5"
      />

      <Button type="button" className={styles.cardButton}>
        More details
      </Button>
    </div>
  );
}

export default EventCard;
