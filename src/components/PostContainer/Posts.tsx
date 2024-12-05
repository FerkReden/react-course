import { Post } from "./Post"
//@ts-ignore
const Posts = ({posts}) => {
 
    return (
        <div>
            {
            //@ts-ignore
            posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    )
}

export { Posts };