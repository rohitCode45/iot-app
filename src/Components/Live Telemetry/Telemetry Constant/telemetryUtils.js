//telemety globel functions

import { connectedIcon, errorIcon, progressIcon } from "./telemetryIcons";

export const liveConstantMap = {
    1: {
        text: 'In Progress',
        icon: progressIcon,
        color: '#d3a654'
    },
    2: {
        text: 'Connected',
        icon: connectedIcon,
        color: '#3e9947'
    },
    3: {
        text: 'Failed',
        icon: errorIcon,
        color: 'red'
    },
}