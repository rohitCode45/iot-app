// telemetry constants
const COMMON_COLUMNS = [
  // { Header: "serialNumber",  accessor: (row, index) => index + 1 },
  { Header: "name", accessor: "name" },
]

const SI_ROUTE_COLUMNS = [
  { Header: "routeSet", accessor: "routeSet" },
];
const SI_SIGNAL_COLUMNS = [
  { Header: "lampProved", accessor: "lampProved" },
  { Header: "autoMode", accessor: "autoMode" },
  { Header: "appraochLock", accessor: "appraochLock" },
  { Header: "aspectControl", accessor: "aspectControl" },
  { Header: "agMarker", accessor: "agMarker" },
  { Header: "aspectCode", accessor: "aspectCode" },
];
const SI_POINT_COLUMNS = [
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
  {
    Header: "trackSectionOccupiedOrClear",
    accessor: "trackSectionOccupiedOrClear",
  },
  { Header: "trackSectionError", accessor: "trackSectionError" },
  { Header: "trackSectionBlockedByEI", accessor: "trackSectionBlockedByEI" },
  { Header: "hexValOpt", accessor: "hexValOpt" },
];
const SI_LCGATE_COLUMNS = [
  { Header: "lCGateStatus", accessor: "lCGateStatus" },
];
const EI_FIU_COLUMNS = [
  { Header: "fiuStatus", accessor: "fiuStatus" },
  { Header: "fiuIpcError", accessor: "fiuIpcError" },
  { Header: "fiuIoDeviceError", accessor: "fiuIoDeviceError" },
  { Header: "fiuApplicationError", accessor: "fiuApplicationError" },
  { Header: "fiuCommErrorWithOtherDevice", accessor: "fiuCommErrorWithOtherDevice" },
  { Header: "fiuWindowsSystemError", accessor: "fiuWindowsSystemError" },
  { Header: "addtnlHexVal", accessor: "addtnlHexVal" },
];

const EI_DAC_COLUMNS = [
  { Header: "dacStatus", accessor: "dacStatus" },
];
const EI_L2SW_COLUMNS = [
  { Header: "l2swStatus", accessor: "l2swStatus" },
];
const EI_VLC_COLUMNS = [
  { Header: "vlcStatus", accessor: "vlcStatus" },
  { Header: "vlcAddnlStatus", accessor: "vlcAddnlStatus" },
  { Header: "addtnlHexVal", accessor: "addtnlHexVal" },
];
const EI_IOM_COLUMNS = [
  { Header: "iomStatus", accessor: "iomStatus" },
  { Header: "iomAddnlStatus", accessor: "iomAddnlStatus" },
  { Header: "addtnlHexVal", accessor: "addtnlHexVal" },
];
const EI_IFC_COLUMNS = [
  { Header: "ifcStatus", accessor: "ifcStatus" },
  { Header: "ifcAddnlStatus", accessor: "ifcAddnlStatus" },
  { Header: "addtnlHexVal", accessor: "addtnlHexVal" },
];
const RLY_STATUS_COLUMNS = [
  { Header: "rlyStatus", accessor: "rlyStatus" },
];


export const telemetryPageInfo = {
  "/SI_ROUTE": {
    id: 'SI_ROUTE',
    Heading: "SI ROUTE LIVE",
    columns: [...COMMON_COLUMNS, ...SI_ROUTE_COLUMNS],
    dummyData: [
      { "type": "SI_ROUTE", "name": "S1-01AA", "routeSet": "routeNotSet", "hexVal": "0" },
      { "type": "SI_ROUTE", "name": "C1-01AA", "routeSet": "routeNotSet", "hexVal": "0" }
    ],
  },
  "/SI_SIGNAL": {
    id: 'SI_SIGNAL',
    Heading: "SI SIGNAL LIVE",
    columns: [...COMMON_COLUMNS, ...SI_SIGNAL_COLUMNS],
    dummyData: [
      { "type": "SI_SIGNAL", "name": "S1", "lampProved": "burnOut", "autoMode": "notAutoMode", "appraochLock": "noApproachLocking", "aspectControl": "noControlTheAspect", "agMarker": "unLit", "aspectCode": "red", "hexVal": "1" }
    ]
  },
  "/SI_POINT": {
    id: 'SI_POINT',
    Heading: "SI POINT LIVE",
    columns: [...COMMON_COLUMNS, ...SI_POINT_COLUMNS],
    dummyData: [
      { "type": "SI_POINT", "name": "200A/B", "controlsNormal": "noControlToNormalDirection", "detectedNormal": "setAndLockedToNormalDirection", "controlsReverse": "noControlToReverseDirection", "detectedReverse": "notSetAndLockedToReverseDirection", "blocked": "notBlocked", "pointFailureInNormal": "normal", "pointFailureInReverse": "normal", "crankHandleKeyStatus": "insertion", "hexVal": "100000", "hexValOpt": "10" },
      { "type": "SI_POINT", "name": "201A", "controlsNormal": "noControlToNormalDirection", "detectedNormal": "notSetAndLockedToNormalDirection", "controlsReverse": "noControlToReverseDirection", "detectedReverse": "notSetAndLockedToReverseDirection", "blocked": "blocked", "pointFailureInNormal": "normal", "pointFailureInReverse": "failure", "crankHandleKeyStatus": "extraction", "hexVal": "10", "hexValOpt": "100" }
    ],

  },
  "/SI_TRKSEC": {
    id: 'SI_TRKSEC',
    Heading: "SI TRKSEC LIVE",
    columns: [...COMMON_COLUMNS, ...SI_TRKSEC_COLUMNS],
    dummyData: [
      { "type": "SI_TRKSEC", "name": "C98XT", "trackSectionOccupiedOrClear": "clear", "trackSectionError": "error", "trackSectionBlockedByEI": "blockedByEI", "hexVal": "11", "hexValOpt": "11" }
    ],
  },
  "/SI_LCGATE": {
    id: 'SI_LCGATE',
    Heading: "SI LCGATE LIVE",
    columns: [...COMMON_COLUMNS, ...SI_LCGATE_COLUMNS],
    dummyData: [
      { "type": "SI_LCGATE", "name": "CH1", "lCGateStatus": "lcGateOpen", "hexVal": "0" }
    ],
  },


  "/EI_FIU": {
    id: 'EI_FIU',
    Heading: "EI FIU LIVE",
    columns: [...COMMON_COLUMNS, ...EI_FIU_COLUMNS],
    dummyData: [{ "type": "EI_FIU", "name": "FIU", "fiuStatus": "Operating-Failure", "fiuIpcError": "NoError", "fiuIoDeviceError": "NoError", "fiuApplicationError": "NoError", "fiuCommErrorWithOtherDevice": "NoError", "fiuWindowsSystemError": "ErrorDetectedByWindows", "hexVal": "11", "addtnlHexVal": "010000" }],
  },
  "/EI_DAC": {
    id: 'EI_DAC',
    Heading: "EI DAC LIVE",
    columns: [...COMMON_COLUMNS, ...EI_DAC_COLUMNS],
    dummyData: [{ "type": "EI_DAC", "name": "AXR-1 Down DAC(STN)", "dacStatus": "Operating-Normal", "hexVal": "1" }],
  },
  "/EI_L2SW": {
    id: 'EI_L2SW',
    Heading: "EI L2SW LIVE",
    columns: [...COMMON_COLUMNS, ...EI_L2SW_COLUMNS],
    dummyData: [{ "type": "EI_L2SW", "name": "SER VLC RACK L2 SW N/W - A", "l2swStatus": "Operating-Normal", "hexVal": "1" }],
  },
  "/EI_VLC": {
    id: 'EI_VLC',
    Heading: "EI VLC LIVE",
    columns: [...COMMON_COLUMNS, ...EI_VLC_COLUMNS],
    dummyData: [{ "type": "EI_VLC", "name": "VLC1 System Status", "vlcStatus": "Operating-Normal", "vlcAddnlStatus": "unidentified", "hexVal": "1", "addtnlHexVal": "00" }],
  },
  "/EI_IOM": {
    id: 'EI_IOM',
    Heading: "EI IOM LIVE",
    columns: [...COMMON_COLUMNS, ...EI_IOM_COLUMNS],
    dummyData: [{ "type": "EI_IOM", "name": "IOM 1 CONTROLLER 1", "iomStatus": "Operating-Normal", "iomAddnlStatus": "stopped", "hexVal": "1", "addtnlHexVal": "00" }],
  },
  "/EI_IFC": {
    id: 'EI_IFC',
    Heading: "EI IFC LIVE",
    columns: [...COMMON_COLUMNS, ...EI_IFC_COLUMNS],
    dummyData: [{ "type": "EI_IFC", "name": "IFC1 System Status", "ifcStatus": "Operating-Normal", "ifcAddnlStatus": "stand-by", "hexVal": "1", "addtnlHexVal": "100" }],
  },
  "/RLY_STATUS": {
    id: 'RLY_STATUS',
    Heading: "RLY STATUS LIVE",
    columns: null,
    cardKeys: { labelKey: 'name', valueKey: 'rlyStatus' },
    dummyData: [
      { "type": "RLY_STATUS", "name": "A20uu07HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(ON)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(ON)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A20uyuyuy07HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
      { "type": "RLY_STATUS", "name": "A2007HR", "rlyStatus": "Drop(OFF)/NotInstalled", "hexVal": "0" },
    ],
  },
};
