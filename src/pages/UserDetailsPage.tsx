import { UserDetails } from "../components";
import { useEffect, useState } from "react";
import { IUser } from "../interfaces";
import { userService } from "../services";
import { useAppLocation } from "../hooks";
import { useParams } from "react-router-dom";

const UserDetailsPage = () => {

    const {state} = useAppLocation<{user: IUser}>();
    const [userDetails, setUserDetails] = useState<IUser>(null)
    const {id} = useParams();


    useEffect(() => {
        if (state?.user) {
            setUserDetails(state.user)
        } else {
            userService.getById(+id).then(({data}) => setUserDetails(data))
        }
    }, [id, state]);


    return ( 
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
        </div>
    )
};

export { UserDetailsPage };