import { useForm } from "react-hook-form";
import { carService } from "../../services/carService";
import { useEffect } from "react";

//@ts-ignore
const CarFrom = ({changeTrigger, carForUpdate, setCarForUpdate}) => {

    const { register, reset, handleSubmit, formState: { isValid, errors }, setValue } = useForm({
        mode: 'all'
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, { shouldValidate: true })
            setValue('price', carForUpdate.price, { shouldValidate: true })
            setValue('year', carForUpdate.year, { shouldValidate: true })
        }
    }, [carForUpdate, setValue]);

    //@ts-ignore
    const save = async (car) => {
        await carService.create(car)
        //@ts-ignore
        changeTrigger()
        reset()
    }

    //@ts-ignore
    const update = async (car) => {
        //@ts-ignore
        await carService.updateById(carForUpdate.id, car)
        //@ts-ignore
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
                {
                //@ts-ignore
                errors.brand&&<div>{errors.brand.message}</div>}
                {
                //@ts-ignore
                errors.price&&<div>{errors.price.message}</div>}
                {
                //@ts-ignore
                errors.year&&<div>{errors.year.message}</div>}
            </form>
        </div>
    )
}

export { CarFrom };