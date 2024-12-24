import { Outlet } from "react-router-dom";

import { Posts } from "../components";

const PostPage = () => {

    return (
        <div>
            <Outlet />
            <hr />
            <Posts />
        </div>
    )
};

export { PostPage };