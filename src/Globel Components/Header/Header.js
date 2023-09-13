import React from "react";
import './Header.scss'

function Header({ label }) {
  return (
    <div className="app-header">
      {label}
    </div>
  );
}

export default Header;
