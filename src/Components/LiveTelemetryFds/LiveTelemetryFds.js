import React from 'react'
import { fdsPageInfo } from './fdsConstants';
import { useLocation } from 'react-router-dom';
import DataTable from '../../Globel Components/Data Table/DataTable';

function LiveTelemetryFds() {
    const location = useLocation()
    const fdsTelemetryPage = fdsPageInfo?.[location?.state?.childUrl];
    return (
        <div className="live-telemetry-main-component">
            {/* <Header label={fdsTelemetryPage?.Heading ?? "Telemetry"} /> */}
            <div className="tableInfoContainer">
                <div className="liveInfoConatiner">
                    {/* <div style={{ color: liveConstantMap[liveConstant].color }} className="liveStatusIcon">{liveConstantMap[liveConstant].icon}</div>
                    <div className="liveStatusText">
                        {liveConstantMap[liveConstant].text}
                    </div> */}
                </div>
                <div className="countInfo">Total assets : 77</div>
            </div>


            <div className="telemetry-table-container cardTheme">
                {
                    fdsTelemetryPage.columns !== null && (
                        <DataTable
                            id={fdsTelemetryPage?.id ?? ""}
                            columns={fdsTelemetryPage?.columns ?? []}
                            data={fdsTelemetryPage?.dummyData ?? []}
                            hasColumnGrouping={fdsTelemetryPage?.hasColumnGrouping ?? false}
                            // data={getTableDataFromTypeMap(liveTelemetryData, fdsTelemetryPage?.id)}
                            loading={false}
                        />
                    )
                }

            </div>


        </div>
    )
}

export default LiveTelemetryFds
