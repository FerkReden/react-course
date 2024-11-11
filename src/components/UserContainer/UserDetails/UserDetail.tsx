//@ts-ignore
const UserDetails = ({ userDetails }) => {

    const { id, name, username, email} = userDetails;

    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>User Name: {username}</div>
            <div>Email: {email}</div>
        </div>
    )
}

export { UserDetails };