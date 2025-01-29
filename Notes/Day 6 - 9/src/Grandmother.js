import React, { useState } from 'react';

export const Grandmother = (props) => {
    const [gmMsg, setGmMsg] = useState("Message from Grandmother");

    const sendMsgToParent = () => {
        props.dataFromGrandmother(gmMsg); // Send the message to the parent
    };

    return (
        <div>
            <h1>Grandmother Component</h1>
            <p>Message from Parent: {props.msg}</p>
            <button onClick={sendMsgToParent}>Send Message to Parent</button>
        </div>
    );
};
