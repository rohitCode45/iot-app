import logo from "./logo.svg";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import Header from "./Globel Components/Header/Header";
import Sidebar from "./Globel Components/Sidebar/Sidebar";
import Yardview from "./Components/Yardview/Yardview";
import LiveTemetry from "./Components/Live Telemetry/LiveTemetry";
import NotFound from "./Globel Components/Not Found/NotFound";
import { useEffect, useRef } from "react";
import { WebSocketUrl, WebSocketUrl_fds } from "./Globel Utils/Endpoints";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLiveData,
  selectLiveStatus,
  setLiveData,
  setLiveFdsData,
  setLiveStatus,
} from "./Globel Utils/globeldataSlice";
import { showSnackbar } from "./Globel Components/Snackbar/SnackBar";
import PageLoader from "./Globel Components/Page Loader/PageLoader";
import LiveTelemetryFds from "./Components/LiveTelemetryFds/LiveTelemetryFds";
import { fdsMock, fiuMock } from "./Globel Utils/globelConstants";

const storeWebMSG =[]

const getPacketFromMsgDetail = (gearName, gearType, msgType, msgDetail) => {
  let _packet ={}
  switch (gearType) {
    case "FDS_TRKSEC": {
      _packet = {
        ...msgDetail,
        [["elementStatus", msgType.split("_")[1]].join("_")]:
          msgDetail.elementStatus,
      };
      break;
    }
    case "FDS_CNTHEAD": {
      const splittedMsgType = msgType.split('_')
      const packetNum = splittedMsgType[1];
      const sensorNum = splittedMsgType[2];
      const {elementStatus, raiseTime,sendTime,...rest } = msgDetail
      _packet = {
        raiseTime,
        sendTime,
        elementStatus,
        [["elementStatus", packetNum].join("_")]:
          msgDetail.elementStatus,
      };
      if(sensorNum){
        Object.entries(rest).forEach(([key,val])=>{
        _packet[[key,sensorNum].join("_")] = val
        })
      }else{
        _packet = {
          ..._packet,
          ...rest
        }
      }
      break;
    }
    default:
    // code block
  }
  return _packet
};

function App() {
  const webSocketRef = useRef();
  const fdsWebSocketRef = useRef();
  const liveDataRef = useRef({});
  const fdsdataRef = useRef({});
  const dispatch = useDispatch();
  const liveConstant = useSelector(selectLiveStatus);

  useEffect(() => {
    if (!webSocketRef.current) {
      createWebSocketConnection();
    }
    if (!fdsWebSocketRef.current) {
      createFdsWebSocket();
    }
    return () => {
      if (webSocketRef.current) {
        webSocketRef.current.close();
      }
      if (fdsWebSocketRef.current) {
        fdsWebSocketRef.current.close();
      }
    };
  }, []);

  function fdsWebSocketMsfParsing(webSocketMessage) {
    const { gearName, gearType, msgType, fdsDetail, msgDetail } =
      webSocketMessage;
    let _packet = getPacketFromMsgDetail(
      gearName,
      gearType,
      msgType,
      msgDetail
    );

    if (fdsdataRef.current[gearType]) {
      if (fdsdataRef.current[gearType][gearName]) {
        fdsdataRef.current = {
          ...fdsdataRef.current,
          [gearType]: {
            ...fdsdataRef.current[gearType],
            [gearName]: {
              ...fdsdataRef.current[gearType][gearName],
              gearName,
              gearType,
              fdsDetail,
              ..._packet,
            },
          },
        };
      } else {
        fdsdataRef.current = {
          ...fdsdataRef.current,
          [gearType]: {
            ...fdsdataRef.current[gearType],
            [gearName]: {
              gearName,
              gearType,
              fdsDetail,
              ..._packet,
            },
          },
        };
      }
    } else {
      fdsdataRef.current = {
        ...fdsdataRef.current,
        [gearType]: {
          [gearName]: { gearName, gearType, fdsDetail, ..._packet },
        },
      };
    }

    dispatch(setLiveFdsData(fdsdataRef.current));
  }

  function fiuWebsocketMsgParsing(webSocketMessage) {
    const isInitialData = Array.isArray(webSocketMessage);
    if (isInitialData) {
      webSocketMessage.forEach((msgPacket) => {
        const { name, type } = msgPacket;
        if (liveDataRef.current[type]) {
          liveDataRef.current = {
            ...liveDataRef.current,
            [type]: { ...liveDataRef.current[type], [name]: msgPacket },
          };
        } else {
          liveDataRef.current = {
            ...liveDataRef.current,
            [type]: { [name]: msgPacket },
          };
        }
      });
      dispatch(setLiveStatus(2));
    } else {
      const { name, type } = webSocketMessage;
      if (liveDataRef.current[type]) {
        liveDataRef.current = {
          ...liveDataRef.current,
          [type]: { ...liveDataRef.current[type], [name]: webSocketMessage },
        };
      }
    }
    dispatch(setLiveData(liveDataRef.current));
  }

  const createFdsWebSocket = () => {
    fdsWebSocketRef.current = new WebSocket(WebSocketUrl_fds);
    fdsWebSocketRef.current.addEventListener("open", (e) => {
    });
    fdsWebSocketRef.current.addEventListener("message", (e) => {
      const webSocketMessage = JSON.parse(e.data);
      storeWebMSG.push(webSocketMessage)
      fdsWebSocketMsfParsing(webSocketMessage);
    });
    fdsWebSocketRef.current.addEventListener("error", (e) => {
      const dummyData = [...fdsMock];
      dummyData.forEach((a) => {
        fdsWebSocketMsfParsing(a);
      });
    });
  };

  const createWebSocketConnection = () => {
    webSocketRef.current = new WebSocket(WebSocketUrl);
    webSocketRef.current.addEventListener("open", (e) => {
      showSnackbar("success", "websocket connected");
    });
    webSocketRef.current.addEventListener("message", (e) => {
      const webSocketMessage = JSON.parse(e.data);
      fiuWebsocketMsgParsing(webSocketMessage);
    });
    webSocketRef.current.addEventListener("error", (e) => {
      dispatch(setLiveStatus(3));
      showSnackbar("error", "Failed to connect websocket");
    });
  };
  return (
    <Router>
      <div id={"main-page-component"} className="App main-app">
        <Header label="label" />
        {liveConstant === 1 && <PageLoader />}
        <div className="main-app-container">
          <Sidebar />
          {liveConstant !== 1 && (
            <div className="page-component">
              <Routes>
                <Route path="/" element={<Outlet />}>
                  <Route index element={<Yardview />} />
                  <Route path={"yardview"} element={<Yardview />} />
                  <Route
                    path="live-telemetry-fiu/:id"
                    element={<LiveTemetry />}
                  />
                  <Route
                    path="live-telemetry-fds/:id"
                    element={<LiveTelemetryFds />}
                  />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
