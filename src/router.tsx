import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { UsersPage } from "./pages/UsersPage";
import { UserDetailsPage } from "./pages/UserDetailsPage";
import { userService } from "./services/userService";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UsersPage/>, loader: () => userService.getAll(), children: [
                    {
                        path: ':id', element: <UserDetailsPage/>, loader: ({params:{id}}) => {
                            if (!id) {
                                throw new Error('Id is required')
                            }
                            const userId = parseInt(id, 10);
                            if (isNaN(userId)) {
                                throw new Error('Id must be a valid number')
                            }
                            return userService.getById(userId);
                        },
                    }
                ]
            },
        ]
    }
])

export { router };