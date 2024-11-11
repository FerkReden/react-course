//@ts-ignore
const User = ({user, getCurrentUser}) => {

    const { id, name } = user;

    return (
        <div>
            <div>
                Id: {id}
            </div>
            <div>
                Name: {name}
            </div>    
            <button onClick={() => getCurrentUser(user)}>Details</button>
        </div>  
    )
}
export { User };