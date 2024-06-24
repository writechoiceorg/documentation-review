import React from 'react';
import imagesJson from '@site/static/data/setup-and-administration/interfaces/interfaces.json';
import CardList from './CardList';

const IconCards = ({ data, numColumns }) => {
  return <CardList data={data || imagesJson} numColumns={numColumns} className={"icon_cards_container"} />;
};

export default IconCards;
