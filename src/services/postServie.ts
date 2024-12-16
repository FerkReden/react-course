import { urls } from "../constants";
import { apiService } from "./apiService";

const postService = {
    getByUserId: (userId: number) => apiService.get(urls.posts.base, {params: {userId}}),
    getById: (id: number) => apiService.get(urls.posts.byId(id)),
};

export { postService };