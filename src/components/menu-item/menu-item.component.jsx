/* eslint-disable react/prop-types */
import React from 'react';
import './menu-item.styles.scss';

// eslint-disable-next-line react/prop-types
function MenuItem({title, imageUrl, linkUrl, size}) {
  return (
    <div
      className={`${size} menu-item`}
    >
      <div className="background-image"
        style={{backgroundImage: `url(${imageUrl})`}}>
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <p className="subtitle">Home</p>
        </div>
      </div>
    </div>
  );
}
export default MenuItem;
