const ASSET_TYPES = [
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
  "EI_IFC": "IOM",
  "RLY_STATUS": "RLY STATUS",
}

export const sidebarData = [
  {
    id: 0,
    label: "Yardview",
    url: "/yardview",
  },
  {
    id: 1,
    label: "Grid View",
    parentUrl: "/live-telemetry",
    children: ASSET_TYPES.map((assetType, i) => {
      let number = i + 1
      return {
        id: 1 + '_' + number,
        label: ASSET_TYPE_LABEL_MAP[assetType],
        childUrl: '/' + assetType,
      }
    }),
    // children: [
    //   {
    //     id: 2,
    //     label: "SI_SIGNAL",
    //     childUrl: "/SI_SIGNAL",
    //   },
    //   {
    //     id: 3,
    //     label: "SI_POINT",
    //     childUrl: "/SI_POINT",
    //   },
    //   {
    //     id: 4,
    //     label: "SI_ROUTE",
    //     childUrl: "/SI_ROUTE",
    //   },
    //   {
    //     id: 5,
    //     label: "SI_TRKSEC",
    //     childUrl: "/SI_TRKSEC",
    //   },
    //   {
    //     id: 6,
    //     label: "SI_LCGATE",
    //     childUrl: "/SI_LCGATE",
    //   },
    // ],
  },
];

export const childToParentMap = {
  "live-telemetry": [
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
};
