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


function App() {
  return (
    <Router>
      <div className="App main-app">
        {/* <Header/> */}
        <div className="main-app-container">
          <Sidebar />
          <div id={'main-app'} className="page-component">
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
