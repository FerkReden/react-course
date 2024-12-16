import { FC } from "react";
import { IUser } from "../../interfaces";
import { useNavigate } from "react-router-dom";


interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {

    const {id, name} = user;
    const navigate = useNavigate();

    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <button onClick={() => navigate(`/users/${id}`)}>Get Details</button>
        </div>
    )
};

export { User };