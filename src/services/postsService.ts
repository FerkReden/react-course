import { urls } from "../constants/utils";
import { apiService } from "./apiService";

const postService = {
    getById: (id: number) => apiService.get(urls.posts.byId(id))
};

export { postService };