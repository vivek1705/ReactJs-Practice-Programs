import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
    const data = "hello, i am from Parent Component.";

    return(
        <ChildComponent  message={data}/>
    );
    
}
export default ParentComponent;