import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import DataTable from "../../Globel Components/Data Table/DataTable";
import "./LiveTelemetry.scss";
import { useLocation, useNavigate } from "react-router-dom";
import {
  dummyResponse,
  telemetryPageInfo,
} from "./Telemetry Constant/telemetryConstants";
import Header from "../../Globel Components/Header/Header";
import { liveConstantMap } from "./Telemetry Constant/telemetryUtils";
import { useSelector } from "react-redux";
import { selectLiveData, selectLiveStatus } from "../../Globel Utils/globeldataSlice";

function getTableDataFromTypeMap(liveDataMap, type) {
  let tableData = []
  if (liveDataMap, type) {
    if (liveDataMap[type]) {
      tableData = Object.values(liveDataMap[type])
    }
  }
  return tableData
}

function LiveTemetry() {
  const navigate = useNavigate()
  const liveTelemetryData = useSelector(selectLiveData)
  const liveConstant = useSelector(selectLiveStatus)
  const location = useLocation();
  console.log(location.state)

  const telemetryPage = telemetryPageInfo?.[location?.state?.childUrl];
useEffect(()=>{
  if(!location.state){
    navigate('/')
  }
},[])
  return (
    <div className="live-telemetry-main-component">
      <Header label={telemetryPage?.Heading ?? "Telemetry"} />
      <div className="tableInfoContainer">
        <div className="liveInfoConatiner">
          <div style={{ color: liveConstantMap[liveConstant].color }} className="liveStatusIcon">{liveConstantMap[liveConstant].icon}</div>
          <div className="liveStatusText">
            {liveConstantMap[liveConstant].text}
          </div>
        </div>
        <div className="countInfo">Total assets : {getTableDataFromTypeMap(liveTelemetryData, telemetryPage?.id).length}</div>
      </div>
      <div className="telemetry-table-container cardTheme">
        <DataTable
          id={telemetryPage?.id ?? ""}
          columns={telemetryPage?.columns ?? []}
          data={getTableDataFromTypeMap(liveTelemetryData, telemetryPage?.id)}
          loading={false}
        />
      </div>
    </div>
  );
}

export default LiveTemetry;
