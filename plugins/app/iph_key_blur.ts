export default defineNuxtPlugin(() => {
  const isAppleDevice = () => {
    const platform = navigator.platform || navigator.userAgentData.platform;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    return (
      (/iPhone|iPad|iPod/.test(platform) || /Mac/.test(platform)) &&
      isTouchDevice
    );
  };

  // Функция для скрытия клавиатуры
  function setupBlurOnInput(input) {
    console.log(`[DEBUG] setupBlurOnInput() called for input:`, input);

    if (!input) {
      console.warn('[DEBUG] setupBlurOnInput() warning: input element not found');
      return;
    }

    let typingTimer; // Таймер для определения времени ввода
    const blurTime = 300; // Время в миллисекундах, после которого следует вызвать blur

    // Обработчик события ввода
    const handleInput = () => {
      clearTimeout(typingTimer); // Сбрасываем таймер при вводе текста
      typingTimer = setTimeout(() => {
        input.blur(); // Вызываем blur, если не вводили текст более blurTime
        console.log(`[DEBUG] Blurring element after ${blurTime} ms`);
      }, blurTime);
    };

    // Подписываемся на события ввода и фокуса
    input.addEventListener('input', handleInput, false);
    input.addEventListener('focus', () => {
      clearTimeout(typingTimer); // Сбрасываем таймер при фокусе
    }, false);
  }

  // Функция для применения setupBlurOnInput ко всем инпутам с классом "blur-input"
  function applySetupBlurToInputs() {
    const inputElements = document.querySelectorAll('input.blur-input');
    inputElements.forEach(input => {
      setupBlurOnInput(input); // Передаем сам элемент
    });
  }

  if (isAppleDevice()) {
    console.log('[DEBUG] Detected Apple device with touch capabilities');

    // Первоначальная проверка на наличие инпутов
    applySetupBlurToInputs();

    // Используем MutationObserver для отслеживания изменений в DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          console.log('[DEBUG] DOM mutation detected, checking for new inputs');
          applySetupBlurToInputs();
        }
      });
    });

    // Настраиваем наблюдение за изменениями в документе
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    console.log('[DEBUG] MutationObserver started');
  } else {
    console.log('[DEBUG] Not an Apple touch device');
  }
});
