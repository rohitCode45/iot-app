import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import "./Sidebar.scss";
import {
  childToParentMap,
  sidebarData,
} from "./SidebarConstant/sidebarConstant";

import {
  sidebarTileExtendedIcon,
  sidebarTileMinimizeIcon,
} from "../../Globel Utils/Icons";

const isSelectedParentTile = (selecetdParent, selecetdChild) => {
  let isSelected = false;
  if (childToParentMap[selecetdParent]?.includes(selecetdChild)) {
    isSelected = true;
  }
  return isSelected;
};

const CollapseMenu = ({ sidebarItem }) => {
  const location = useLocation();
  const [openState, setOpenState] = useState(false);
  let selecetdParent = location.pathname.split("/")[1];
  let selecetdChild = location.pathname.split("/")[2];
  // console.log('sidebarItem',location.pathname.split('/'))
  const toggleOpenState = () => {
    setOpenState(!openState);
  };
  return (
    <>
      <div
        onClick={toggleOpenState}
        className={`sidebarTile extendibleSidebarTile ${isSelectedParentTile(selecetdParent, selecetdChild)
          ? "selectedSideBarParent"
          : ""
          }`}
      >

        <div className="sidebarTileTextAndIcon">{sidebarItem.icon} {sidebarItem.label}</div>
        <div className="sidebarTileIcon">
          {" "}
          {openState ? sidebarTileMinimizeIcon : sidebarTileExtendedIcon}
        </div>
      </div>
      <div className={`wrapper ${openState ? "extended" : "minimized"}`}>
        {/* <ul id="list"> */}
        {sidebarItem.children.map((item, index) => {
          let url = sidebarItem.parentUrl + item.childUrl;
          let state = {
            childUrl: item.childUrl,
          };
          return (
            <Link className={`sidbardLink `} state={state} key={index} to={url}>
              {" "}
              <div
                className={`sidebarTile staticSidebarTile ${location.pathname === url ? "selectedSidebarTile" : ""
                  }`}
              >
                {item.label}
              </div>
            </Link>
          );
        })}
        {/* </ul> */}
      </div>
    </>
  );
};

function Sidebar() {
  const location = useLocation();
  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const toggleSideBar = () => {
    setSidebarMinimized(!sidebarMinimized);
  };
  return (
    <div className={`sidebar-toogle-icon-container`}>
      <div
        className={`sidebar-main-conatiner ${sidebarMinimized ? "sidebarMinimized" : ""
          }`}
      >
        {/* <div className="sideBarHeader">
          <img class="pointer" src={btLogo} alt="Bitcomm Logo" height="45px" />
        </div> */}
        {/* <div className="sideBarHeader">{SIDEBAR_LOGO}</div> */}
        <div className="sidebar">
          {sidebarData.map((sidebarItem, index) => {
            if (sidebarItem.children) {
              return <CollapseMenu key={index} sidebarItem={sidebarItem} />;
            } else {
              return (
                <Link
                  className={`sidbardLink `}
                  key={index}
                  to={sidebarItem.url}
                >
                  <div
                    className={`sidebarTile static ${location.pathname === sidebarItem.url
                      ? "selectedSidebarTile"
                      : ""
                      }`}
                  >
                    {sidebarItem.icon} {sidebarItem.label}
                  </div>

                </Link>
              );
            }
          })}
        </div>
      </div>
      <div className="sidebar-toggle-icon-container">
        <span
          onClick={() => {
            toggleSideBar();
          }}
          title={sidebarMinimized ? "Expand Sidebar" : "Minimize sidebar"}
          className="sidebar-toggle-icon"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 6 3 12 9 18V6ZM15 18 21 12 15 6V18Z"></path>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
