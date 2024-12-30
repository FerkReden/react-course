import { useForm } from "react-hook-form";
import { useState } from "react";
import { joiResolver } from "@hookform/resolvers/joi"

import { registerValidator } from "../../validators";
import { authService } from "../../services";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {

    const [error, setError] = useState(null)

    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(registerValidator)
    });

    const navigate = useNavigate();

    const save = async (user: any) => {
        try {
            await authService.register(user)
            navigate('/login');
        } catch (e) {
            //@ts-ignore
            setError(true)
        }
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            {error && <div>Username already exist</div>}
            <div>Username: <input type="text" {...register('username')}/></div>
            {errors.username && <div>{String(errors.username.message)}</div>}
            <div>Password: <input type="text" {...register('password')}/></div>
            {errors.password && <div>{String(errors.password.message)}</div>}
            <div>Confirm Password: <input type="text" {...register('re_password')}/></div>
            {errors.re_password && <div>{String(errors.re_password.message)}</div>}
            <button disabled={!isValid}>Register</button>
        </form>
    )
};

export { RegisterForm };