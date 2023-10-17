// telemetry constants
const COMMON_COLUMNS = [
    // { Header: "serialNumber",  accessor: (row, index) => index + 1 },
    { Header: "name", accessor: "name" },

    { Header: "raiseTime", accessor: "raiseTime" },
    { Header: "sendTime", accessor: "sendTime" },
]

const FDS_TRKSEC_COLUMNS = [
    { Header: "elementStatus", accessor: "elementStatus_213" },
    { Header: "treck", accessor: "treck" },
    { Header: "trackSection", accessor: "trackSection" },
    { Header: "numberOfAxlesPassed", accessor: "numberOfAxlesPassed" },
    { Header: "numberOfAxlesPeak", accessor: "numberOfAxlesPeak" },
    { Header: "resetRestriction", accessor: "resetRestriction" },
    { Header: "resetAbility", accessor: "resetAbility" },
    { Header: "axleCount", accessor: "axleCount" },
];
const FDS_CNTHEAD_COLUMNS = [
    { Header: "elementStatus", accessor: "elementStatus_110" },
    { Header: "countingHeadControl", accessor: "countingHeadControl" },
    {
        Header: 'wheelsensorSystem 1',
        columns: [
            {
                Header: 'countingHead',
                accessor: 'countingHead_1',
            },
            {
                Header: 'wheelsensorCurrent',
                accessor: 'wheelsensorCurrent_1',
            },
            {
                Header: 'wheelsensorAdjustCurrent',
                accessor: 'wheelsensorAdjustCurrent_1',
            },
            {
                Header: 'wheelsensorType',
                accessor: 'wheelsensorType_1',
            },
        ],
    },
    {
        Header: 'wheelsensorSystem 2',
        columns: [
            {
                Header: 'countingHead',
                accessor: 'countingHead_2',
            },
            {
                Header: 'wheelsensorCurrent',
                accessor: 'wheelsensorCurrent_2',
            },
            {
                Header: 'wheelsensorAdjustCurrent',
                accessor: 'wheelsensorAdjustCurrent_2',
            },
            {
                Header: 'wheelsensorType',
                accessor: 'wheelsensorType_2',
            },
        ],
    },
];
const FDS_COM_COLUMNS = [
    { Header: "elementStatus", accessor: "elementStatus_410" },
    { Header: "boardRedundancy", accessor: "boardRedundancy" },
    { Header: "temperature", accessor: "temperature" },
    { Header: "cfCard", accessor: "cfCard" },
    { Header: "channel1_hotlink", accessor: "channel1_hotlink" },
    { Header: "channel2_hotlink", accessor: "channel2_hotlink" },
    {
        Header: 'canBusChannel 1>channelNumber 1',
        columns: [
            {
                Header: 'canBus',
                accessor: 'canBus_1_1',
            },

        ],
    },
    {
        Header: 'canBusChannel 1>channelNumber 2',
        columns: [
            {
                Header: 'canBus',
                accessor: 'canBus_1_2',
            },

        ],
    },
    {
        Header: 'canBusChannel 2>channelNumber 1',
        columns: [
            {
                Header: 'canBus',
                accessor: 'canBus_2_1',
            },

        ],
    },
    {
        Header: 'canBusChannel 2>channelNumber 2',
        columns: [
            {
                Header: 'canBus',
                accessor: 'canBus_2_2',
            },

        ],
    },
];
const FDS_IXL_COLUMNS = [
    { Header: "elementStatus", accessor: "elementStatus_612" },
    { Header: "sumErrorTimeout", accessor: "sumErrorTimeout" },
    { Header: "sumErrorQuality", accessor: "sumErrorQuality" },
    { Header: "fscError", accessor: "fscError" },
    {
        Header: 'Link 1',
        columns: [
            {
                Header: 'interlockingLinkStatus',
                accessor: 'interlockingLinkStatus_1',
            },
        ],
    },
    {
        Header: 'Link 2',
        columns: [
            {
                Header: 'interlockingLinkStatus',
                accessor: 'interlockingLinkStatus_2',
            },
        ],
    },
    {
        Header: 'ethernetNumber 1',
        columns: [
            {
                Header: 'socketEthernetStatus',
                accessor: 'socketEthernetStatus_1',
            },
        ],
    },
    {
        Header: 'ethernetNumber 2',
        columns: [
            {
                Header: 'socketEthernetStatus',
                accessor: 'socketEthernetStatus_2',
            },
        ],
    },
];
const FDS_FWDING_COLUMNS = [
    { Header: "elementStatus", accessor: "elementStatus_504" },
    {
        Header: 'socketEthernet 1',
        columns: [
            {
                Header: 'socketEthernetStatus',
                accessor: 'socketEthernetStatus_1',
            },
        ],
    },
    {
        Header: 'socketEthernet 2',
        columns: [
            {
                Header: 'socketEthernetStatus',
                accessor: 'socketEthernetStatus_2',
            },
        ],
    },
];



export const fdsPageInfo = {
    "/FDS_TRKSEC": {
        id: 'FDS_TRKSEC',
        Heading: "FDS_TRKSEC LIVE",
        hasColumnGrouping: false,
        columns: [...COMMON_COLUMNS, ...FDS_TRKSEC_COLUMNS],
        dummyData: [
        ],
    },
    "/FDS_CNTHEAD": {
        id: 'FDS_CNTHEAD',
        Heading: "FDS_CNTHEAD LIVE",
        hasColumnGrouping: true,
        columns: [...COMMON_COLUMNS, ...FDS_CNTHEAD_COLUMNS],
        dummyData: [
        ],
    },
    "/FDS_COM": {
        id: 'FDS_COM',
        Heading: "FDS_COM LIVE",
        hasColumnGrouping: true,
        columns: [...COMMON_COLUMNS, ...FDS_COM_COLUMNS],
        dummyData: [
        ],
    },
    "/FDS_IXL": {
        id: 'FDS_IXL',
        Heading: "FDS_IXL LIVE",
        hasColumnGrouping: true,
        columns: [...COMMON_COLUMNS, ...FDS_IXL_COLUMNS],
        dummyData: [
        ],
    },
    "/FDS_FWDING": {
        id: 'FDS_FWDING',
        Heading: "FDS_FWDING LIVE",
        hasColumnGrouping: true,
        columns: [...COMMON_COLUMNS, ...FDS_FWDING_COLUMNS],
        dummyData: [
        ],
    },


};
