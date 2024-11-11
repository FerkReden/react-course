//@ts-ignore
const Post = ({post, getCurrentPost}) => {

    const { userId, id, title, body } = post;

    return (
        <div>
            <div>UserId: {userId}</div>
            <div>ID: {id}</div>
            <div>Titel: {title}</div>
            <div>Body: {body}</div>
            <button onClick={() => getCurrentPost(post)}>Details</button>
        </div>
    )
}
export { Post };