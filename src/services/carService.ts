import { urls } from "../constant/utils";
import { apiService } from "./apiService";

const carService = {
    getAll: () => apiService.get(urls.cars.base),
    //@ts-ignore
    create: (data) => apiService.post(urls.cars.base, data),
    //@ts-ignore
    updateById: (id, date) => apiService.put(urls.cars.byId(id), date),
    //@ts-ignore
    deleteById: (id) => apiService.delete(urls.cars.byId(id))
}

export { carService };