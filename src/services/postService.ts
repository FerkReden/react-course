import { urls } from "../constant/utils";
import { apiService } from "./apiService";

const postService = {
    getAll: () => apiService.get(urls.posts.base),
    //@ts-ignore
    create: (data) => apiService.post(urls.posts.base, data),
    //@ts-ignore
    getById: (id) => apiService.get(urls.posts.byId(id))
}

export { postService };