function eventNameSelect(eType) {
  const events = {
    GST: "Geo storm",
    FLR: "Sun flare",
    SEP: "Solar energetic particle",
    MPC: "Magnetopause crossing",
    RBE: "Radiation belt enhancement",
    HSS: "Hight speed stream",
  };

  for (const key in events) {
    const element = events[key];
    if (key === eType) return element;
  }
}

export const idGen = () =>
  Math.floor(Math.random() * (10000 - 5) + 5).toString();

export function timeCut(date) {
  const time = date.substring(11, 16);
  return time;
}

export function dateCut(date) {
  const day = date.substring(0, 10);
  return day;
}

export function dataNormol(data) {
  const arrResp = [];

  data.map((event) => {
    const type = event.type;

    const evData = event.data;
    for (const e in evData) {
      if (Object.prototype.hasOwnProperty.call(evData, e)) {
        const element = evData[e];

        const el = {};

        el.id = idGen();
        el.type = type;
        el.date =
          type === "FLR"
            ? dateCut(element.beginTime)
            : dateCut(element.eventTime);
        el.title = eventNameSelect(type);

        el.startTime = type === "FLR" ? timeCut(element.beginTime) : "";
        el.peakTime = type === "FLR" ? timeCut(element.peakTime) : "";
        el.endTime = type === "FLR" ? timeCut(element.endTime) : "";

        el.eventTime = type !== "FLR" ? timeCut(element.eventTime) : "";

        el.classType = type === "FLR" ? element.classType : "";
        el.kpIndex = type === "GST" ? element.allKpIndex.kpIndex : "";

        el.link = element.link;
        el.instruments = element.instruments
          ? element.instruments[0].displayName
          : "";
        el.note = element.note ? element.note : "";
        el.linkedEvents = element.linkedEvents;
        el.notifications = element.sentNotifications;

        arrResp.push(el);
      }
    }
  });
  console.log(arrResp);
  return arrResp;
}
