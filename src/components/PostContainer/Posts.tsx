import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IPost } from "../../interfaces/postInterface";
import { postService } from "../../services";
import { Post } from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    const {id} = useParams();
    const userId = id as string;

    useEffect(() => {
        postService.getByUserId(+userId).then(({data}) => setPosts(data))
    }, [userId])

    return (
        <div>
            {posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
    )
};

export { Posts };