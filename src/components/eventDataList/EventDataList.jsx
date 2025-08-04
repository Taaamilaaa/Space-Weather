import styles from "./EventDataList.module.css";

export function EventDataList({
  startTime,
  // peakTime,
  // endTime,
  // eventTime,
  classType,
  // name,
}) {
  // let timeB;
  // let peakT;
  // let endT;
  // let eventT;
  // if (name === "Sun flare") {
  //   timeB = startTime.substring(11, 16);
  //   peakT = peakTime.substring(11, 16);
  //   endT = endTime.substring(11, 16);
  // } else if (name === "Radiation belt enhancement") {
  //   eventT = eventTime.substring(11, 16);
  //   console.log(eventTime);
  // }

  return (
    <ul className={styles.dataList}>
      <li>
        <p>
          Event date:
          <time dateTime={startTime}>{startTime}</time>{" "}
        </p>
      </li>
      <li>
        {/* {if(name === "Sun flare"){ return (
          <ul>
            <li>
              <p>
                Event start: <time dateTime={timeB}>{timeB}</time>
              </p>
            </li>
            <li>
              <p>
                Event peak: <time dateTime={peakT}>{peakT}</time>
              </p>
            </li>
            <li>
              <p>
                Event end: <time dateTime={endT}>{endT}</time>
              </p>
            </li>
          </ul>
        )}else if(name === "Radiation belt enhancement"){return (
          <p>
            Event time:<time dateTime={eventT}>{eventT}</time>
          </p>
        )} } */}
      </li>
      <li>
        <p>
          Class:
          {classType}
        </p>
      </li>
    </ul>
  );
}
