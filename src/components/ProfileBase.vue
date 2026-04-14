<template>
    <div class="profile" :class="{ focused: isFocused }">
        <ProfilePhoto />
        <ProfileInfo ref="infoRef" />
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import ProfileInfo from './ProfileInfo.vue'
import ProfilePhoto from './ProfilePhoto.vue'

const infoRef = ref<InstanceType<typeof ProfileInfo> | null>(null)
const isFocused = computed(() => infoRef.value?.isFocused || false)
</script>

<style scoped>
.profile {
    height: 80px;
    position: relative;
    display: flex;
    align-items: center;
}

.profile::before {
    content: "";
    width: 86px;
    height: 86px;
    border: 1px transparent solid;
    border-radius: 100%;
    display: block;
    position: absolute;
    left: -4px;
    top: -4px;
    transition: all 0.3s ease;
}

.focused::before {
    border-color: #3D06D7;
}
</style>