export const fiuMock = [
  { type: "SI_ROUTE", name: "S1-01AA", routeSet: "routeNotSet", hexVal: "0" },
  { type: "SI_ROUTE", name: "C1-01AA", routeSet: "routeNotSet", hexVal: "0" },
  {
    type: "SI_SIGNAL",
    name: "S1",
    lampProved: "burnOut",
    autoMode: "notAutoMode",
    appraochLock: "noApproachLocking",
    aspectControl: "noControlTheAspect",
    agMarker: "unLit",
    aspectCode: "red",
    hexVal: "1",
  },
  {
    type: "SI_POINT",
    name: "200A/B",
    controlsNormal: "noControlToNormalDirection",
    detectedNormal: "setAndLockedToNormalDirection",
    controlsReverse: "noControlToReverseDirection",
    detectedReverse: "notSetAndLockedToReverseDirection",
    blocked: "notBlocked",
    pointFailureInNormal: "normal",
    pointFailureInReverse: "normal",
    crankHandleKeyStatus: "insertion",
    hexVal: "100000",
    hexValOpt: "10",
  },
  {
    type: "SI_POINT",
    name: "201A",
    controlsNormal: "noControlToNormalDirection",
    detectedNormal: "notSetAndLockedToNormalDirection",
    controlsReverse: "noControlToReverseDirection",
    detectedReverse: "notSetAndLockedToReverseDirection",
    blocked: "blocked",
    pointFailureInNormal: "normal",
    pointFailureInReverse: "failure",
    crankHandleKeyStatus: "extraction",
    hexVal: "10",
    hexValOpt: "100",
  },
  {
    type: "SI_TRKSEC",
    name: "C98XT",
    trackSectionOccupiedOrClear: "clear",
    trackSectionError: "error",
    trackSectionBlockedByEI: "blockedByEI",
    hexVal: "11",
    hexValOpt: "11",
    dummykey1: "aaa",
    dummykey2: "gdhjdgjhg",
  },
  { type: "SI_LCGATE", name: "CH1", lCGateStatus: "lcGateOpen", hexVal: "0" },
  {
    type: "EI_FIU",
    name: "FIU",
    fiuStatus: "Operating-Failure",
    fiuIpcError: "NoError",
    fiuIoDeviceError: "NoError",
    fiuApplicationError: "NoError",
    fiuCommErrorWithOtherDevice: "NoError",
    fiuWindowsSystemError: "ErrorDetectedByWindows",
    hexVal: "11",
    addtnlHexVal: "010000",
  },
  {
    type: "EI_DAC",
    name: "AXR-1 Down DAC(STN)",
    dacStatus: "Operating-Normal",
    hexVal: "1",
  },
  {
    type: "EI_L2SW",
    name: "SER VLC RACK L2 SW N/W - A",
    l2swStatus: "Operating-Normal",
    hexVal: "1",
  },
  {
    type: "EI_VLC",
    name: "VLC1 System Status",
    vlcStatus: "Operating-Normal",
    vlcAddnlStatus: "unidentified",
    hexVal: "1",
    addtnlHexVal: "00",
  },
  {
    type: "EI_IOM",
    name: "IOM 1 CONTROLLER 1",
    iomStatus: "Operating-Normal",
    iomAddnlStatus: "stopped",
    hexVal: "1",
    addtnlHexVal: "00",
  },
  {
    type: "EI_IFC",
    name: "IFC1 System Status",
    ifcStatus: "Operating-Normal",
    ifcAddnlStatus: "stand-by",
    hexVal: "1",
    addtnlHexVal: "100",
  },
  {
    type: "RLY_STATUS",
    name: "A20uu07HR",
    rlyStatus: "Drop(OFF)/NotInstalled",
    hexVal: "0",
  },
  {
    type: "LAN",
    name: "LAN_NAME",
    status: "LEU_Drop(OFF)/NotInstalled",
    additionalInfo: "add_LAN",
  },
  {
    type: "LEU",
    name: "LEU_NAME",
    status: "LEU_Drop(OFF)/NotInstalled",
    additionalInfo: "add_LEW",
  },
  {
    type: "L2SO",
    name: "L2SO_NAME",
    status: "L2SO_Drop(OFF)/NotInstalled",
    additionalInfo: "add_L2SO",
  },
];

export const fdsMock = [
  {
    fdsDetail: {
      fdsIpAddress: "192.168.29.96",
      fdsName: "FDS1_NEW ATELI",
      fdsType: "FDSFADCR2",
      fdsDomain: "ALH4 to ALH3",
    },
    gearType: "FDS_TRKSEC",
    gearName: "ICDMXT",
    msgType: "fdsTrackSection_213",
    msgDetail: {
      elementStatus: "online",
      raiseTime: "2023-09-16T16:40:11.527",
      sendTime: "2023-09-16T17:08:45.034",
    },
  },
  {
    fdsDetail: {
      fdsIpAddress: "192.168.29.96",
      fdsName: "FDS1_NEW ATELI",
      fdsType: "FDSFADCR2",
      fdsDomain: "ALH4 to ALH3",
    },

    gearType: "FDS_TRKSEC",
    gearName: "2005XT_2003XT",
    msgType: "fdsTrackSection_202",
    msgDetail: {
      elementStatus: "ok",
      raiseTime: "2023-09-16T17:03:15.587",
      sendTime: "2023-09-16T17:08:45.053",
      trackSection: "clear",
      numberOfAxlesPassed: "65535",
      numberOfAxlesPeak: "65535",
    },
  },
  {
    fdsDetail: {
      fdsIpAddress: "192.168.29.96",
      fdsName: "FDS1_NEW ATELI",
      fdsType: "FDSFADCR2",
      fdsDomain: "ALH4 to ALH3",
    },

    gearType: "FDS_TRKSEC",
    gearName: "2005XT_2003XT",
    msgType: "fdsTrackSection_213",
    msgDetail: {
      elementStatus: "online",
      raiseTime: "2023-09-16T16:40:11.527",
      sendTime: "2023-09-16T17:08:45.034",
    },
  },
  {
    fdsDetail: {
      fdsIpAddress: "192.168.29.96",
      fdsName: "FDS1_NEW ATELI",
      fdsType: "FDSFADCR2",
      fdsDomain: "ALH4 to ALH3",
    },

    gearType: "FDS_TRKSEC",
    gearName: "2005XT_2003XT",
    msgType: "fdsTrackSection_209",
    msgDetail: {
      elementStatus: "ok",
      raiseTime: "2023-09-16T17:03:35.784",
      sendTime: "2023-09-16T17:08:45.053",
      resetRestriction: "no",
      resetAbility: "no",
    },
  },
  {
    fdsDetail: {
      fdsIpAddress: "192.168.29.96",
      fdsName: "FDS1_NEW ATELI",
      fdsType: "FDSFADCR2",
      fdsDomain: "ALH4 to ALH3",
    },

    gearType: "FDS_TRKSEC",
    gearName: "2001XT_SUP",
    msgType: "fdsTrackSection_203",
    msgDetail: {
      elementStatus: "ok",
      raiseTime: "2023-09-16T17:08:39.228",
      sendTime: "2023-09-16T17:08:45.075",
      trackSection: "occupied",
      axleCount: "0",
    },
  },
  {
    fdsDetail: {
      fdsIpAddress: "192.168.29.96",
      fdsName: "FDS1_NEW ATELI",
      fdsType: "FDSFADCR2",
      fdsDomain: "ALH4 to ALH3",
    },

    gearType: "FDS_TRKSEC",
    gearName: "2001XT_SUP",
    msgType: "fdsTrackSection_213",
    msgDetail: {
      elementStatus: "online",
      raiseTime: "2023-09-16T16:40:11.527",
      sendTime: "2023-09-16T17:08:45.034",
    },
  },
  {
    fdsDetail: {
      fdsIpAddress: "192.168.29.96",
      fdsName: "FDS1_NEW ATELI",
      fdsType: "FDSFADCR2",
      fdsDomain: "ALH4 to ALH3",
    },
    gearType: "FDS_CNTHEAD",
    gearName: "U20",
    msgType: "fdsCntngHd_110",
    msgDetail: {
      elementStatus: "online",
      raiseTime: "2023-09-16T16:40:11.527",
      sendTime: "2023-09-16T17:08:45.035",
    },
  },
  {
    fdsDetail: {
      fdsIpAddress: "192.168.29.96",
      fdsName: "FDS1_NEW ATELI",
      fdsType: "FDSFADCR2",
      fdsDomain: "ALH4 to ALH3",
    },
    gearType: "FDS_CNTHEAD",
    gearName: "U20",
    msgType: "fdsCntngHd_107",
    msgDetail: {
      elementStatus: "ok",
      raiseTime: "2023-09-16T17:03:22.856",
      sendTime: "2023-09-16T17:08:45.053",
      countingHeadControl: "desensitised",
    },
  },
  {
    fdsDetail: {
      fdsIpAddress: "192.168.29.96",
      fdsName: "FDS1_NEW ATELI",
      fdsType: "FDSFADCR2",
      fdsDomain: "ALH4 to ALH3",
    },
    gearType: "FDS_CNTHEAD",
    gearName: "U20",
    msgType: "fdsCntngHd_101_1",
    msgDetail: {
      elementStatus: "ok",
      raiseTime: "2023-09-16T17:03:40.656",
      sendTime: "2023-09-16T17:08:45.054",
      countingHead: "ok",
    },
  },

];
