import React from 'react'
import { fdsPageInfo } from './fdsConstants';
import { useLocation } from 'react-router-dom';
import DataTable from '../../Globel Components/Data Table/DataTable';
import { useSelector } from 'react-redux';
import { selectFdsLiveStatus, selectLiveFdsData } from '../../Globel Utils/globeldataSlice';
import InfoPopup from '../../Globel Components/InfoPopup/InfoPopup';
import { useImmer } from 'use-immer';
import { liveConstantMap } from '../Live Telemetry/Telemetry Constant/telemetryUtils';

const initPopState = {
    isOpen: false,
    infodata: null,
};

function getTableDataFromTypeMap(liveDataMap, type) {
    let tableData = []
    if (liveDataMap && type) {
        if (liveDataMap[type]) {
            tableData = Object.values(liveDataMap[type])
        }
    }
    return tableData
}

function LiveTelemetryFds() {
    const location = useLocation()
    const [infoPopup, setInfoPopup] = useImmer(initPopState);
    const liveFdsData = useSelector(selectLiveFdsData)
    const liveConstant = useSelector(selectFdsLiveStatus)

    const CHILD_URL = ('/' + location?.pathname?.split('/')?.pop()) ?? null
    const fdsTelemetryPage = fdsPageInfo?.[CHILD_URL];
    const fdsTableData = getTableDataFromTypeMap(liveFdsData, fdsTelemetryPage?.id)

    const handlerowClick = (rowData) => {
        setInfoPopup((prev) => {
            prev.isOpen = true;
            prev.infodata = rowData?.values ?? {};
        });
    };
    return (
        <div className="live-telemetry-main-component">
            {/* <Header label={fdsTelemetryPage?.Heading ?? "Telemetry"} /> */}
            <div className="tableInfoContainer">
                <div className="liveInfoConatiner">
                    <div style={{ color: liveConstantMap[liveConstant].color }} className="liveStatusIcon">{liveConstantMap[liveConstant].icon}</div>
                    <div className="liveStatusText">
                        {liveConstantMap[liveConstant].text}
                    </div>
                </div>
                <div className="countInfo">Total assets : {fdsTableData.length}</div>
            </div>


            <div className="telemetry-table-container cardTheme">
                {
                    fdsTelemetryPage.columns !== null && (
                        <DataTable
                            id={fdsTelemetryPage?.id ?? ""}
                            columns={fdsTelemetryPage?.columns ?? []}
                            // data={fdsTelemetryPage?.dummyData ?? []}
                            hasColumnGrouping={fdsTelemetryPage?.hasColumnGrouping ?? false}
                            data={fdsTableData}
                            loading={false}
                            onRowClick={({ event, row }) => {
                                handlerowClick(row);
                            }}
                        />
                    )
                }

            </div>

            {infoPopup.isOpen && (
                <InfoPopup
                    isOpen={infoPopup.isOpen}
                    gearNameKey={'gearName'}
                    onClose={() => setInfoPopup(initPopState)}
                    cols={fdsTelemetryPage?.columns ?? []}
                    infoData={infoPopup.infodata}
                />
            )}
        </div>
    )
}

export default LiveTelemetryFds
