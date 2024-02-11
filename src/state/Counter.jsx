import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        // Initializing state
        this.state = {
            count: 0
        };
    }

    // Function to increment the count
    incrementCount = () => {
        // Updating state using setState
        this.setState({
            count: this.state.count + 1
        });
    };

    // Function to decrement the count
    decrementCount = () => {
        this.setState((prevState) => ({
            // Functional state update for dependent on previous state
            count: prevState.count - 1
        }));
    };

    render() {
        return (
            <div className='counter'>
            <h2>Class State Example</h2>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.decrementCount}>Decrement</button>
            </div>
        );
    }
}

export default Counter;
