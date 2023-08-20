<script lang="ts" setup>
import { ref } from 'vue';
import Section from './Section.vue';
const jobSelected = ref(0);

const jobs = [
  {
    position: 'Desenvolvedor Front-End',
    name: 'QFlash',
    start_date: 'Fev 2023',
    end_date: 'Até o momento',
    description: [
      'Manutenção e desenvolvimento da plataforma principal e projetos internos usando React,js, Next.js, React Query e Tailwind CSS.',
      'Atendimento de demandas e tarefas da empresa. ',
    ],
    skills: ['React.js', 'Next.js', 'Javascript', 'Typescript', 'SASS', 'Tailwind'],
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
    skills: ['Vue.js', 'Javascript', 'Node.js', 'SCSS', 'Bootstrap'],
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
        <div class="job-title">
          {{ jobs[jobSelected].position }} *
          <span class="highlight">{{ jobs[jobSelected].name }}</span>
        </div>

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

        <div class="job-skills">
          <ul>
            <li v-for="(skill, index) in jobs[jobSelected].skills" :key="index">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
@import '@colors';
.experience {
  display: flex;

  @media (max-width: screen-breakpoint('md')) {
    flex-direction: column;
  }

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

      @media (max-width: screen-breakpoint('xs')) {
        margin-right: 0px;
        margin-bottom: 3px;
      }

      &.active {
        @media (min-width: screen-breakpoint('xs')) {
          margin-right: 0px;
          border-right: 3px solid $primary;
        }

        @media (max-width: screen-breakpoint('xs')) {
          margin-bottom: 0px;
          border-bottom: 3px solid $primary;
        }
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
        color: $primary;
      }
    }

    .job-date {
      color: $color-font-secondary;
      font-size: 0.85rem;
    }
  }

  .job-content {
    margin-left: 50px;

    @media (max-width: screen-breakpoint('md')) {
      margin-top: 1.5rem;
      margin-left: 0;
    }

    .job-title {
      font-size: 1.4rem;
      font-weight: 600;
    }

    .job-description {
      margin-top: 20px;
      color: $color-font-secondary;
      font-size: 300;

      li {
        list-style: disc;
        margin-left: 20px;
        margin-bottom: 5px;
      }
    }

    .job-skills {
      margin-top: 20px;

      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          background: rgba($secondary, 0.5);
          color: #fff;
          border-radius: 20px;
          padding: 5px 10px;
          margin: 5px;
          font-size: 0.85rem;
        }
      }
    }
  }
}
</style>
