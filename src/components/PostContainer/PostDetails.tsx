import { FC } from "react";

import { IPost } from "../../interfaces";

interface IProps {
    postDetails: IPost
}

const PostDetails: FC<IProps> = ({postDetails}) => {

    const {id, userId, title, body} = postDetails;

    return (
        <div>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    )
};

export { PostDetails };