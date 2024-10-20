type TimerCallback = () => Promise<void>;

export default defineNuxtPlugin((nuxtApp) => {
    const timers: { // @ts-ignore
        [key: string]: NodeJS.Timeout
    } = {};

    const startTimer = (key: string, callback: TimerCallback, interval = 1000) => {
        if (timers[key]) {
            clearInterval(timers[key]);
        }

        console.debug(`⏱️️ Starting timer for -> ${key} ⚡️`);

        timers[key] = setInterval(async () => {
            try {
                await callback();
            } catch (error) {
                console.error(`Error in timer callback for ${key}:`, error);
            }
        }, interval);
    };

    const stopTimer = (key: string) => {
        if (timers[key]) {
            clearInterval(timers[key]);
            delete timers[key];
        }
        console.debug(`⏱️️ Stop timer for -> ${key} ⚡️`);
    };

    const stopAllTimers = () => {
        Object.keys(timers).forEach((key) => {
            clearInterval(timers[key]);
            delete timers[key];
        });
    };

    const watchRouteForTimer = (key: string) => {
        // @ts-ignore
        nuxtApp.$router.beforeEach((to, from, next) => {
            stopTimer(key);
            next();
        });
    };

    return {
        provide: {
            uTimer: {
                startTimer,
                stopTimer,
                stopAllTimers,
                watchRouteForTimer,
            },
        },
    };
});
