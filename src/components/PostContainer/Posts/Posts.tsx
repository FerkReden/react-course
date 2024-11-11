import { useEffect, useState } from 'react';
import { postService } from '../../../services/postService';
import { Post } from '../Post/Post';
import { PostDetails } from '../PostDetails/PostDetails';
import css from './Posts.module.css'

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    //@ts-ignore
    const getCurrentPost = (post) => {
        setPostDetails(post)
    }

    return (
        <div className={css.Posts}>
            <div>
            {posts.length && posts.map(
                //@ts-ignore
                post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost} />)}
            </div>
                <hr />
                {postDetails && <PostDetails postDetails={postDetails} />}
        </div>
    )
}

export { Posts }