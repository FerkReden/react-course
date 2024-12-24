import { urls } from "../constants";
import { apiService } from "./apiService";
import { IRes } from "../types";
import { IUser } from "../interfaces";

const userService = {
    getAll: (): IRes<IUser[]> => apiService.get(urls.users.base),
    getById: (id: number): IRes<IUser> => apiService.get(urls.users.byId(id))
}

export { userService };