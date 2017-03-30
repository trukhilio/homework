import React from 'react';
export let arr = [1, 5, 55, 44, 128, 74, 66, 10, -22, -14, 6, 99, 100, 70, 2];

export function List({arr=[]}){
    const listItems = arr.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}






