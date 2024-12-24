import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IPost } from "../interfaces";
import { postService } from "../services";
import { PostDetails } from "../components";
import { useAppLocation } from "../hooks";

const PostDetailsPage = () => {

    const {state} = useAppLocation<{post: IPost}>();
    const [postDetails, setPostDetails] = useState<IPost>();
    const {id} = useParams();

    useEffect(() => {
        if (state?.post) {
            setPostDetails(state.post);
        } else {
           postService.getById(+id).then(({data}) => setPostDetails(data))
       }
    }, [id, state]);

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    )
};

export { PostDetailsPage };