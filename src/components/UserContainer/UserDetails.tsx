import { FC } from "react";

import { IUser } from "../../interfaces";
import { useNavigate } from "react-router-dom";

interface IProps {
    userDetails: IUser
}

const UserDetails: FC<IProps> = ({userDetails}) => {

    const {id, name, username, email, phone, website} = userDetails;

    const navigate = useNavigate();

    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
            <div>Website: {website}</div>
            <button onClick={() => navigate('posts')}>Get Posts</button>
        </div>
    )
};

export { UserDetails };