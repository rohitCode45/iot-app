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
import {
  selectLiveData,
  selectLiveStatus,
} from "../../Globel Utils/globeldataSlice";
import RelayView from "./Views/RelayView";
import { useImmer } from "use-immer";
import InfoPopup from "../../Globel Components/InfoPopup/InfoPopup";

const initPopState = {
  isOpen: false,
  infodata: null,
};

function getTableDataFromTypeMap(liveDataMap, type) {
  let tableData = [];
  if (liveDataMap && type) {
    if (liveDataMap[type]) {
      tableData = Object.values(liveDataMap[type]);
    }
  }
  return tableData;
}
const CardView = ({ cardKeys, data, type }) => {
  const [cardNameFilter, setCardNameFilter] = useState("");

  return (
    <div className="telemetryCardConatiner">
      <div className="cardContainerHeader">
        <input
          placeholder={`Search ${type}`}
          className="filterInput"
          value={cardNameFilter}
          onChange={(e) => {
            setCardNameFilter(e.target.value);
          }}
        />
      </div>
      <div className="CardConatiner">
        {data.map((cardData, i) => {
          const {
            [cardKeys.labelKey]: cardLabel,
            [cardKeys.valueKey]: cardValue,
          } = cardData;
          if (cardLabel.toUpperCase().includes(cardNameFilter.toUpperCase())) {
            return (
              <div
                key={i}
                title={cardLabel + ":" + cardValue}
                style={{
                  background: cardValue.includes("OFF") ? "" : "#bff1bf",
                }}
                className="telemetryCard"
              >
                {/* // <div key={i} title={cardValue} style={{ background: cardValue.includes('OFF') ? 'red' : 'blue' }} className="telemetryCard"> */}
                <span className="cardLabel">
                  {cardLabel.length > 10
                    ? cardLabel.slice(0, 10) + "..."
                    : cardLabel}
                </span>
                {/* <span className="CardValue">{cardValue}</span> */}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

function LiveTemetry() {
  const navigate = useNavigate();
  const [infoPopup, setInfoPopup] = useImmer(initPopState);
  const liveTelemetryData = useSelector(selectLiveData);
  const liveConstant = useSelector(selectLiveStatus);
  const location = useLocation();
  const CHILD_URL =( '/'+location?.pathname?.split('/')?.pop() )?? null
  console.log('lllocation',location.pathname.split('/').pop())

  const telemetryPage = telemetryPageInfo?.[CHILD_URL];
  // const telemetryPage = telemetryPageInfo?.[location?.state?.childUrl];
  useEffect(() => {
    if (!CHILD_URL) {
    // if (!location.state) {
      navigate("/");
    }
  }, []);
  const handlerowClick = (rowData) => {
    setInfoPopup((prev) => {
      prev.isOpen = true;
      prev.infodata = rowData?.values ?? {};
    });
  };
  return (
    <div className="live-telemetry-main-component">
      {/* <Header label={telemetryPage?.Heading ?? "Telemetry"} /> */}
      <div className="tableInfoContainer">
        <div className="liveInfoConatiner">
          <div
            style={{ color: liveConstantMap[liveConstant].color }}
            className="liveStatusIcon"
          >
            {liveConstantMap[liveConstant].icon}
          </div>
          <div className="liveStatusText">
            {liveConstantMap[liveConstant].text}
          </div>
        </div>
        <div className="countInfo">
          Total assets :{" "}
          {getTableDataFromTypeMap(liveTelemetryData, telemetryPage?.id).length}
        </div>
      </div>

      <div className="telemetry-table-container cardTheme">
        {telemetryPage?.columns !== null && (
          <DataTable
            id={telemetryPage?.id ?? ""}
            columns={telemetryPage?.columns ?? []}
            data={getTableDataFromTypeMap(liveTelemetryData, telemetryPage?.id)}
            loading={false}
            onRowClick={({ event, row }) => {
              handlerowClick(row);
            }}
          />
        )}
        {telemetryPage?.columns === null &&
          telemetryPage.id === "RLY_STATUS" && (
            // <RelayView
            //   data={telemetryPage?.dummyData ?? []}
            // />
            <CardView
              cardKeys={telemetryPage.cardKeys}
              data={getTableDataFromTypeMap(
                liveTelemetryData,
                telemetryPage?.id
              )}
              // data={telemetryPage?.dummyData ?? []}
              type={telemetryPage?.id}
            />
          )}
      </div>
      {infoPopup.isOpen && (
        <InfoPopup
          isOpen={infoPopup.isOpen}
          onClose={() => setInfoPopup(initPopState)}
          cols={telemetryPage?.columns ?? []}
          infoData = {infoPopup.infodata}
        />
      )}
    </div>
  );
}

export default LiveTemetry;
