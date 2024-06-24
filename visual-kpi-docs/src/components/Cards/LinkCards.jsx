import React from 'react';
import CardList from './CardList';

const LinkCards = ({ data, numColumns, className }) => {
  return <CardList data={data} numColumns={numColumns} className={`link_cards_container ${className}`} />;
};

export default LinkCards;
