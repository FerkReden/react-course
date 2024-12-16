import { FC } from "react";

import { IComment } from "../../interfaces";

interface IProps {
    comment: IComment
}

const Comment: FC<IProps> = ({comment}) => {

    const {id, postId, email, name, body} = comment;

    return (
        <div>
            <div>Id: {id}</div>
            <div>PostId: {postId}</div>
            <div>Email: {email}</div>
            <div>Name: {name}</div>
            <div>Body: {body}</div>
        </div>
    )
};

export { Comment };