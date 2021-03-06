import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items}) => {
  console.log(items)
  return(
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idex) => idex < 4)
          .map(({id, ...otherItemProps}) =>(
            <CollectionItem 
              key={id} 
              {...otherItemProps}
            />
          ))
        }
      </div>
    </div>
  )
}
export default CollectionPreview

