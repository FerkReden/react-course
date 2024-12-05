//@ts-ignore
const Post = ({post}) => {

    const { id, userId, title, body } = post;
    return (
        <div>
            <div>Id: {id}</div>
            <div>UserID: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    )
}

export { Post };