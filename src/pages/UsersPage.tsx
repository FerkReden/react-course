import { Outlet } from "react-router-dom";

import { Users } from "../components/UsersContainer/Users";

const UsersPage = () => {

    return (
        <div style={{display: "flex"}}>
            <Users />
            <Outlet />
        </div>
    )
};

export { UsersPage };