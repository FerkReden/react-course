import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { IPost } from "../interfaces/postInterface";
import { postService } from "../services/postsService";
import { Post } from "../components/PostsContainer/Post";

const PostPage = () => {

    const [post, setPost] = useState<IPost>();
    const { state: { postId } } = useLocation();

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data))
    }, [postId])
    return (
        <div>
            {post && <Post key={post.id} post={post}/>}
        </div>
    )
};

export { PostPage };