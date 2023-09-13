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

export const sidebarData = [
  {
    id: 0,
    label: "Yardview",
    url: "/yardview",
  },
  {
    id: 1,
    label: "Component Types",
    parentUrl: "/live-telemetry",
    children: ASSET_TYPES.map((assetType, i) => {
      let number = i + 1
      return {
        id: 1 + '_' + number,
        label: assetType,
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
