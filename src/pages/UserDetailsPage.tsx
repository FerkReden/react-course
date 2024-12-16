import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import { UserDetails } from "../components";
import { userService } from "../services";
import { IUser } from "../interfaces";

const UserDetailsPage = () => {

    const [userDetails, setUserDetails] = useState<IUser>();
    const {id} = useParams();

    useEffect(() => {
        userService.getById(+id).then(({data}) => setUserDetails(data))
    }, [id]);

    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
            <hr />
            <Outlet />
        </div>
    )
};

export { UserDetailsPage };