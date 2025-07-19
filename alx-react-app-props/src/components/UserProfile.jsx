import React, { useContext } from "react";
import {UserContext} from "../UserContext";
function UserProfile() {
    const userData = useContext(UserContext);
    return (
        <div style={{border:'1px solid gray', paddding:'10px', margin:'10px'}}>
            <h2 style={{color:'blue'}}>{props.name}</h2>
            <p>Age: <span style={{fontWeight:'bold'} }> {props.age}</span></p>
            <p>Bio: <span style={{fontWeight:'bold'}}>{props.bio}</span> </p>
        </div>
    )
}
export default UserProfile;