import React, { useState } from "react";
import DataTable from "../../Globel Components/Data Table/DataTable";
import './LiveTelemetry.scss'
import { useLocation } from "react-router-dom";
import { telemetryPageInfo } from "./Telemetry Constant/telemetryConstants";

function LiveTemetry() {
  const [liveTelemetryData, setLiveTelemetryData] = useState([])
  const location = useLocation()
  const telemetryPage= telemetryPageInfo?.[location.state.childUrl]
  
  const tableCols =[
    {Header:'Name', accessor:'name'},
    {Header:'Age', accessor:'age'},
    {Header:'Group', accessor:'group'},
  ]

 
  return (
    <div className="live-telemetry-main-component">
      <div className="telemtry-container-header">{telemetryPage.Heading ?? 'bdhdkh'}</div>
      <div className="telemetry-table-container cardTheme">
        <DataTable
        columns={telemetryPage.columns}
        data={telemetryPage.dummyData}
        />
      </div>
    </div>
  );
}

export default LiveTemetry;
