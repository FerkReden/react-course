import { urls } from "../constants/urls";
import { apiService } from "./apiService";

const userService = {
    getAll: () => apiService.get(urls.users.base),
    getById: (id: number) => apiService.get(urls.users.byId(id)),
    getPostsById: (userId: number) => apiService.get(urls.users.getPostsById(userId))
}

export { userService };