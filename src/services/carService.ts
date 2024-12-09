import { apiService } from "./apiService";
import { urls } from "../constant/utils";
import { IRes } from "../types/responseType";
import { ICar } from "../interfaces/carInterface";

const carService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.cars.base),
    create: (data: ICar): IRes<ICar> => apiService.post(urls.cars.base, data),
    updateById: (id: number, date: ICar): IRes<ICar> => apiService.put(urls.cars.byId(id), date),
    deleteById: (id: number): IRes<void> => apiService.delete(urls.cars.byId(id))
}

export { carService };