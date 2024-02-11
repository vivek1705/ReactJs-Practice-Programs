import React from "react";

function User_child(props){

    return(
        <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        </div>
    )
}
export default User_child;