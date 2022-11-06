/* eslint-disable react/prop-types */
import React from 'react';
import ItemCollection from '../item-collection/item-collection.component';
import './preview-collection.styles.scss';
export default function PreviewCollection({title, items}) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.slice(0, 4).map((item) => (
          <ItemCollection key={item.id} {...item} />
        ))}
      </div>

    </div>
  );
}
