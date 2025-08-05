const sortDateFromNew = (data) => {
  data.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};
const sortDateFromOld = (data) => {
  data.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
};

const sortByType = (data) => {
  data.sort((a, b) => {
    return a.type.localeCompare(b.type);
  });
};

function convertPower(classType) {
  const classLetter = classType[0];
  const classNumber = parseFloat(classType.slice(1));

  const base = {
    A: 1e-8,
    B: 1e-7,
    C: 1e-6,
    M: 1e-5,
    X: 1e-4,
  };

  return classNumber * base[classLetter];
}

const sortByPower = (data, sortMethod) => {
  const flrEvents = data.filter((el) => el.type === "FLR");
  const arr = data.filter((el) => {
    el.type !== "FLR";
  });

  if (sortMethod === "powerful") {
    flrEvents.sort(
      (a, b) => convertPower(b.classType) - convertPower(a.classType)
    );
  } else if (sortMethod === "weak") {
    flrEvents.sort(
      (a, b) => convertPower(a.classType) - convertPower(b.classType)
    );
  }

  return [...flrEvents, ...arr];
};

export function sortingEvents(data, sortMethod, setData) {
  if (data === null) return;

  if (sortMethod !== "powerful" && sortMethod !== "weak") {
    if (sortMethod === "dateFromNew") {
      sortDateFromNew(data);
    } else if (sortMethod === "dateFromOld") {
      sortDateFromOld(data);
    } else if (sortMethod === "type") {
      sortByType(data);
    }
    setData([...data]);
  } else if (sortMethod === "powerful" || sortMethod === "weak") {
    setData([]);
    const sortedArr = sortByPower(data, sortMethod);
    setData([...sortedArr]);
  }
}
