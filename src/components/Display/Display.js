import React from 'react';

const Display = (props) => {
    return (
        <div style={{ border: '2px solid maroon', margin: '15px' }}>
            <h2>Name: {props.name}</h2>
            <p>So far steps today: {props.steps}</p>
        </div>
    );
};

export default Display;