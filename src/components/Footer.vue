<script setup lang="ts">
import GithubIcon from './icons/GithubIcon.vue';
import LinkedinIcon from './icons/LinkedinIcon.vue';
import MailIcon from './icons/MailIcon.vue';
</script>

<template>
  <footer class="mt-6 mb-2">
    <div class="social">
      <a href="mailto:gabrielaugustodev@gmail.com" target="_mail" aria-label="Email">
        <mail-icon />
      </a>
      <a href="https://github.com/biewdev" target="_github" aria-label="Github">
        <github-icon />
      </a>
      <a href="https://www.linkedin.com/in/biewdev/" target="_linkedin" aria-label="Linkedin">
        <linkedin-icon />
      </a>
    </div>
    Feito por Gabriel Augusto.<br />Todos os direitos reservados. &copy;
  </footer>
</template>

<style lang="scss" scoped>
@import '@colors';

footer {
  font-size: 0.85rem;
  color: $color-font-secondary;
  text-align: center;
}

.social {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-bottom: 5px;
}
</style>
