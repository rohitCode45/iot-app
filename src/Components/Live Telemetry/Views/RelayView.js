import React, { useMemo } from 'react'
import { useImmer } from 'use-immer'
import './RelayView.scss'


const map = {}
const relayDataMap = {
    Relay1:
    {
        type: 'RLY_STATUS',
        name: 'Relay1',
        rlyStatus: 'ON',
        hexVal: '0'
    },
}


const getCellStyle = (relayData, cellIndex, maxIndex) => {
    let _styles = {}
    if (relayData) {
        _styles['backgroundColor'] = relayData.rlyStatus === 'OFF' ? '#cfaeae' : '#bcffbc'
        if (cellIndex < maxIndex) {
            console.log(cellIndex, maxIndex)
            _styles['borderRight'] = '1px dashed black'
        }
    }

    return _styles
}

const RelayGridCell = ({ relayDataMap, relayName, gridPosition }) => {
    const relayList = (relayName && Array.isArray(relayName)) ? relayName : [relayName]
    if (Array.isArray(relayList)) {

        return <div id={gridPosition} key={gridPosition} className='gird-cell'>
            {relayList.map((relay, i) => {
                return (
                    <span className='gird-cell-child' style={getCellStyle(relayDataMap?.[relay], i, relayList.length - 1)} key={relay + i}>
                        {relay.length > 0 ? (relay + '-' + relayDataMap[relay].rlyStatus) : ''}
                    </span>
                )
            })}
        </div>
    }
}


function RelayView({ data }) {
    const [gridInfo, setGridInfo] = useImmer({
        cols: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        rows: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
        map: map
    })
    // const relayDataMap = useMemo(() => {
    //     const _relayDataMap = {}
    //     data.forEach((rel) => {
    //         _relayDataMap[rel.name] = rel
    //     })
    //     return _relayDataMap
    // }, [data])
    console.log(gridInfo, relayDataMap)
    return (
        <div className='relay-view-container'>
            {gridInfo.rows.map((row, rowIndex) => {
                return (
                    <>
                        {rowIndex === 0 && <div className='gird-row'>
                            {gridInfo.cols.map((column, columnIn) => {
                                return (
                                    <>
                                        {columnIn === 0 && <div className='gird-cell indexRow indexCell'>{''}</div>}
                                        <div className='gird-cell indexRow'>{column}</div>
                                    </>
                                )
                            })}
                        </div>}
                        <div className='gird-row' key={row}>
                            {gridInfo.cols.map((col, i) => {
                                return (
                                    <>
                                        {i === 0 && <div className='gird-cell indexCell'>{row}</div>}
                                        <RelayGridCell key={i} relayDataMap={relayDataMap} gridPosition={col + '_' + row} relayName={map[`${col}_${row}`] ?? ''} />
                                    </>
                                )
                            })}
                        </div>
                    </>
                )

            })}
        </div>
    )
}

export default RelayView
