import { useState } from "react";
import { useForm } from "react-hook-form";
import { authService } from "../../services";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const {handleSubmit, register} = useForm();
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const login = async (user: any) => {
        try {
            await authService.login(user)
            navigate('/cars')
        } catch (e) {
            //@ts-ignore
            setError(true)
        }
    }

    return (
        <form onSubmit={handleSubmit(login)}>
            {error && <div>Username or password is invalid</div>}
            <div>Username: <input type="text" {...register('username')}/></div>
            <div>Password: <input type="text" {...register('password')}/></div>
            <button>Login</button>
        </form>
    )
};

export { LoginForm };