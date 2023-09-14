import React from 'react';
import './PageLoader.scss'; // Import your CSS file for styling

const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader"></div>
        {/* <p>Loading...</p> */}
      </div>
    </div>
  );
};

export default PageLoader;