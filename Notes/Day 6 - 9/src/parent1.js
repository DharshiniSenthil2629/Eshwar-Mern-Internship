
import React, { useState } from 'react';
import { Grandmother } from './Grandmother';
import { Child1 } from './child1';

export const Parent1 = () => {
    const [childMessage, setChildMessage] = useState("No message from Child yet");
    const [gmMessage, setGmMessage] = useState("No message from Grandmother yet");
    const parentMessage = "Hello from Parent";

    const handleDataFromChild = (message) => {
        setChildMessage(message);
    };

    const handleDataFromGrandmother = (message) => {
        setGmMessage(message);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Message from Parent: {parentMessage}</p>
            <p>Message from Child: {childMessage}</p>
            <p>Message from Grandmother: {gmMessage}</p>
            <Grandmother
                msg={parentMessage}
                dataFromGrandmother={handleDataFromGrandmother}
            />
            <Child1
                msg={parentMessage}
                dataFromChildToParent={handleDataFromChild}
            />
        </div>
    );
};
