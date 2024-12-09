import { Car } from "./Car";

//@ts-ignore
const Cars = ({cars, setCarForUpdate, changeTrigger}) => {

    return (
        <div>
            {
            //@ts-ignore
            cars.map(car =>  <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} changeTrigger={changeTrigger} />)}
        </div>
    )
}

export { Cars };