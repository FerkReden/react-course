import { urls } from "../constants/urls";
import { apiService } from "./apiService";

const postService = {
    getAll: () => apiService.get(urls.posts.base),
    getById: (id: number) => apiService.get(urls.posts.ById(id)),
};

export { postService };