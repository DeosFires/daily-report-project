import React from "react";
import './CeldaList.css'

const CeldaList = ({ children }) => {
    const childrenArray = React.Children.toArray(children);

    const rows = [];

    for (let index = 0; index < childrenArray.length; index += 5) {
        rows.push(childrenArray.slice(index, index + 5));
    }

    return (
        <div className="column-layout">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((child, colIndex) => (
                        <div key={colIndex} className="column">
                            {child}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );

};

export { CeldaList };