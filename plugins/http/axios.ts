import axios from 'axios';

// @ts-ignore
import {getBaseUrl} from "~/utils/baseUrl.ts";

export default defineNuxtPlugin(nuxtApp => {
    const baseUrl = getBaseUrl();
    console.log(baseUrl);
    // @ts-ignore
    const api = axios.create({
        baseURL: baseUrl, // Установите базовый URL вашего API
    });

    // Добавьте интерцепторы для автоматической аутентификации
    api.interceptors.request.use((config: { headers: { Authorization: string; }; }) => {
        const token = useCookie('authToken'); // Пример получения токена из куки
        // const token_ref = toRef(token)
        // @ts-ignore
        const token_ref = token.value ? token.value : '';
        if (token_ref !== undefined && token_ref !== '') {
            console.log("token:", token_ref);
            config.headers.Authorization = `Bearer ${token_ref}`;
        }
        return config;
    });

    api.interceptors.response.use(
        (response: any) => response,
        (error: { response: { status: number; }; }) => {
            if (error.response && error.response.status === 401) {
                // Обработка ошибки аутентификации
                useRouter().push('/login');
            }
            return Promise.reject(error);
        }
    );

    // Регистрация Axios в контексте Nuxt
    nuxtApp.provide('axios', api);
});