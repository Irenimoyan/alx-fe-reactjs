
const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p><strong>Age:</strong> {props.age}</p>
            <p><strong>Bio:</strong> {props.bio}</p>
        </div>
    )
}
export default UserProfile;