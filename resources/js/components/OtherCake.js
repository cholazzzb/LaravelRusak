import React from "react";
import { useSelector, useDispatch } from "react-redux";

function OtherCake() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);

    return (
        <div>
            <div> Eya - {numOfCakes}</div>
        </div>
    );
}

export default OtherCake;
