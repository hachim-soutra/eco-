import React, {useState} from 'react';
// eslint-disable-next-line max-len
import PreviewCollection from '../../../components/preview-collection/preview-collection.component';
import SHOP_DATA from './shop.data';

export default function ShopPage() {
  const [collections] = useState(SHOP_DATA);
  console.log(collections);
  return (
    <div className="shop-page">
      {
        collections.map(({id, title, items}) => (
          <PreviewCollection
            key={id}
            items={items}
            title={title}
          />
        ))
      }

    </div>
  );
}
