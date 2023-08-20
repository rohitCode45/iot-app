// telemetry constants

const SI_ROUTE_COLUMNS = [
  { Header: "name", accessor: "name" },
  { Header: "routeSet", accessor: "routeSet" },
];
const SI_SIGNAL_COLUMNS = [
  { Header: "name", accessor: "name" },
  { Header: "lampProved", accessor: "lampProved" },
  { Header: "autoMode", accessor: "autoMode" },
  { Header: "appraochLock", accessor: "appraochLock" },
  { Header: "aspectControl", accessor: "aspectControl" },
  { Header: "agMarker", accessor: "agMarker" },
  { Header: "aspectCode", accessor: "aspectCode" },
];
const SI_POINT_COLUMNS = [
  { Header: "name", accessor: "name", minWidth: 100 },
  { Header: "controlsNormal", accessor: "controlsNormal", minWidth: 220 },
  { Header: "detectedNormal", accessor: "detectedNormal", minWidth: 250 },
  { Header: "controlsReverse", accessor: "controlsReverse", minWidth: 230 },
  { Header: "detectedReverse", accessor: "detectedReverse", minWidth: 280 },
  { Header: "blocked", accessor: "blocked", minWidth: 120 },
  {
    Header: "pointFailureInNormal",
    accessor: "pointFailureInNormal",
    minWidth: 210,
  },
  {
    Header: "pointFailureInReverse",
    accessor: "pointFailureInReverse",
    minWidth: 210,
  },
  {
    Header: "crankHandleKeyStatus",
    accessor: "crankHandleKeyStatus",
    minWidth: 190,
  },
  { Header: "hexValOpt", accessor: "hexValOpt", minWidth: 100 },
];
const SI_TRKSEC_COLUMNS = [
  { Header: "name", accessor: "name" },
  {
    Header: "trackSectionOccupiedOrClear",
    accessor: "trackSectionOccupiedOrClear",
  },
  { Header: "trackSectionError", accessor: "trackSectionError" },
  { Header: "trackSectionBlockedByEI", accessor: "trackSectionBlockedByEI" },
  { Header: "hexValOpt", accessor: "hexValOpt" },
];
const SI_LCGATE_COLUMNS = [
  { Header: "name", accessor: "name" },
  { Header: "lCGateStatus", accessor: "lCGateStatus" },
];

export const telemetryPageInfo = {
  "/SI_ROUTE": {
    Heading: "SI ROUTE LIVE",
    columns: SI_ROUTE_COLUMNS,
    dummyData: [
        {"type":"SI_ROUTE","name":"S1-01AA","routeSet":"routeNotSet","hexVal":"0"},
        {"type":"SI_ROUTE","name":"S1-01AA","routeSet":"routeNotSet","hexVal":"0"},
        {"type":"SI_ROUTE","name":"S1-01AA","routeSet":"routeNotSet","hexVal":"0"},
        {"type":"SI_ROUTE","name":"S1-01AA","routeSet":"routeNotSet","hexVal":"0"},
    ],
  },
  "/SI_SIGNAL": {
    Heading: "SI SIGNAL LIVE",
    columns: SI_SIGNAL_COLUMNS,
    dummyData:[
        {
          name: "S1",
          lampProved: "burnOut",
          autoMode: "notAutoMode",
          appraochLock: "noApproach",
          aspectControl: "noControlTheAspect",
          agMarker: "unLit",
          aspectCode: "red",
          hexVal: 10000001,
        },
        {
          name: "S1",
          lampProved: "burnOut",
          autoMode: "notAutoMode",
          appraochLock: "noApproach",
          aspectControl: "noControlTheAspect",
          agMarker: "unLit",
          aspectCode: "red",
          hexVal: 10000001,
        },
        {
          name: "S1",
          lampProved: "burnOut",
          autoMode: "notAutoMode",
          appraochLock: "noApproach",
          aspectControl: "noControlTheAspect",
          agMarker: "unLit",
          aspectCode: "red",
          hexVal: 10000001,
        },
        {
          name: "S1",
          lampProved: "burnOut",
          autoMode: "notAutoMode",
          appraochLock: "noApproach",
          aspectControl: "noControlTheAspect",
          agMarker: "unLit",
          aspectCode: "red",
          hexVal: 10000001,
        },
      ]
  },
  "/SI_POINT": {
    Heading: "SI POINT LIVE",
    columns: SI_POINT_COLUMNS,
    dummyData: [
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
        {"type":"SI_POINT","name":"201A/B","controlsNormal":"noControlToNormalDirection","detectedNormal":"setAndLockedToNormalDirection","controlsReverse":"noControlToReverseDirection","detectedReverse":"notSetAndLockedToReverseDirection","blocked":"notBlocked","pointFailureInNormal":"normal","pointFailureInReverse":"normal","crankHandleKeyStatus":"insertion","hexVal":"100000","hexValOpt":"10"},
    
   
    ],
  },
  "/SI_TRKSEC": {
    Heading: "SI TRKSEC LIVE",
    columns: SI_TRKSEC_COLUMNS,
    dummyData: [
    ],
  },
  "/SI_LCGATE": {
    Heading: "SI LCGATE LIVE",
    columns: SI_LCGATE_COLUMNS,
    dummyData: [
    ],
  },
};
