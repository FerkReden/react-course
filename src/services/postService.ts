import { urls } from "../constants";
import { IPost } from "../interfaces";
import { IRes } from "../types";
import { apiService } from "./apiService";

const postService = {
    getAll: (): IRes<IPost[]> => apiService.get(urls.posts.base),
    getById: (id: number): IRes<IPost> => apiService.get(urls.posts.byId(id)),
}

export { postService };