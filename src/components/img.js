import React from "react";

const Img = (props) => {
    const { dataurl } = props;
    return (
        <div>
            <img src={dataurl} />
        </div>
    )
}
export default Img