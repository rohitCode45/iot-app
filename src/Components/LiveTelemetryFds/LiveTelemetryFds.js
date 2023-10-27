import React from 'react'
import { fdsPageInfo } from './fdsConstants';
import { useLocation } from 'react-router-dom';
import DataTable from '../../Globel Components/Data Table/DataTable';
import { useSelector } from 'react-redux';
import { selectLiveFdsData } from '../../Globel Utils/globeldataSlice';


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
    const liveFdsData = useSelector(selectLiveFdsData)
    console.log('parsing ',liveFdsData)
    const fdsTelemetryPage = fdsPageInfo?.[location?.state?.childUrl];
    const fdsTableData = getTableDataFromTypeMap(liveFdsData, fdsTelemetryPage?.id)
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
                        />
                    )
                }

            </div>


        </div>
    )
}

export default LiveTelemetryFds
