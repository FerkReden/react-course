import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { AlbumsPage } from "./pages/AlbumsPage";
import { TodosPage } from "./pages/TodosPage";
import { CommentsPage } from "./pages/CommentsPage";
import { PostPage } from "./pages/PostsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'todos'}/>
            },
            {
                path: 'todos', element: <TodosPage/>
            },
            {
                path: 'albums', element: <AlbumsPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {
                        path: 'posts', element: <PostPage />
                    }
                ]
            },
        ]
    }
]);

export { router };