import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { IPost } from "../../interfaces/postInterface";
import { postService } from "../../services/postsService";
import { Post } from "./Post";

const Posts = () => {

    const [post, setPost] = useState<IPost>(null);
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

export { Posts };