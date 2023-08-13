<script lang="ts" setup>
import { ref } from 'vue';
import Section from './Section.vue';
const jobSelected = ref(0);

const jobs = [
  {
    position: 'Desenvolvedor Front-End',
    name: 'QFlash',
    start_date: 'Fev 2022',
    end_date: 'Até o momento',
    description: [
      'Manutenção e desenvolvimento da plataforma principal e projetos internos usando React,js, Next.js, React Query e Tailwind CSS.',
      'Atendimento de demandas e tarefas da empresa. ',
    ],
  },
  {
    position: 'Desenvolvedor Front-End',
    name: 'Samplemed',
    start_date: 'Abr 2022',
    end_date: 'Fev 2023',
    description: [
      'Colaborei com a migração do Vue.js 2 para o Vue.js 3.',
      'Manutenção e desenvolvimento da plataforma e módulos para projetos internos.',
      'Atendimento de demandas e tarefas da empresa.',
    ],
    skills: [
      'Vue.js',
      'Javascript',
      'Bootstrap',
      'Sass',
      'Node.js',
      'Docker',
      'HTML',
      'CSS',
      'Git',
    ],
  },
];

function selectjob(index: number) {
  jobSelected.value = index;
}
</script>

<template>
  <Section title="Experiência">
    <div class="experience">
      <div>
        <ul class="job-list">
          <li
            v-for="(job, index) in jobs"
            :key="job.name"
            :class="{ active: jobSelected === index }"
            @click="selectjob(index)"
          >
            <div class="job-title" :class="{ active: jobSelected === index }">
              {{ job.name }}
            </div>
            <div class="job-date">{{ job.start_date }} - {{ job.end_date }}</div>
          </li>
        </ul>
      </div>

      <div class="job-content">
        <div class="job-title">{{ jobs[jobSelected].position }} * {{ jobs[jobSelected].name }}</div>

        <div class="job-description">
          <ul>
            <li
              v-for="(description, index) in jobs[jobSelected].description"
              :key="index"
              class="pb-1"
            >
              {{ description }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
.experience {
  display: flex;
  .job-list {
    display: flex;
    flex-direction: column;
    li {
      min-width: 220px;
      padding-top: 10px;
      padding-bottom: 10px;
      white-space: pre-wrap;
      border-radius: 2px;
      padding-right: 20px;
      margin-right: 3px;
      &.active {
        margin-right: 0px;
        border-right: 3px solid #ffc421;
      }
      &:hover {
        cursor: pointer;
      }
    }

    .job-title {
      color: #fff;
      font-size: 1.1rem;
      font-weight: 500;
      text-transform: uppercase;
      &.active {
        color: #ffc421;
      }
    }
    .job-date {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.85rem;
    }
  }

  .job-content {
    margin-left: 50px;
    .job-title {
      font-size: 1.4rem;
      font-weight: 600;
    }
    .job-description {
      margin-top: 20px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 300;
      li {
        list-style: disc;
        margin-left: 20px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
