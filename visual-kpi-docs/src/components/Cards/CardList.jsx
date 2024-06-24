import React from 'react';
import Card from './Card';

const CardList = ({ data, className, numColumns }) => {

  const setGridColumns = () => {
    if (numColumns) {
      return `${className} grid-columns-${numColumns}`;
    } else {
      return `${className} grid-columns-auto`;
    }
  };
  
  return (
    <div className={setGridColumns()} >
      {data.map((item, index) => (
        <Card 
          key={index}
          logo={item.logo}
          name={item.name}
          description={item.description}
          linkTo={item.linkTo}
          externalLink={item.externalLink}
        />
      ))}
    </div>
  );
};

export default CardList;