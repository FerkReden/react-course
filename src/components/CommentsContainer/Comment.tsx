import { FC } from "react";

import { IComment } from "../../interfaces/commentInterface";
import { useNavigate } from "react-router-dom";

interface IProps {
    comment: IComment
}

const Comment: FC<IProps> = ({comment}) => {

    const { postId, id, name, email } = comment;

    const navigate = useNavigate();

    return (
        <div>
            <div>PostId: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <button onClick={() => navigate('posts', {state: {postId}})}>Get Post</button>
        </div>
    )
};

export { Comment };