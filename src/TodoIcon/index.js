import React from "react";
import { ReactComponent as CheckSvg } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

const iconType = {
    "check": color => (
        <CheckSvg className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
    )
};

function TodoIcon({type, color = 'gray', onClick}) {
    return (
        <span 
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconType[type](color)}
        </span>
    );
}

export { TodoIcon };