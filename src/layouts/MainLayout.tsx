import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => {navigate(-1)}}>Prev</button>
            <button onClick={() => {navigate(1)}}>Next</button>
            <Outlet />
        </div>
    )
};

export { MainLayout };