export function eventNameSelect(eType) {
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
  Math.floor(Math.random() * (1000000 - 5) + 5).toString();

export function timeCut(date) {
  const time = date.substring(11, 16);
  return time;
}

export function dateCut(date) {
  const day = date.substring(0, 10);
  return day;
}

export const imgIndexSelect = (arr) => {
  const min = 0;
  const max = arr.length;
  if (max === 0) {
    return;
  } else {
    const index = Math.floor(Math.random() * (max - min) + min);

    return index;
  }
};

const elProp = (type, wholeEl, newEl, images) => {
  const index = imgIndexSelect(images);
  if (type === "FLR") {
    newEl.date = dateCut(wholeEl.beginTime);
    newEl.eventTime = timeCut(wholeEl.beginTime);
    newEl.startTime = timeCut(wholeEl.beginTime);
    newEl.peakTime = timeCut(wholeEl.peakTime);
    newEl.endTime = timeCut(wholeEl.endTime);
    newEl.classType = wholeEl.classType;
  } else if (type === "GST") {
    newEl.eventTime = timeCut(wholeEl.startTime);
    newEl.kpIndex = wholeEl.allKpIndex[0].kpIndex;
    newEl.date = dateCut(wholeEl.startTime);
  } else if (type !== "FLR" && type !== "GST") {
    newEl.date = dateCut(wholeEl.eventTime);
    newEl.eventTime = timeCut(wholeEl.eventTime);
  }
  newEl.id = idGen();
  newEl.title = eventNameSelect(type);
  newEl.link = wholeEl.link;
  newEl.instruments = wholeEl.instruments
    ? wholeEl.instruments[0].displayName
    : "";
  newEl.note = wholeEl.note ? wholeEl.note : "";
  newEl.linkedEvents = wholeEl.linkedEvents;
  newEl.notifications = wholeEl.sentNotifications;
  newEl.type = type;
  newEl.img = images[index] ? images[index] : null;
};

export function dataNormol(data, setEventFlag) {
  const arrResp = [];

  data.map((event) => {
    const type = event.type;

    const evData = event.data;
    const evImages = event.DONKIimg;

    evData.length === 0 ? setEventFlag(true) : setEventFlag(false);

    for (const e in evData) {
      if (Object.prototype.hasOwnProperty.call(evData, e)) {
        const element = evData[e];
        const el = {};

        elProp(type, element, el, evImages);
        arrResp.push(el);
      }
    }
  });

  return arrResp;
}
export const imgFilter = (arr) => {
  return arr
    .map((el) => el.links && el.links[0]?.href)
    .filter((url) => url && (url.endsWith(".jpg") || url.endsWith(".png")));
};
