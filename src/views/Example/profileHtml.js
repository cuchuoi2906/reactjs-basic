import React from "react";

function ProfileHeader(props){
    return <div>
        <h1>{props.userName}</h1>
        <p>{props.bio}</p>
    </div>
}
function ProfileBody(props){
    return <>
        <h2>profile detail</h2>
        <ul>
            <li>{props.email}</li>
            <li>{props.phone}</li>
            <li>{props.address}</li>
        </ul>
        </>
}
function ProfileFooter(props){
    return <div>
        <button>Edit profile</button>
    </div>
}

function Profile(props){
    console.log(props);
    return <div>
        <ProfileHeader userName={props.userName} bio={props.bio} />
        <ProfileBody email={props.email} phone={props.phone} address={props.address} />
        <ProfileFooter />
    </div>
}
export default Profile;