import { urls } from "../constants";
import { apiService } from "./apiService";

const tokenKey = 'token';

const authService = {
    register(data: any) {
        return apiService.post(urls.auth.register, data)
    },
    async login(user: any) {
        const {data: {access}} = await apiService.post(urls.auth.login, user)
        this.setToken(access)
    },
    me() {
        return apiService.get(urls.auth.me)
    },
    setToken(token: string) {
        localStorage.setItem(tokenKey, token)
    },
    getToken() {
        return localStorage.getItem(tokenKey)
    },
    deleteToken() {
        localStorage.removeItem(tokenKey)
    }
};

export { authService };