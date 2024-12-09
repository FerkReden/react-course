import { SubmitHandler, useForm } from "react-hook-form";
import { FC, useEffect } from "react";
import { joiResolver } from "@hookform/resolvers/joi";

import { carService } from "../../services/carService";
import { ICar } from "../../interfaces/carInterface";
import { ISetState } from "../../types/setStateType";
import { carValidator } from "../../validators/carValidator";

interface IProps {
    changeTrigger: () => void;
    setCarForUpdate: ISetState<ICar>,
    carForUpdate: ICar,
}

const CarFrom: FC<IProps> = ({changeTrigger, carForUpdate, setCarForUpdate}) => {

    const { register, reset, handleSubmit, formState: { isValid, errors }, setValue } = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, { shouldValidate: true })
            setValue('price', carForUpdate.price, { shouldValidate: true })
            setValue('year', carForUpdate.year, { shouldValidate: true })
        }
    }, [carForUpdate, setValue]);

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        changeTrigger()
        reset()
    }

    const update: SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        changeTrigger()
        setCarForUpdate(null)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate ? save : update)}>
                <input type="text" placeholder={'brand'} {...register('brand')} />
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})} />
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})} />
                <button disabled={!isValid}>{!carForUpdate ? 'Save' : 'Update'}</button>
                {errors.brand&&<div>{errors.brand.message}</div>}
                {errors.price&&<div>{errors.price.message}</div>}
                {errors.year&&<div>{errors.year.message}</div>}
            </form>
        </div>
    )
}

export { CarFrom };