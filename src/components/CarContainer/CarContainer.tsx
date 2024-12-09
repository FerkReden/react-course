import { useEffect, useState } from "react";
import { CarFrom } from "./CarFrom";
import { Cars } from "./Cars";
import { carService } from "../../services/carService";

const CarContainer = () => {

    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [trigger])

    const changeTrigger = () => {
        //@ts-ignore
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