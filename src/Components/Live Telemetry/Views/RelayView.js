import React, { useMemo } from 'react'
import { useImmer } from 'use-immer'
import './RelayView.scss'


const map = {
    '1_a': 'Relay289',
    '1_b': 'Relay371',
    '1_c': 'Relay402',
    '1_d': 'Relay384',
    '2_a': 'Relay19',
    '2_b': 'Relay55',
    '2_c': 'Relay77',
    '2_d': 'Relay141',
    '3_a': 'Relay93',
    '3_b': 'Relay259',
    '3_c': 'Relay137',
    '3_d': 'Relay101',
    '4_a': 'Relay171',
    '4_b': 'Relay468',
    '4_c': 'Relay281',
    '4_d': 'Relay60',
    '5_a': 'Relay96',
    '5_b': 'Relay490',
    '5_c': 'Relay107',
    '5_d': 'Relay404',
    '6_a': 'Relay61',
    '6_b': 'Relay177',
    '6_c': 'Relay151',
    '6_d': 'Relay46',
    '7_a': 'Relay361',
    '7_b': 'Relay258',
    '7_c': 'Relay139',
    '7_d': 'Relay475',
    '8_a': 'Relay440',
    '8_b': 'Relay230',
    '8_c': 'Relay308',
    '8_d': 'Relay142'
}

function RelayView({ data }) {
    const [gridInfo, setGridInfo] = useImmer({
        cols: [1, 2, 3, 4, 5, 6, 7, 8],
        rows: ['a', 'b', 'c', 'd'],
        map: map
    })
    const relayDataMap = useMemo(() => {
        const _relayDataMap = {}
        data.forEach((rel) => {
            _relayDataMap[rel.name] = rel
        })
        return _relayDataMap
    }, [data])
    console.log(gridInfo, relayDataMap)
    return (
        <div className='relay-view-container'>
            {gridInfo.rows.map(row => (
                <div className='gird-row' key={row}>
                    {gridInfo.cols.map(col => (
                        <div className='gird-cell' key={`${col}_${row}`}>{map[`${col}_${row}`]}</div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default RelayView
