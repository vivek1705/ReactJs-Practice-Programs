// ParentClass.jsx
import React from "react";
import ChildClass from "./ChildClass";

class ParentClass extends React.Component {
    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                {/* Passing props to ChildClass */}
                <ChildClass name="John" id={123} />
            </div>
        );
    }
}

export default ParentClass;
