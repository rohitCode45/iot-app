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
import { WebSocketUrl } from "./Globel Utils/Endpoints";
import { useDispatch, useSelector } from "react-redux";
import { selectLiveData, setLiveData, setLiveStatus } from "./Globel Utils/globeldataSlice";
import { showSnackbar } from "./Globel Components/Snackbar/SnackBar";

function App() {
  const webSocketRef = useRef()
  const liveDataRef = useRef({})
  const dispatch = useDispatch()

  useEffect(() => {
    if (!webSocketRef.current) {
      createWebSocketConnection();
    }
    return () => {
      if (webSocketRef.current) {
        webSocketRef.current.close();
      }
    };
  }, []);
  const createWebSocketConnection = () => {
    webSocketRef.current = new WebSocket(WebSocketUrl);
    webSocketRef.current.addEventListener("open", (e) => {
      dispatch(setLiveStatus(2))
      showSnackbar('success', 'websocket connected')
    });
    webSocketRef.current.addEventListener("message", (e) => {
      const webSocketMessage = JSON.parse(e.data);
      const { name, type } = webSocketMessage;
      if (liveDataRef.current[type]) {
        liveDataRef.current = {
          ...liveDataRef.current,
          [type]: { ...liveDataRef.current[type], [name]: webSocketMessage }
        }
      } else {
        liveDataRef.current = {
          ...liveDataRef.current,
          [type]: { [name]: webSocketMessage }
        }
      }
      dispatch(setLiveData(liveDataRef.current))
    });
    webSocketRef.current.addEventListener("error", (e) => {
      dispatch(setLiveStatus(3))
      showSnackbar('error', 'Failed to connect websocket')
    });
  };
  return (
    <Router>
      <div className="App main-app">
        {/* <Header/> */}
        <div className="main-app-container">
          <Sidebar />
          <div id={'main-page-component'} className="page-component">
            <Routes>
              <Route path="/" element={<Outlet />}>

                <Route index element={<Yardview />} />
                <Route path={'yardview'} element={<Yardview />} />
                <Route path="live-telemetry/:id" element={<LiveTemetry />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;
