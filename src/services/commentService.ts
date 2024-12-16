import { urls } from "../constants";
import { apiService } from "./apiService";

const commentService = {
    getByPostId: (postId: number) => apiService(urls.comments.base, {params: {postId}}),
};

export { commentService };