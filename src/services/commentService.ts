import { urls } from "../constants/utils";
import { apiService } from "./apiService";

const commentService = {
    getAll: () => apiService.get(urls.comments)
};

export { commentService };