import styles from "./EventCard.module.css";
import { Button } from "../button/Button";
import CardIcon from "../cardIcon/CardIcon";

export function EventCard({
  type,
  title,
  startTime,
  peakTime,
  endTime,
  classType,
  date,
  note,
  instruments,
  link,
  linkedEvents,
  eventTime,
  kpIndex,
}) {
  return (
    <li className={styles.cardItem}>
      <div className={styles.card}>
        <div className={styles.cardTitleWrapper}>
          <CardIcon type={type} />
          <h2>{title}</h2>
        </div>
        <ul className={styles.dataList}>
          <li>
            <p>
              Event date:
              {type === "FLR" ? (
                <time dateTime={startTime}>{date}</time>
              ) : (
                <time dateTime={eventTime}>{date}</time>
              )}
            </p>
          </li>

          {type === "FLR" ? (
            <>
              <li>
                <ul>
                  <li>
                    <p>
                      Event time:
                      <time dateTime={startTime}>{startTime}</time>
                    </p>
                  </li>
                  <li>
                    <p>
                      Start time:
                      <time dateTime={startTime}>{startTime}</time>
                    </p>
                  </li>
                  <li>
                    <p>
                      Peak time:
                      <time dateTime={peakTime}>{peakTime}</time>
                    </p>
                  </li>
                  <li>
                    <p>
                      End time:
                      <time dateTime={endTime}>{eventTime}</time>
                    </p>
                  </li>
                </ul>
              </li>
              {type === "FLR" && (
                <li>
                  <p>
                    Class:
                    {classType}
                  </p>
                </li>
              )}
            </>
          ) : (
            <>
              <li>
                <p>
                  Event time:
                  <time dateTime={eventTime}>{eventTime}</time>
                </p>
              </li>

              {type === "GSP" && (
                <li>
                  <p>Event kp index: {kpIndex}</p>
                </li>
              )}
            </>
          )}
        </ul>
        <div className={styles.linkWrapper}>
          <a href={link} target="_blank">
            <p>Show more information</p>
          </a>
          <Button type="button" className={styles.cardButton}>
            More details
          </Button>
        </div>
      </div>
    </li>
  );
}
