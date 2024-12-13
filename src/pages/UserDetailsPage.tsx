// import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";

// import { userService } from "../services/userService";
import { UserDetails } from "../components/UsersContainer/UserDetails";
// import { IUser } from "../interfaces/userIntrerface";

const UserDetailsPage = () => {

    const params = useParams();
    // const id = params.id as string;
    // const [userDetails, setUserDetails] = useState<IUser>();
    // const {state} = useLocation();
    const {data} = useLoaderData();

    // useEffect(() => {
    //     if (state?.user) {
    //         setUserDetails(state?.user)
    //     } else {
    //         userService.getById(+id).then(({data}) => setUserDetails(data));
    //     }
    // }, [id, state])

    return (
        <div>
            <UserDetails userDetails={data}/>
        </div>
    )
};

export { UserDetailsPage };