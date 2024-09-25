import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
    // @ts-ignore
    const api = axios.create({
        baseURL: 'https://j36ej2-185-23-238-13.ru.tuna.am/', // Установите базовый URL вашего API
    });

    // Добавьте интерцепторы для автоматической аутентификации
    api.interceptors.request.use((config: { headers: { Authorization: string; }; }) => {
        const token = useCookie('authToken'); // Пример получения токена из куки
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
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