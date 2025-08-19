import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSunImage } from "../api/helioviewerAPI";
import { dateForAPICut } from "../utils/helpers.js";

export function EventPage({ data }) {
  const [sunImg, setSunImg] = useState("");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);

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
  console.log(loading);
  useEffect(() => {
    if (type === "FLR") {
      const { beginTime } = event;
      const date = dateForAPICut(beginTime);
      const loadSunImg = async () => {
        try {
          setLoading(true);

          const resp = await getSunImage(date);

          setSunImg(resp);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(null);
        }
      };
      loadSunImg();
    }
  }, []);

  return (
    <>
      <h1>{title}</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <img
          src={type === "FLR" ? sunImg : img}
          alt={title}
          style={{ width: "500px" }}
        />
      )}
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
