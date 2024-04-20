import React from "react";

const PageHeader = ({h1, h4}) => {
    return (
        <div className="pageHeader">
            <h1>{h1}</h1>
            <h4>{h4}</h4>
        </div>
    )
}

export default PageHeader;