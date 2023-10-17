const ASSET_TYPES_FIU = [
  "SI_SIGNAL",
  "SI_POINT",
  "SI_ROUTE",
  "SI_TRKSEC",
  "SI_LCGATE",
  "EI_FIU",
  "EI_DAC",
  "EI_L2SW",
  "EI_VLC",
  "EI_IOM",
  "EI_IFC",
  "RLY_STATUS",
  // "LAN",
  // "LEU",
  // "L2SO",
];
const ASSET_TYPES_FDS = [
  "FDS_TRKSEC",
  "FDS_CNTHEAD",
  "FDS_COM",
  "FDS_IXL",
  "FDS_FWDING",
];

export const ASSET_TYPE_LABEL_MAP = {
  "SI_SIGNAL": "SIGNAL",
  "SI_POINT": "POINT",
  "SI_ROUTE": 'ROUTE',
  "SI_TRKSEC": "TRKSEC",
  "SI_LCGATE": "LCGATE",
  "EI_FIU": "FIU",
  "EI_DAC": "DAC",
  "EI_L2SW": "L2SW",
  "EI_VLC": "VLC",
  "EI_IOM": "IOM",
  "EI_IFC": "IFC",
  "RLY_STATUS": "RLY STATUS",
  // "LAN": "LAN",
  // "LEU": "LEU",
  // "L2SO": "L2SO",
  FDS_TRKSEC: 'FDS_TRKSEC',
  FDS_CNTHEAD: 'FDS_CNTHEAD',
  FDS_COM: 'FDS_COM',
  FDS_IXL: 'FDS_IXL',
  FDS_FWDING: 'FDS_FWDING',
  FDS_TYPE_6: 'FDS_TYPE_6',
  FDS_TYPE_7: 'FDS_TYPE_7',
}

export const sidebarData = [
  {
    id: 0,
    label: "Yardview",
    url: "/yardview",
    icon: (<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" width='1.5em' height='1.5em' fill="#cacaca" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AnalyticsIcon"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z"></path></svg>)
  },
  {
    id: 1,
    label: "FIU GRID VIEW",
    parentUrl: "/live-telemetry-fiu",
    icon: (<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" width='1.5em' height='1.5em' fill="#cacaca" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LanIcon"><path d="M13 22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3z"></path></svg>),
    children: ASSET_TYPES_FIU.map((assetType, i) => {
      let number = i + 1
      return {
        id: 1 + '_' + number,
        label: ASSET_TYPE_LABEL_MAP[assetType],
        childUrl: '/' + assetType,
      }
    }),
  },
  {
    id: 2,
    label: "FDS GRID VIEW",
    parentUrl: "/live-telemetry-fds",
    icon: (<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" width='1.5em' height='1.5em' fill="#cacaca" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LanIcon"><path d="M13 22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3z"></path></svg>),
    children: ASSET_TYPES_FDS.map((assetType, i) => {
      let number = i + 1
      return {
        id: 1 + '_' + number,
        label: ASSET_TYPE_LABEL_MAP[assetType],
        childUrl: '/' + assetType,
      }
    }),
  },
];

export const childToParentMap = {
  "live-telemetry-fiu": [
    "SI_SIGNAL",
    "SI_POINT",
    "SI_ROUTE",
    "SI_TRKSEC",
    "SI_LCGATE",
    "EI_FIU",
    "EI_DAC",
    "EI_L2SW",
    "EI_VLC",
    "EI_IOM",
    "EI_IFC",
    "RLY_STATUS",
  ],
  "live-telemetry-fds": [
    "FDS_TRKSEC",
    "FDS_CNTHEAD",
    "FDS_COM",
    "FDS_IXL",
    "FDS_FWDING",
  ],
};
