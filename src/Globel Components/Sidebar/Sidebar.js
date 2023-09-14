import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { childToParentMap, sidebarData } from "./SidebarConstant/sidebarConstant";
import btLogo  from '../Logo/btLogo.png'
import {  sidebarTileExtendedIcon, sidebarTileMinimizeIcon } from "../../Globel Utils/Icons";

const isSelectedParentTile = (selecetdParent, selecetdChild) => {
  let isSelected = false;
  if (childToParentMap[selecetdParent]?.includes(selecetdChild)) {
    isSelected = true
  }
  return isSelected
}

const CollapseMenu = ({ sidebarItem }) => {
  const location = useLocation()
  const [openState, setOpenState] = useState(false);
  let selecetdParent = location.pathname.split('/')[1]
  let selecetdChild = location.pathname.split('/')[2]
  // console.log('sidebarItem',location.pathname.split('/'))
  const toggleOpenState = () => {
    setOpenState(!openState);
  };
  return (
    <>
      <div onClick={toggleOpenState} className={`sidebarTile extendibleSidebarTile ${isSelectedParentTile(selecetdParent, selecetdChild) ? 'selectedSideBarParent' : ''}`}>

        <div className="sidebarTileText"> {sidebarItem.label}</div>
        <div className="sidebarTileIcon"> {openState ? sidebarTileMinimizeIcon : sidebarTileExtendedIcon}</div>
      </div>
      <div className={`wrapper ${openState ? "extended" : "minimized"}`}>
        {/* <ul id="list"> */}
        {sidebarItem.children.map((item, index) => {
          let url = sidebarItem.parentUrl + item.childUrl
          let state = {
            childUrl: item.childUrl
          }
          return (<Link className={`sidbardLink `} state={state} key={index} to={url}> <div className={`sidebarTile staticSidebarTile ${location.pathname === url ? 'selectedSidebarTile' : ''}`}>{item.label}</div></Link>)


        })}
        {/* </ul> */}
      </div>
    </>
  );
};

function Sidebar() {
  const location = useLocation()
  return (
    <div className="sidebar-main-conatiner">
      <div className="sideBarHeader">
      <img class="pointer" src={btLogo} alt="Bitcomm Logo" height="45px"/>
      </div>
      {/* <div className="sideBarHeader">{SIDEBAR_LOGO}</div> */}
      <div className="sidebar">
        {sidebarData.map((sidebarItem, index) => {
          if (sidebarItem.children) {
            return <CollapseMenu key={index} sidebarItem={sidebarItem} />;
          } else {
            return (
              <Link className={`sidbardLink `} key={index} to={sidebarItem.url}>
                <div className={`sidebarTile static ${location.pathname === sidebarItem.url ? 'selectedSidebarTile' : ''}`}>{sidebarItem.label}</div>
              </Link>
            );
          }
        })}
      </div>

    </div>
  );
}

export default Sidebar;
