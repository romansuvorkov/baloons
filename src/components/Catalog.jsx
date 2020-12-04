import React, {useState} from 'react';
import CatalogCard from './CatalogCard';
import BigImage from './BigImage';

function Catalog(props) {

  const [activeImage, setActiveImage] = useState('');

    const items = props.itemsData;
    return (
      <div className="catalog_wrapper">
        <h2 className="header2">{props.header}</h2>
        <div className="catalog_list_wrapper">
          {items.map(o => (
            <CatalogCard key={o.img} descr={o} setter={setActiveImage}/>
          ))}
          <BigImage setter={setActiveImage} img={activeImage} />          
        </div>

      </div>
    );
  }
  
  export default Catalog;