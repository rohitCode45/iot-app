import React, { useMemo } from 'react'
import { useImmer } from 'use-immer'
import './RelayView.scss'


const map = {
    '1_A': ['Relay1', 'Relay2'],
    '1_B': 'Relay2',
    '1_C': 'Relay3',
    '1_D': 'Relay4',
    '1_E': 'Relay5',
    '1_F': 'Relay6',
    '2_A': 'Relay7',
    '2_B': 'Relay8',
    '2_C': 'Relay9',
    '2_D': 'Relay10',
    '2_E': 'Relay11',
    '2_F': 'Relay12',
    '3_A': 'Relay13',
    '3_B': 'Relay14',
    '3_C': 'Relay15',
    '3_D': 'Relay16',
    '3_E': 'Relay17',
    '3_F': 'Relay18',
    '4_A': 'Relay19',
    '4_B': 'Relay20',
    '4_C': 'Relay21',
    '4_D': 'Relay22',
    '4_E': 'Relay23',
    '4_F': 'Relay24',
    '5_A': 'Relay25',
    '5_B': 'Relay26',
    '5_C': 'Relay27',
    '5_D': 'Relay28',
    '5_E': 'Relay29',
    '5_F': 'Relay30',
    '6_A': 'Relay31',
    '6_B': 'Relay32',
    '6_C': 'Relay33',
    '6_D': 'Relay34',
    '6_E': 'Relay35',
    '6_F': 'Relay36',
    '7_A': 'Relay37',
    '7_B': 'Relay38',
    '7_C': 'Relay39',
    '7_D': 'Relay40',
    '7_E': 'Relay41',
    '7_F': 'Relay42',
    '8_A': 'Relay43',
    '8_B': 'Relay44',
    '8_C': 'Relay45',
    '8_D': 'Relay46',
    '8_E': 'Relay47',
    '8_F': 'Relay48',
    '9_A': 'Relay49',
    '9_B': 'Relay50',
    '9_C': 'Relay51',
    '9_D': 'Relay52',
    '9_E': 'Relay53',
    '9_F': 'Relay54',
    '10_A': 'Relay55',
    '10_B': 'Relay56',
    '10_C': 'Relay57',
    '10_D': 'Relay58',
    '10_E': 'Relay59',
    '10_F': 'Relay60',
    '11_A': 'Relay61',
    '11_B': 'Relay62',
    '11_C': 'Relay63',
    '11_D': 'Relay64',
    '11_E': 'Relay65',
    '11_F': 'Relay66',
    '12_A': 'Relay67',
    '12_B': 'Relay68',
    '12_C': 'Relay69',
    '12_D': 'Relay70',
    '12_E': 'Relay71',
    '12_F': 'Relay72',
    '13_A': 'Relay73',
    '13_B': 'Relay74',
    '13_C': 'Relay75',
    '13_D': 'Relay76',
    '13_E': 'Relay77',
    '13_F': 'Relay78',
    '14_A': 'Relay79',
    '14_B': 'Relay80',
    '14_C': 'Relay81',
    '14_D': 'Relay82',
    '14_E': 'Relay83',
    '14_F': 'Relay84',
    '15_A': 'Relay85',
    '15_B': 'Relay86',
    '15_C': 'Relay87',
    '15_D': 'Relay88',
    '15_E': 'Relay89',
    '15_F': 'Relay90',
    '16_A': 'Relay91',
    '16_B': 'Relay92',
    '16_C': 'Relay93',
    '16_D': 'Relay94',
    '16_E': 'Relay95',
    '16_F': 'Relay96',
    '17_A': 'Relay97',
    '17_B': 'Relay98',
    '17_C': 'Relay99',
    '17_D': 'Relay100',
    '17_E': 'Relay101',
    '17_F': 'Relay102',
    '18_A': 'Relay103',
    '18_B': 'Relay104',
    '18_C': 'Relay105',
    '18_D': 'Relay106',
    '18_E': 'Relay107',
    '18_F': 'Relay108'
}
const relayDataMap = {
    Relay1:
    {
        type: 'RLY_STATUS',
        name: 'Relay1',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay2:
    {
        type: 'RLY_STATUS',
        name: 'Relay2',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay3:
    {
        type: 'RLY_STATUS',
        name: 'Relay3',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay4:
    {
        type: 'RLY_STATUS',
        name: 'Relay4',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay5:
    {
        type: 'RLY_STATUS',
        name: 'Relay5',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay6:
    {
        type: 'RLY_STATUS',
        name: 'Relay6',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay7:
    {
        type: 'RLY_STATUS',
        name: 'Relay7',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay8:
    {
        type: 'RLY_STATUS',
        name: 'Relay8',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay9:
    {
        type: 'RLY_STATUS',
        name: 'Relay9',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay10:
    {
        type: 'RLY_STATUS',
        name: 'Relay10',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay11:
    {
        type: 'RLY_STATUS',
        name: 'Relay11',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay12:
    {
        type: 'RLY_STATUS',
        name: 'Relay12',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay13:
    {
        type: 'RLY_STATUS',
        name: 'Relay13',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay14:
    {
        type: 'RLY_STATUS',
        name: 'Relay14',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay15:
    {
        type: 'RLY_STATUS',
        name: 'Relay15',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay16:
    {
        type: 'RLY_STATUS',
        name: 'Relay16',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay17:
    {
        type: 'RLY_STATUS',
        name: 'Relay17',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay18:
    {
        type: 'RLY_STATUS',
        name: 'Relay18',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay19:
    {
        type: 'RLY_STATUS',
        name: 'Relay19',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay20:
    {
        type: 'RLY_STATUS',
        name: 'Relay20',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay21:
    {
        type: 'RLY_STATUS',
        name: 'Relay21',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay22:
    {
        type: 'RLY_STATUS',
        name: 'Relay22',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay23:
    {
        type: 'RLY_STATUS',
        name: 'Relay23',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay24:
    {
        type: 'RLY_STATUS',
        name: 'Relay24',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay25:
    {
        type: 'RLY_STATUS',
        name: 'Relay25',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay26:
    {
        type: 'RLY_STATUS',
        name: 'Relay26',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay27:
    {
        type: 'RLY_STATUS',
        name: 'Relay27',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay28:
    {
        type: 'RLY_STATUS',
        name: 'Relay28',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay29:
    {
        type: 'RLY_STATUS',
        name: 'Relay29',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay30:
    {
        type: 'RLY_STATUS',
        name: 'Relay30',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay31:
    {
        type: 'RLY_STATUS',
        name: 'Relay31',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay32:
    {
        type: 'RLY_STATUS',
        name: 'Relay32',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay33:
    {
        type: 'RLY_STATUS',
        name: 'Relay33',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay34:
    {
        type: 'RLY_STATUS',
        name: 'Relay34',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay35:
    {
        type: 'RLY_STATUS',
        name: 'Relay35',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay36:
    {
        type: 'RLY_STATUS',
        name: 'Relay36',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay37:
    {
        type: 'RLY_STATUS',
        name: 'Relay37',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay38:
    {
        type: 'RLY_STATUS',
        name: 'Relay38',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay39:
    {
        type: 'RLY_STATUS',
        name: 'Relay39',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay40:
    {
        type: 'RLY_STATUS',
        name: 'Relay40',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay41:
    {
        type: 'RLY_STATUS',
        name: 'Relay41',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay42:
    {
        type: 'RLY_STATUS',
        name: 'Relay42',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay43:
    {
        type: 'RLY_STATUS',
        name: 'Relay43',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay44:
    {
        type: 'RLY_STATUS',
        name: 'Relay44',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay45:
    {
        type: 'RLY_STATUS',
        name: 'Relay45',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay46:
    {
        type: 'RLY_STATUS',
        name: 'Relay46',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay47:
    {
        type: 'RLY_STATUS',
        name: 'Relay47',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay48:
    {
        type: 'RLY_STATUS',
        name: 'Relay48',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay49:
    {
        type: 'RLY_STATUS',
        name: 'Relay49',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay50:
    {
        type: 'RLY_STATUS',
        name: 'Relay50',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay51:
    {
        type: 'RLY_STATUS',
        name: 'Relay51',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay52:
    {
        type: 'RLY_STATUS',
        name: 'Relay52',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay53:
    {
        type: 'RLY_STATUS',
        name: 'Relay53',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay54:
    {
        type: 'RLY_STATUS',
        name: 'Relay54',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay55:
    {
        type: 'RLY_STATUS',
        name: 'Relay55',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay56:
    {
        type: 'RLY_STATUS',
        name: 'Relay56',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay57:
    {
        type: 'RLY_STATUS',
        name: 'Relay57',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay58:
    {
        type: 'RLY_STATUS',
        name: 'Relay58',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay59:
    {
        type: 'RLY_STATUS',
        name: 'Relay59',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay60:
    {
        type: 'RLY_STATUS',
        name: 'Relay60',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay61:
    {
        type: 'RLY_STATUS',
        name: 'Relay61',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay62:
    {
        type: 'RLY_STATUS',
        name: 'Relay62',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay63:
    {
        type: 'RLY_STATUS',
        name: 'Relay63',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay64:
    {
        type: 'RLY_STATUS',
        name: 'Relay64',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay65:
    {
        type: 'RLY_STATUS',
        name: 'Relay65',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay66:
    {
        type: 'RLY_STATUS',
        name: 'Relay66',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay67:
    {
        type: 'RLY_STATUS',
        name: 'Relay67',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay68:
    {
        type: 'RLY_STATUS',
        name: 'Relay68',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay69:
    {
        type: 'RLY_STATUS',
        name: 'Relay69',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay70:
    {
        type: 'RLY_STATUS',
        name: 'Relay70',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay71:
    {
        type: 'RLY_STATUS',
        name: 'Relay71',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay72:
    {
        type: 'RLY_STATUS',
        name: 'Relay72',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay73:
    {
        type: 'RLY_STATUS',
        name: 'Relay73',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay74:
    {
        type: 'RLY_STATUS',
        name: 'Relay74',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay75:
    {
        type: 'RLY_STATUS',
        name: 'Relay75',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay76:
    {
        type: 'RLY_STATUS',
        name: 'Relay76',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay77:
    {
        type: 'RLY_STATUS',
        name: 'Relay77',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay78:
    {
        type: 'RLY_STATUS',
        name: 'Relay78',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay79:
    {
        type: 'RLY_STATUS',
        name: 'Relay79',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay80:
    {
        type: 'RLY_STATUS',
        name: 'Relay80',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay81:
    {
        type: 'RLY_STATUS',
        name: 'Relay81',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay82:
    {
        type: 'RLY_STATUS',
        name: 'Relay82',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay83:
    {
        type: 'RLY_STATUS',
        name: 'Relay83',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay84:
    {
        type: 'RLY_STATUS',
        name: 'Relay84',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay85:
    {
        type: 'RLY_STATUS',
        name: 'Relay85',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay86:
    {
        type: 'RLY_STATUS',
        name: 'Relay86',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay87:
    {
        type: 'RLY_STATUS',
        name: 'Relay87',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay88:
    {
        type: 'RLY_STATUS',
        name: 'Relay88',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay89:
    {
        type: 'RLY_STATUS',
        name: 'Relay89',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay90:
    {
        type: 'RLY_STATUS',
        name: 'Relay90',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay91:
    {
        type: 'RLY_STATUS',
        name: 'Relay91',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay92:
    {
        type: 'RLY_STATUS',
        name: 'Relay92',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay93:
    {
        type: 'RLY_STATUS',
        name: 'Relay93',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay94:
    {
        type: 'RLY_STATUS',
        name: 'Relay94',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay95:
    {
        type: 'RLY_STATUS',
        name: 'Relay95',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay96:
    {
        type: 'RLY_STATUS',
        name: 'Relay96',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay97:
    {
        type: 'RLY_STATUS',
        name: 'Relay97',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay98:
    {
        type: 'RLY_STATUS',
        name: 'Relay98',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay99:
    {
        type: 'RLY_STATUS',
        name: 'Relay99',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay100:
    {
        type: 'RLY_STATUS',
        name: 'Relay100',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay101:
    {
        type: 'RLY_STATUS',
        name: 'Relay101',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay102:
    {
        type: 'RLY_STATUS',
        name: 'Relay102',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay103:
    {
        type: 'RLY_STATUS',
        name: 'Relay103',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay104:
    {
        type: 'RLY_STATUS',
        name: 'Relay104',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay105:
    {
        type: 'RLY_STATUS',
        name: 'Relay105',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay106:
    {
        type: 'RLY_STATUS',
        name: 'Relay106',
        rlyStatus: 'ON',
        hexVal: '0'
    },
    Relay107:
    {
        type: 'RLY_STATUS',
        name: 'Relay107',
        rlyStatus: 'OFF',
        hexVal: '0'
    },
    Relay108:
    {
        type: 'RLY_STATUS',
        name: 'Relay108',
        rlyStatus: 'ON',
        hexVal: '0'
    }
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
        rows: ['A', 'B', 'C', 'D', 'E', 'F'],
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
