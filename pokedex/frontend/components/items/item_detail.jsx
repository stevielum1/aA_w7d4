import React from 'react';

const ItemDetail = ({ item }) => {
 return (
   <div className="item-detail">
     <div>{item.name}</div>
     <div>Happiness: {item.happiness}</div>
     <div>Price: ${item.price}</div>
   </div>
 );
};

export default ItemDetail;
