// ChildClass.jsx
import React from "react";

class ChildClass extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello {this.props.name}</h2>
                <h3>ID is {this.props.id}</h3>
            </div>
        );
    }
}

export default ChildClass;
