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
const CardView = ({ cardKeys, data }) => {
  const [cardNameFilter, setCardNameFilter] = useState('')

  return (
    <div className="telemetryCardConatiner">
      <div className="cardContainerHeader">

        <input placeholder={`Search RLY_STATUS`} className='filterInput' value={cardNameFilter} onChange={(e) => { setCardNameFilter(e.target.value) }} />
      </div>
      <div className="CardConatiner">
        {data.map((cardData, i) => {
          const { [cardKeys.labelKey]: cardLabel, [cardKeys.valueKey]: cardValue } = cardData
          if (cardLabel.toUpperCase().includes(cardNameFilter.toUpperCase())) {
            return (
              <div key={i} title={cardValue} style={{ background: cardValue.includes('ON') ? '#bff1bf' : '' }} className="telemetryCard">
                <span className="cardLabel">{cardLabel}</span>
                {/* <span className="CardValue">{cardValue}</span> */}
              </div>
            )
          } else {
            return <span></span>
          }

        })}


      </div>
    </div>

  )
}

function LiveTemetry() {
  const navigate = useNavigate()
  const liveTelemetryData = useSelector(selectLiveData)
  const liveConstant = useSelector(selectLiveStatus)
  const location = useLocation();
  console.log(location.state)

  const telemetryPage = telemetryPageInfo?.[location?.state?.childUrl];
  useEffect(() => {
    if (!location.state) {
      navigate('/')
    }
  }, [])
  return (
    <div className="live-telemetry-main-component">
      {/* <Header label={telemetryPage?.Heading ?? "Telemetry"} /> */}
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
        {
          telemetryPage.columns !== null && (
            <DataTable
              id={telemetryPage?.id ?? ""}
              columns={telemetryPage?.columns ?? []}
              data={telemetryPage?.dummyData ?? []}
              // data={getTableDataFromTypeMap(liveTelemetryData, telemetryPage?.id)}
              loading={false}
            />
          )
        }
        {
          telemetryPage.columns === null && (
            <CardView
              cardKeys={telemetryPage.cardKeys}
              // data={getTableDataFromTypeMap(liveTelemetryData, telemetryPage?.id)}
              data={telemetryPage?.dummyData ?? []}
            />
          )
        }
      </div>


    </div>
  );
}

export default LiveTemetry;
