import React from 'react';

import './Render.css'

const Circle = props => {
        return (
                <div className="circle">{props.number}</div>
        )
    };

export default Circle;