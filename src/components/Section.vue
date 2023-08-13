<script lang="ts" setup>
const props = defineProps<{ title: string }>();
</script>

<template>
  <section>
    <h2><span># </span>{{ props.title }}</h2>
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-top: 40px;

  h2 {
    font-weight: 500;
    margin-bottom: 30px;
    text-transform: lowercase;

    span {
      color: #ffc421;
    }
  }
}
</style>
