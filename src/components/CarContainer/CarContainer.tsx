import { useEffect, useState } from "react";

import { CarFrom } from "./CarFrom";
import { Cars } from "./Cars";
import { carService } from "../../services/carService";
import { ICar } from "../../interfaces/carInterface";

const CarContainer = () => {

    const [cars, setCars] = useState<ICar[]>([]);
    const [trigger, setTrigger] = useState<boolean>(null)
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [trigger])

    const changeTrigger = () => {
        setTrigger(prev => !prev);
    }

    return (
        <div>
            <CarFrom changeTrigger={changeTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr />
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} changeTrigger={changeTrigger} />
        </div>
    )
}

export { CarContainer };