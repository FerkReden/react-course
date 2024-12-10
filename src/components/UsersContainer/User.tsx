import { FC } from "react";

import { IUser } from "../../interfaces/userInterfaec";
import { useNavigate } from "react-router-dom";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {

    const {id, name, username, email } = user;

    const navigate = useNavigate()

    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>email: {email}</div>
            <button onClick={() => navigate('posts', {state: {userId: id}})}>Get Posts</button>
        </div>
    )
};

export { User };