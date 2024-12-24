import { Outlet } from "react-router-dom";
import { Users } from "../components";

const UserPage = () => {

    return (
        <div>
            <Outlet />
            <hr />
            <Users />
        </div>
    )
};

export { UserPage };