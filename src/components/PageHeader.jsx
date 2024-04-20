import React from "react";

const PageHeader = ({h1, h4, className}) => {
    return (
        <div  className={`pageHeader ${className}`}>
            <h1>{h1}</h1>
            <h4>{h4}</h4>
        </div>
    )
}

export default PageHeader;