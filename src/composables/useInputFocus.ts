import { ref } from "vue";

export const useInputFocus = () => {
    const isFocused = ref(false);

    const onFocus = () => {
        isFocused.value = true;
    };

    const onBlur = () => {
        isFocused.value = false;
    };

    return {
        isFocused,
        focusHandlers: { onFocus, onBlur },
    };
};
