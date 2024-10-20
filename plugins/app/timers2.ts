type TimerCallback = () => Promise<void>;

// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
    const timers: { // @ts-ignore
        [key: string]: NodeJS.Timeout
    } = {};
    const isActive = ref(false);

    const startTimer = (key: string, callback: TimerCallback, interval = 1000) => {
        if (timers[key]) {
            clearInterval(timers[key]);
        }

        isActive.value = true;

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
            isActive.value = false;
        }
    };

    const stopAllTimers = () => {
        Object.keys(timers).forEach((key) => {
            clearInterval(timers[key]);
            delete timers[key];
        });
        isActive.value = false;
    };

    const watchRouteForTimer = (key: string) => {
        const router = useRouter();
        router.beforeEach((to: any, from: any, next: () => void) => {
            stopTimer(key);
            next();
        });
    };

    // Cleanup timers on component unmount
    onUnmounted(() => {
        stopAllTimers();
    });

    // Expose the timer functions globally
    nuxtApp.provide('uTimer', {
        startTimer,
        stopTimer,
        stopAllTimers,
        watchRouteForTimer,
        isActive,
    });
});
