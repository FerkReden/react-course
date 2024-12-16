import { urls } from "../constants";
import { apiService } from "./apiService";

const userService = {
    getAll: () => apiService.get(urls.users.base),
    getById: (id: number) => apiService.get(urls.users.byId(id)),
};

export { userService };