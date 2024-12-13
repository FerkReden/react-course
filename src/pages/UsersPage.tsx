import { Outlet, useLoaderData } from "react-router-dom";
import { Users } from "../components/UsersContainer/Users";

const UsersPage = () => {

    const { data } = useLoaderData();

    
    return (
        <div>
            <h1>Users</h1>
            <Outlet />
            <hr />
            <Users users={data}/>
        </div>
    )
};

export { UsersPage };