
const UserProfile = (prop) => {
    return (
        <div>
            <h2>{prop.name}</h2>
            <p><strong>Age:</strong> {prop.age}</p>
            <p><strong>Bio:</strong> {prop.bio}</p>
        </div>
    )
}
export default UserProfile;