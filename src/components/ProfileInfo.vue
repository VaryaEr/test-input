<template>
    <div class="info">
        <h2 :class="{ focused: isFocused }">Samuel is</h2>
        <div class="info__content">
            <InputBase v-model="inputValue" @focus="focusHandlers.onFocus" @blur="focusHandlers.onBlur" />
            <span>hours old</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import InputBase from './InputBase.vue'
import { useInputFocus } from '../composables/useInputFocus'

const inputValue = ref('')
const { isFocused, focusHandlers } = useInputFocus()

defineExpose({
    isFocused
})
</script>

<style scoped>
h2 {
    margin: 0;
    margin-bottom: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    transition: all 0.3s ease;
}

.focused {
    color: #3D06D7;
}

span {
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    font-family: "Inter", sans-serif;
}

.info {
    margin-left: 16px;
}

.info__content {
    display: flex;
    gap: 13px;
    align-items: center;
}
</style>