import { carService } from "../../services/carService";

//@ts-ignore
const Car = ({car, setCarForUpdate, changeTrigger}) => {

    const { id, brand, price, year } = car;
    //@ts-ignore
    const deleteCar = async () => {
        await carService.deleteById(id);
        //@ts-ignore
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