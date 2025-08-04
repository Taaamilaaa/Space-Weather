import { useState, useEffect } from "react";
import { EventCardList } from "../components/eventCardList/EventCardList";
import { FormSection } from "../components/formSection/FormSection";
import { fetchData } from "../api/nasaAPI.js";
import { dataNormol } from "../utils/helpers.js";

import "./App.css";

const respGst = [
  {
    gstID: "2016-01-21T03:00:00-GST-001",
    startTime: "2016-01-21T03:00Z",
    allKpIndex: [
      { observedTime: "2016-01-21T06:00Z", kpIndex: 6.0, source: "NOAA" },
    ],
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/GST/10074/-1",
    linkedEvents: [
      { activityID: "2016-01-15T00:00:00-CME-001" },
      { activityID: "2016-01-21T10:00:00-HSS-001" },
    ],
    submissionTime: "2016-01-21T06:28Z",
    versionId: 1,
    sentNotifications: [
      {
        messageID: "20160121-AL-001",
        messageIssueTime: "2016-01-21T06:28Z",
        messageURL:
          "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/10075/1",
      },
      {
        messageID: "20160121-AL-002",
        messageIssueTime: "2016-01-21T13:16Z",
        messageURL:
          "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/10077/1",
      },
    ],
  },
];
const respFlr = [
  {
    flrID: "2016-01-01T23:00:00-FLR-001",
    catalog: "M2M_CATALOG",
    instruments: [{ displayName: "GOES15: SEM/XRS 1.0-8.0" }],
    beginTime: "2016-01-01T23:00Z",
    peakTime: "2015-01-02T00:10Z",
    endTime: null,
    classType: "M2.3",
    sourceLocation: "S21W73",
    activeRegionNum: 12473,
    note: "Associated eruption visible in SOD AIA 171. 193, and 304 with opening field lines and filament liftoff.",
    submissionTime: "2016-01-04T09:22Z",
    versionId: 2,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/9963/-1",
    linkedEvents: [
      { activityID: "2016-01-01T23:12:00-CME-001" },
      { activityID: "2016-01-02T02:48:00-SEP-001" },
      { activityID: "2016-01-02T04:30:00-SEP-001" },
    ],
    sentNotifications: null,
  },
  {
    flrID: "2016-01-28T11:48:00-FLR-001",
    catalog: "M2M_CATALOG",
    instruments: [{ displayName: "GOES15: SEM/XRS 1.0-8.0" }],
    beginTime: "2016-01-28T11:48Z",
    peakTime: "2016-01-28T12:02Z",
    endTime: "2016-01-28T12:56Z",
    classType: "C9.6",
    sourceLocation: "N03W47",
    activeRegionNum: 12488,
    note: "",
    submissionTime: "2016-01-28T22:31Z",
    versionId: 1,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/10122/-1",
    linkedEvents: [{ activityID: "2016-01-28T12:24:00-CME-001" }],
    sentNotifications: null,
  },
];
const respSep = [
  {
    sepID: "2016-01-02T02:48:00-SEP-001",
    eventTime: "2016-01-02T02:48Z",
    instruments: [{ displayName: "SOHO: COSTEP 15.8-39.8 MeV" }],
    submissionTime: "2016-01-02T04:45Z",
    versionId: 1,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/SEP/9966/-1",
    linkedEvents: [
      { activityID: "2016-01-01T23:00:00-FLR-001" },
      { activityID: "2016-01-01T23:12:00-CME-001" },
    ],
    sentNotifications: [
      {
        messageID: "20160102-AL-002",
        messageIssueTime: "2016-01-02T04:51Z",
        messageURL:
          "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/9967/1",
      },
    ],
  },
  {
    sepID: "2016-01-02T04:30:00-SEP-001",
    eventTime: "2016-01-02T04:30Z",
    instruments: [{ displayName: "GOES13: SEM/EPS >10 MeV" }],
    submissionTime: "2016-01-02T04:41Z",
    versionId: 1,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/SEP/9964/-1",
    linkedEvents: [
      { activityID: "2016-01-01T23:00:00-FLR-001" },
      { activityID: "2016-01-01T23:12:00-CME-001" },
    ],
    sentNotifications: [
      {
        messageID: "20160102-AL-001",
        messageIssueTime: "2016-01-02T04:41Z",
        messageURL:
          "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/9965/1",
      },
    ],
  },
];
const respMpc = [
  {
    mpcID: "2016-03-06T16:32:00-MPC-001",
    eventTime: "2016-03-06T16:32Z",
    instruments: [{ displayName: "MODEL: SWMF" }],
    submissionTime: "2016-03-06T16:26Z",
    versionId: 1,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/MPC/10300/-1",
    linkedEvents: [
      { activityID: "2016-03-06T04:30:00-IPS-001" },
      { activityID: "2016-03-06T09:00:00-HSS-001" },
      { activityID: "2016-03-06T18:00:00-GST-001" },
    ],
    sentNotifications: [
      {
        messageID: "20160306-AL-001",
        messageIssueTime: "2016-03-06T16:59Z",
        messageURL:
          "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/10301/1",
      },
    ],
  },
  {
    mpcID: "2016-03-11T13:00:00-MPC-001",
    eventTime: "2016-03-11T13:00Z",
    instruments: [{ displayName: "MODEL: SWMF" }],
    submissionTime: "2016-03-11T13:53Z",
    versionId: 1,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/MPC/10323/-1",
    linkedEvents: [
      { activityID: "2016-03-11T04:21:00-IPS-001" },
      { activityID: "2016-03-11T12:00:00-GST-001" },
    ],
    sentNotifications: [
      {
        messageID: "20160311-AL-001",
        messageIssueTime: "2016-03-11T13:55Z",
        messageURL:
          "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/10324/1",
      },
    ],
  },
];
const respRbe = [
  {
    rbeID: "2016-01-02T12:25:00-RBE-001",
    eventTime: "2016-01-02T12:25Z",
    instruments: [{ displayName: "GOES13: SEM/EPS >0.8 MeV" }],
    submissionTime: "2016-01-02T13:25Z",
    versionId: 2,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/RBE/9969/-1",
    linkedEvents: [{ activityID: "2015-12-28T12:39:00-CME-001" }],
    sentNotifications: [
      {
        messageID: "20160102-AL-003",
        messageIssueTime: "2016-01-02T12:39Z",
        messageURL:
          "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/9970/1",
      },
      {
        messageID: "20160102-AL-004",
        messageIssueTime: "2016-01-02T13:30Z",
        messageURL:
          "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/9971/1",
      },
    ],
  },
  {
    rbeID: "2016-01-24T15:05:00-RBE-001",
    eventTime: "2016-01-24T15:05Z",
    instruments: [{ displayName: "GOES13: SEM/EPS >0.8 MeV" }],
    submissionTime: "2016-01-24T16:26Z",
    versionId: 3,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/RBE/10088/-1",
    linkedEvents: [{ activityID: "2016-01-21T10:00:00-HSS-001" }],
    sentNotifications: [
      {
        messageID: "20160124-AL-001",
        messageIssueTime: "2016-01-24T15:22Z",
        messageURL:
          "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/10089/1",
      },
      {
        messageID: "20160124-AL-002",
        messageIssueTime: "2016-01-24T16:23Z",
        messageURL:
          "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/10090/1",
      },
    ],
  },
];
const respHss = [
  {
    rbeID: "2016-01-02T12:25:00-RBE-001",
    eventTime: "2016-01-02T12:25Z",
    instruments: [{ displayName: "GOES13: SEM/EPS >0.8 MeV" }],
    submissionTime: "2016-01-02T13:25Z",
    versionId: 2,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/RBE/9969/-1",
    linkedEvents: [{ activityID: "2015-12-28T12:39:00-CME-001" }],
    sentNotifications: [
      {
        messageID: "20160102-AL-003",
        messageIssueTime: "2016-01-02T12:39Z",
        messageURL:
          "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/9970/1",
      },
      {
        messageID: "20160102-AL-004",
        messageIssueTime: "2016-01-02T13:30Z",
        messageURL:
          "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/9971/1",
      },
    ],
  },
  {
    rbeID: "2016-01-24T15:05:00-RBE-001",
    eventTime: "2016-01-24T15:05Z",
    instruments: [{ displayName: "GOES13: SEM/EPS >0.8 MeV" }],
    submissionTime: "2016-01-24T16:26Z",
    versionId: 3,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/RBE/10088/-1",
    linkedEvents: [{ activityID: "2016-01-21T10:00:00-HSS-001" }],
    sentNotifications: [
      {
        messageID: "20160124-AL-001",
        messageIssueTime: "2016-01-24T15:22Z",
        messageURL:
          "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/10089/1",
      },
      {
        messageID: "20160124-AL-002",
        messageIssueTime: "2016-01-24T16:23Z",
        messageURL:
          "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/10090/1",
      },
    ],
  },
];

function App() {
  const [dateRange, setDateRange] = useState({});
  const [eventTypes, setEventTypes] = useState([]);
  const [resp, setResp] = useState([]);
  const [data, setData] = useState([]);

  let currentDate = new Date();
  let pastDate = new Date();

  pastDate.setDate(currentDate.getDate() - 30);

  currentDate = currentDate.toISOString().split("T")[0];
  pastDate = pastDate.toISOString().split("T")[0];

  const handleForm = (date, eType) => {
    setDateRange(date);
    setEventTypes(eType);
  };

  const { startD, endD } = dateRange;

  useEffect(() => {
    const loadEvents = async () => {
      const resp = await fetchData(startD, endD, eventTypes);
      setResp(resp);
    };
    loadEvents();
  }, [startD, endD, eventTypes]);

  useEffect(() => {
    if (resp.length === 0) return;
    const respons = dataNormol(resp);
    setData(respons);
  }, [resp]);

  return (
    <>
      <FormSection
        todayDate={currentDate}
        onFormSubmite={handleForm}
        today={currentDate}
        maxPastDate={pastDate}
      />
      {data.length > 0 && <EventCardList events={data} />}
    </>
  );
}

export default App;
