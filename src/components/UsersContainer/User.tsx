import { FC } from "react";

import { IUser } from "../../interfaces/userIntrerface";
import { useNavigate } from "react-router-dom";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {

    const { id, name } = user;

    const navigate = useNavigate()

    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <button onClick={() => navigate(id.toString(), {state: {user} })}>Get Details</button>
        </div>
    )
};

export { User };