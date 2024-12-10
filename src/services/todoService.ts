import { urls } from "../constants/utils";
import { apiService } from "./apiService";

const todoService = {
    getAll: () => apiService.get(urls.todos)
};

export { todoService };