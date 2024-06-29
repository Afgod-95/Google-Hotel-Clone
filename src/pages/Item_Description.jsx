import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Item_Description = () => {
    const { id } = useParams();
    const location = useLocation();
    const { item } = location.state || {}; 

    if (!item) {
        return <div>No item found for ID: {id}</div>
    }

    console.log(item);

    return (
        <div>
            <h1>Item Description</h1>
            <p>ID: {id}</p>
            <p>{item.description}</p>
        </div>
    );
};

export default Item_Description;
