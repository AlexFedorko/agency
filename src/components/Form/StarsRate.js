import React, {memo, useState} from 'react';
import {createArray} from "../../Helper";


function StarsRate (props) {
    const {amount} = props;
    const [current, setCurrent] = useState(0);


    return (
        <div className='rating'>
            <div className='stars'>
                {createArray(amount).map((_, i) => (
                <span className= {( i+1 === current ? 'active ' : '')+ 'star'} key={i} onMouseOver={()=>{
                    setCurrent(i+1);
                }}>&#9733;</span>
            ))}
            </div>
            {current} / {amount}
        </div>
    )
}


// function StarsRate (props) {
//     const {amount} = props;
//
//     const children = [];
//     for(let i=0; i<amount; i++){
//         children.push(<span className='star' key={i}>&#9733;</span>)
//         //children.push(React.createElement('span', {className: 'star'}, '&#9733;'))
//     }
//
//
//
//     return (
//         <div className='rating'>
//             {children}
//         </div>
//     )
// }

export default memo(StarsRate);

