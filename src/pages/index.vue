<script setup lang="ts">
import Donut from '@/components/Donut.vue';
import Experience from '../components/Experience.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="container is-md px-3">
    <Donut />

    <h1 class="title">Gabriel Augusto.<span></span></h1>

    <section class="me">
      <p class="subtitle">
        Atualmente sou um desenvolvedor full-stack e estou no meu terceiro ano de estudos em
        <span class="highlight">ciência da computação</span>. Minha jornada na programação teve
        início em 2014, quando comecei a criar minigames e complementos para jogos utilizando Java.
        Com o passar do tempo, direcionei meu interesse para o desenvolvimento web, que se tornou
        minha principal área de especialização.
      </p>
    </section>

    <Experience />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import '@colors';

.title {
  font-size: $font-size-h1;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(50, end);
  line-height: 4rem;
  margin: 1.2rem 0;

  @media (max-width: screen-breakpoint('md')) {
    font-size: 2rem;
  }

  span {
    margin-left: 5px;
    border-right: 5px solid $primary;
    animation: blink 1s infinite;
  }
}

.me {
  .subtitle {
    max-width: 50rem;
    line-height: 1.4rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 300;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  from,
  to {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}
</style>
