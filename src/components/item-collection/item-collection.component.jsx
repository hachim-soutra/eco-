import React from 'react';
import './item-collection.styles.scss';
// eslint-disable-next-line react/prop-types
export default function ItemCollection({id, name, imageUrl, price}) {
  return (
    <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
      </div>
      <div className="collection-footer" >
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

    </div>
  );
}
