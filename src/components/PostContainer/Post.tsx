import { FC } from "react";
import { IPost } from "../../interfaces";
import { useNavigate } from "react-router-dom";


interface IProps {
    post: IPost
}

const Post: FC<IProps> = ({post}) => {

    const {id, title} = post;
    const navigate = useNavigate();

    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <button onClick={() => navigate(`/posts/${id}`)}>Get Details</button>
        </div>
    )
};

export { Post };