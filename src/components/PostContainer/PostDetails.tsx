import { FC } from "react";

import { IPost } from "../../interfaces";
import { Comments } from "../CommentsContainer";

interface IProps {
    post: IPost
}

const PostDetails: FC<IProps> = ({post}) => {

    const {id, userId, title, body} = post;

    return (
        <div>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <hr />
            <Comments postId={id}/>
        </div>
    )
};

export { PostDetails };