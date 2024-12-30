import { useForm } from "react-hook-form";
import { carService } from "../../services";
import { useAppContext } from "../../hooks";

const CarForm = () => {

    const {register, reset, handleSubmit} = useForm();

    //@ts-ignore
    const {changeTrigger} = useAppContext();

    //@ts-ignore
    const save = async (car) => {
        await carService.create(car);
        reset();
        changeTrigger();
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')} />
            <input type="text" placeholder={'price'} {...register('price')} />
            <input type="text" placeholder={'year'} {...register('year')} />
            <button>Save</button>
        </form>
    )
};

export { CarForm };