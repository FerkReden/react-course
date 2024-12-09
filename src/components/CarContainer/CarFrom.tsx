import { SubmitHandler, useForm } from "react-hook-form";
import { FC, useEffect } from "react";

import { carService } from "../../services/carService";
import { ICar } from "../../interfaces/carInterface";
import { ISetState } from "../../types/setStateType";

interface IProps {
    changeTrigger: () => void;
    setCarForUpdate: ISetState<ICar>,
    carForUpdate: ICar,
}

const CarFrom: FC<IProps> = ({changeTrigger, carForUpdate, setCarForUpdate}) => {

    const { register, reset, handleSubmit, formState: { isValid, errors }, setValue } = useForm<ICar>({
        mode: 'all'
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
                <input type="text" placeholder={'brand'} {...register('brand', {
                    pattern: {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,
                        message: 'min 1 character',
                    }
                })} />
                <input type="text" placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    min: {
                        value: 0,
                        message: 'min 1',
                    },
                    max: {
                        value: 1_000_000,
                        message: 'max 1000000',
                    },
                    })} />
                <input type="text" placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    min: {
                        value: 1990,
                        message: 'min 1990'
                    },
                    max: {
                        value: new Date().getFullYear(),
                        message: `max ${new Date().getFullYear()}` 
                    },
                    })} />
                <button disabled={!isValid}>{!carForUpdate ? 'Save' : 'Update'}</button>
                {errors.brand&&<div>{errors.brand.message}</div>}
                {errors.price&&<div>{errors.price.message}</div>}
                {errors.year&&<div>{errors.year.message}</div>}
            </form>
        </div>
    )
}

export { CarFrom };