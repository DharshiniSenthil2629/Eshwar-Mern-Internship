import React from 'react';

export const Child1 = (props) => {
    return (
        <div>
            <h1>Child Component</h1>
            <p>Message from Parent: {props.msg}</p>
            <p>Message from Grandmother: {props.grandparentMsg}</p>
        </div>
    );
};
