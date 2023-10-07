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


export function getRangeFromStartToEnd(start, end) {
    if (typeof start === 'number' && typeof end === 'number') {
        // Handle numeric ranges
        if (start <= end) {
            return Array.from({ length: end - start + 1 }, (_, i) => start + i);
        } else {
            return Array.from({ length: start - end + 1 }, (_, i) => start - i);
        }
    } else if (typeof start === 'string' && typeof end === 'string') {
        // Handle alphabetical ranges (uppercase only)
        start = start.toUpperCase();
        end = end.toUpperCase();

        const result = [];
        for (let charCode = start.charCodeAt(0); charCode <= end.charCodeAt(0); charCode++) {
            result.push(String.fromCharCode(charCode));
        }
        return result;
    } else {
        return [];
    }
}
