import React from 'react';
import ListData from '../data/todo_items';

export default props => {
    const listElements = ListData.map((item, index) => <li key={index} className="collection-item">{item.title}</li> );
    return (
        <ul className="collection">
            {listElements}
        </ul>
    );
}