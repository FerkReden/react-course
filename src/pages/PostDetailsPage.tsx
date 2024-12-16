import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PostDetails } from "../components";
import { IPost } from "../interfaces";
import { postService } from "../services";

const PostDetailsPage = () => {

    const [post, setPost] = useState<IPost>(null);
    const {id} = useParams();

    useEffect(() => {
        postService.getById(+id).then(({data}) => setPost(data));
    }, [id])

    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    )
};

export { PostDetailsPage };