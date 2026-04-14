<template>
  <section class="container-fluid">
    <div class="profiles">
      <ProfileBase class="profiles__item" />
      <ProfileBase class="profiles__item" />
      <ProfileBase class="profiles__item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProfileBase from './components/ProfileBase.vue';

</script>

<style>
* {
  font-family: "Koulen", sans-serif;
  font-weight: 400;
  font-style: normal;
  box-sizing: border-box;
}

body {
  padding-top: 50px;
}

.container-fluid {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 80px;
  padding-right: 80px;

  @media screen and (max-width: 1300px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>

<style scoped>
.profiles {
  display: flex;
  flex-direction: column;
  gap: 65px;
}

.profiles__item::after {
  content: url(/svg/arrow.svg);
  position: absolute;
  top: 95px;
  left: 40px;
}

.profiles__item:last-child:after {
  display: none;
}
</style>
