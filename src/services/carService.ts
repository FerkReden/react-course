import { urls } from "../constants";
import { apiService } from "./apiService";

const carService = {
    getAll: (page = '1') => apiService.get(urls.cars.base, {params: {page}}),
    create: (data: any) => apiService.post(urls.cars.base, data),
    updateById: (data: any, id: number) => apiService.put(urls.cars.byId(id), data),
    daleteById: (id: number) => apiService.delete(urls.cars.byId(id)),
};

export { carService };
