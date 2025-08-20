import styles from "./EventCard.module.css";
import { Button } from "../button/Button";
import CardIcon from "../cardIcon/CardIcon";
import { Link } from "react-router-dom";
import { EventPage } from "../../pages/EventPage";

export function EventCard({ evEl }) {
  const {
    type,
    title,
    startTime,
    peakTime,
    endTime,
    eventTime,
    classType,
    link,
    date,
    kpIndex,
    id,
  } = evEl;

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
                      <time dateTime={endTime}>{endTime}</time>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  Class:
                  {classType}
                </p>
              </li>
            </>
          ) : (
            <>
              <li>
                <p>
                  Event time:
                  <time dateTime={eventTime}>{eventTime}</time>
                </p>
              </li>

              {type === "GST" && (
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
          <Link to={`/${id}`} element={<EventPage />}>
            <Button type="button" className={styles.cardButton}>
              More details
            </Button>{" "}
          </Link>
        </div>
      </div>
    </li>
  );
}
