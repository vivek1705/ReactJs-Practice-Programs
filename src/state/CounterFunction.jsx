import React, { useState } from "react";

function CounterFunction() {
    // Using the useState hook to create a state variable 'count' with an initial value of 0
    const [count, setCount] = useState(0);

    // Function to increment the count
    const incrementFunction = () => {
        setCount(count + 1);
    };

    // Function to decrement the count
    const decrementFunction = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div>
            <h2>Function State Example</h2>
            <p>Count: {count}</p>
            <button onClick={incrementFunction}>Increment</button>
            <button onClick={decrementFunction}>Decrement</button>
        </div>
    );
}

export default CounterFunction;
