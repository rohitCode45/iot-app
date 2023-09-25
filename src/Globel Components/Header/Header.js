import React from "react";
import './Header.scss'
import btLogo from '../Logo/btLogo.png'
import { useLocation } from "react-router-dom";



function Header({ label }) {
  const location = useLocation()
  const PAGE_URL = location.pathname
  const getHeaderLabel = (pageUrl) => {
    let headerLable = ''
    const splittedUrl = pageUrl.split('/')
    let _splittedUrl = splittedUrl.splice(1)
    headerLable = _splittedUrl.join('>')
    return headerLable.toUpperCase()
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
