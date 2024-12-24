import { createBrowserRouter, Navigate } from "react-router-dom";

import { PostDetailsPage, PostPage, UserDetailsPage, UserPage } from "./pages";
import { MainLayout } from "./layouts";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout />, children: [
            {
                index: true, element: <Navigate to={'/users'}/>
            },
            {
                path: '/users', element: <UserPage />, children: [
                    {
                        path: '/users/:id', element: <UserDetailsPage />
                    }
                ]
            },
            {
                path: '/posts', element: <PostPage />, children: [
                    {
                        path: '/posts/:id', element: <PostDetailsPage />
                    }
                ]
            }
        ]
    }
])

export { router }