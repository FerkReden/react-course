import { useEffect, useState } from "react";

import { IPost } from "../../interfaces";
import { postService } from "../../services";
import { Post } from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])

    return (
        <div>
            {posts.map((post) => <Post key={post.id} post={post}/>)}
        </div>
    )
};

export { Posts };