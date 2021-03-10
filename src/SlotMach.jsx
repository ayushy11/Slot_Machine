import React from 'react';

const SlotMach = (props) => {
    // let x = '1';
    // let y = '1';
    // let z = '1';

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    // Object Destructuring
     
    let {x,y,z} = props;
    
    if (x == y && y == z) {
        return (
            <>
                <div className="slot_inner">
                    <h1> {x}{y}{z} </h1>
                    <h1> : Matching. </h1>
                    <hr />
                </div>
            </>);
    }
    else {
        return (
            <>
                <div className="slot_inner">
                    <h1> {x}{y}{z} </h1>
                    <h1> : Not Matching. </h1>
                    <hr />
                </div>
            </>);
    }
}

export default SlotMach;