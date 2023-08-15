<script setup lang="ts">
import { onMounted } from 'vue';
import Experience from '../components/Experience.vue';
import Footer from '../components/Footer.vue';

let donutElement = document.getElementsByClassName('donut');

let A = 1,
  B = 1;

function donut() {
  let b: string[] = [];
  let z: number[] = [];

  A += 0.07;
  B += 0.03;

  let cA = Math.cos(A),
    sA = Math.sin(A),
    cB = Math.cos(B),
    sB = Math.sin(B);

  for (let k = 0; k < 1760; k++) {
    b[k] = k % 80 == 79 ? '\n' : ' ';
    z[k] = 0;
  }

  for (let j = 0; j < 6.28; j += 0.07) {
    let ct = Math.cos(j),
      st = Math.sin(j);

    for (let i = 0; i < 6.28; i += 0.02) {
      let sp = Math.sin(i),
        cp = Math.cos(i),
        h = ct + 2,
        D = 1 / (sp * h * sA + st * cA + 5),
        t = sp * h * cA - st * sA;

      let x = 0 | (40 + 30 * D * (cp * h * cB - t * sB)),
        y = 0 | (12 + 15 * D * (cp * h * sB + t * cB)),
        o = x + 80 * y,
        N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));

      if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
        z[o] = D;
        b[o] = '.,-~:;=!*#$@'[N > 0 ? N : 0];
      }
    }
  }

  donutElement[0].innerHTML = b.join('');
}

onMounted(() => {
  setInterval(donut, 50);
});
</script>

<template>
  <div class="container is-md mt-7 px-3">
    <div class="donut-area">
      <pre class="donut"></pre>
    </div>

    <section class="me">
      <h1 class="title">Gabriel Augusto.<span></span></h1>

      <p class="subtitle">
        Atualmente sou um desenvolvedor full-stack e estou no meu terceiro ano de estudos em ciência
        da computação. Minha jornada na programação teve início em 2014, quando comecei a criar
        minigames e complementos para jogos utilizando Java. Com o passar do tempo, direcionei meu
        interesse para o desenvolvimento web, que se tornou minha principal área de especialização.
      </p>
    </section>

    <Experience />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.donut-area {
  overflow: hidden;
  height: auto;
  width: auto;
  display: flex;
  align-items: start;
  font-size: 8px;
  user-select: none;
}

.me {
  .title {
    font-size: 3rem;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 2s steps(50, end);
    line-height: 4rem;
    margin: 20px 0px;
  }
  .subtitle {
    max-width: 50rem;
    line-height: 1.4rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 300;
  }
  span {
    margin-left: 5px;
    border-right: 5px solid #ffc421;
    animation: blink 1s infinite;
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
