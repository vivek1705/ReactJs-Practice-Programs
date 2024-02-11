import React from "react";
import User_child from "./User_child";

function UserProfile_parent(){
    const userdata = {
        name: 'vivek',
        age: 22,
    }
    return(
        
        <User_child {...userdata}/>
    );
}
export default UserProfile_parent;