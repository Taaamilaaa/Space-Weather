import { useParams } from "react-router-dom";

export function EventPage({ data }) {
  const { id } = useParams();
  const event = data.find((el) => {
    return el.id === id;
  });
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
    img,
  } = event;

  return (
    <>
      <h1>{title}</h1>
      <div>Now showing event with id - {id}</div>;<p>type:{type}</p>
      <img src={img} alt={title} />
      <p>start time:{startTime}</p>
      <p>peak time:{peakTime}</p>
      <p>end time:{endTime}</p>
      <p>eventTime:{eventTime}</p>
      <p>class: {classType}</p>
      <p>link:{link}</p>
      <p>date: {date}</p>
      <p>index:{kpIndex}</p>
    </>
  );
}
