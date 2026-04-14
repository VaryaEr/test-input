<template>
    <div contenteditable="true" class="input" @input="onInput" @focus="onFocus" @blur="onBlur"></div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
    (e: 'focus'): void
    (e: 'blur'): void
    (e: 'update:modelValue', value: string): void
}>()

const onFocus = () => {
    emit('focus')
}

const onBlur = () => {
    emit('blur')
}

const formatNumberWithSpaces = (value: string): string => {
    const digits = value.replace(/\D/g, '')
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const onInput = (e: Event) => {
    const target = e.target as HTMLElement
    const rawText = target.innerText
    const selection = window.getSelection()

    if (!selection || selection.rangeCount === 0) return

    const range = selection.getRangeAt(0)
    const cursorPosition = range.startOffset
    const formatted = formatNumberWithSpaces(rawText)

    if (target.innerText !== formatted) {
        target.innerText = formatted

        let newPosition = cursorPosition
        if (formatted.length > rawText.length) {
            newPosition = cursorPosition + (formatted.length - rawText.length)
        } else if (formatted.length < rawText.length) {
            newPosition = Math.min(cursorPosition, formatted.length)
        }

        const newRange = document.createRange()
        const textNode = target.firstChild || target
        newRange.setStart(textNode, Math.min(newPosition, formatted.length))
        newRange.collapse(true)
        selection.removeAllRanges()
        selection.addRange(newRange)
    }

    const digits = formatted.replace(/\s/g, '')
    emit('update:modelValue', digits)
}
</script>

<style scoped>
.input {
    min-width: 72px;
    width: auto;
    box-shadow: 0 0 0 1px #CFCADF;
    outline-offset: -1px;
    color: #CFCADF;
    border-radius: 6px;
    max-height: 44px;
    padding: 8px;
    padding-right: 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 144%;
    font-family: "Inter", sans-serif;
    transition: all 0.3s ease;
    caret-color: #3D06D7;
}

.input:focus-visible {
    box-shadow: 0 0 0 1.5px #906FEE;
    color: #1E0E4C;
    outline: none;
}

.input:empty:before {
    content: attr(placeholder);
    color: #CFCADF;
}
</style>