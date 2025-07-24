import styles from "./EventDataList.module.css";

export function EventDataList(props) {
  return (
    <ul className={styles.dataList}>
      <li>
        <p>
          Event date:
          <time dateTime={props.datetime}>{props.datetime}</time>{" "}
        </p>
      </li>
      <li>
        <p>
          Event time:
          <time dateTime={props.time}>{props.time}</time>{" "}
        </p>
      </li>
      <li>
        <p>
          Class:
          {props.eventClass}
        </p>
      </li>
    </ul>
  );
}
