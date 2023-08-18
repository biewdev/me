<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView>
    <template #default="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </template>
  </RouterView>
</template>
