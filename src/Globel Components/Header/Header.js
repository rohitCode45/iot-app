import React from "react";
import './Header.scss'
import btLogo from '../Logo/btLogo.png'
import { useLocation } from "react-router-dom";
import { ASSET_TYPE_LABEL_MAP } from "../Sidebar/SidebarConstant/sidebarConstant";



function Header({ label }) {
  const location = useLocation()
  const PAGE_URL = location.pathname
  const getHeaderLabel = (pageUrl) => {
    let headerLable = ''
    const splittedUrl = pageUrl.split('/')
    let _splittedUrl = splittedUrl.splice(1)
    if(_splittedUrl.length>1){
      const parent = _splittedUrl[0].split('-').pop()
      const child_gear_type = _splittedUrl[1]
      console.log('_splittedUrl', child_gear_type,parent)
      headerLable = [parent.toUpperCase(), ASSET_TYPE_LABEL_MAP[child_gear_type]].join(' - ')
    }else{
      headerLable =  _splittedUrl[0]?.toUpperCase() ??''
    }

    return headerLable
  }
  return (
    <div className="app-header">
      <div className="header-logo">
        <img class="pointer" src={btLogo} alt="Bitcomm Logo" height="45px" />
      </div>
      <div className="header-label">{getHeaderLabel(PAGE_URL)}</div>
    </div>
  );
}

export default Header;
