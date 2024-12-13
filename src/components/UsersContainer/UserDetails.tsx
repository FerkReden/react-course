import { FC } from "react";

import { IUser } from "../../interfaces/userIntrerface";

interface IProps {
    userDetails: IUser
}

const UserDetails: FC<IProps> = ({userDetails}) => {

    const { id, name, username, email } = userDetails;

    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
        </div>
    )
};

export { UserDetails };