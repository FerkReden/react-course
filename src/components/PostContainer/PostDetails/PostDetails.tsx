//@ts-ignore
const PostDetails = ({ postDetails }) => {

    const { userId, id, title, body } = postDetails;

    return (
        <div>
            <div>UserId: {userId}</div>
            <div>ID: {id}</div>
            <div>Titel: {title}</div>
            <div>Body: {body}</div>
        </div>
    )
}
export { PostDetails }