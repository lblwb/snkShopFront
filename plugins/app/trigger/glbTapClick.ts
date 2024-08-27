// plugins/click-tracker.js
// @ts-ignore
import {useWebAppHapticFeedback} from 'vue-tg'

export default defineNuxtPlugin(nuxtApp => {
    const haptic = useWebAppHapticFeedback();

    const clickTrackerHaptic = (event: any) => {
        haptic.impactOccurred("soft");
        haptic.notificationOccurred("success");
    }

    // Определение самой директивы
    const hapticEngineDirective = {
        mounted(el: HTMLElement, binding: any) {
            // Логика для обработки директивы
            console.log('Haptic Engine Directive Mounted!', binding.value)

            // Здесь можно добавить код для работы с haptic engine
            el.addEventListener('click', (event) => {
                clickTrackerHaptic(event)
            })
        }
    }

    nuxtApp.vueApp.directive('hapticEngine', hapticEngineDirective)
});