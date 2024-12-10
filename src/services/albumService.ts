import { urls } from "../constants/utils";
import { apiService } from "./apiService";

const albumService = {
    getAll: () => apiService.get(urls.albums)
};

export { albumService };