import { FC } from "react";

import { carService } from "../../services/carService";
import { ICar } from "../../interfaces/carInterface";
import { ISetState } from "../../types/setStateType";

interface IProps {
    car: ICar,
    setCarForUpdate: ISetState<ICar>,
    changeTrigger: () => void,
}

const Car: FC<IProps> = ({car, setCarForUpdate, changeTrigger}) => {

    const { id, brand, price, year } = car;
    
    const deleteCar = async () => {
        await carService.deleteById(id);
        changeTrigger()
    };

    return (
        <div>
            <div>ID : {id}</div>
            <div>Brand : {brand}</div>
            <div>Price : {price}</div>
            <div>Year : {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </div>
    )
}

export { Car };