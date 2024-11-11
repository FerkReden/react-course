import { urls } from '../constants/urls';
import { axiosService } from './axiosService';

const userService = {
    getAll: () => axiosService(urls.users.base),
    //@ts-ignore
    getById: (id) => axiosService(urls.users.byId(id))
}

export { userService }