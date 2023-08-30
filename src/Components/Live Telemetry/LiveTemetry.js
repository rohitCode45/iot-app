import React, { useEffect, useRef, useState } from "react";
import DataTable from "../../Globel Components/Data Table/DataTable";
import "./LiveTelemetry.scss";
import { useLocation } from "react-router-dom";
import { dummyResponse, telemetryPageInfo } from "./Telemetry Constant/telemetryConstants";
import { WebSocketUrl } from "../../Globel Utils/Endpoints";
import { showSnackbar } from "../../Globel Components/Snackbar/SnackBar";


function LiveTemetry() {
  const telemetryDataRef = useRef({});
  // const currentTypeRef = useRef(null);
  const webSocketRef = useRef(null);
  const [liveTelemetryData, setLiveTelemetryData] = useState([]);
  const [tableLoader, setTableLoader] = useState(false)
  const location = useLocation();
  const telemetryPage = telemetryPageInfo?.[location.state.childUrl];

  useEffect(() => {
    if (!webSocketRef.current) {
      createWebSocketConnection()
    }
    return () => {
      if (webSocketRef.current) {
        webSocketRef.current.close()
      }
    };
  }, []);
  const createWebSocketConnection = () => {
    setTableLoader(true)
    webSocketRef.current = new WebSocket(WebSocketUrl)

    webSocketRef.current.addEventListener('open', (e) => {
      console.log('connected to websocket connecton')
      const msg = dummyResponse
      setTableLoader(false)
    })

    webSocketRef.current.addEventListener('message', (e) => {
      const webSocketMessage = JSON.parse(e.data)

    })
    webSocketRef.current.addEventListener('error', (e) => {
      setTableLoader(false)
    })
  }
  const notify = () => {
    showSnackbar()
  }
  return (
    <div className="live-telemetry-main-component">
      <div onClick={() => notify()} className="telemtry-container-header">
        {telemetryPage.Heading ?? "Telemetry"}
      </div>
      <div className="telemetry-table-container cardTheme">
        <DataTable
          id={telemetryPage?.id ?? ""}
          columns={telemetryPage.columns}
          data={liveTelemetryData?.[telemetryPage?.id] ?? []}
          loading={tableLoader}
        />
      </div>
    </div>
  );
}

export default LiveTemetry;
