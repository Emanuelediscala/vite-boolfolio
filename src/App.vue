<script>
import ProjectCard from './pages/ProjectCard.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    ProjectCard
  }
} 
</script>


<template>

    <header class="mb-auto">
      <div>
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="/">Home</a>
          <a class="nav-link fw-bold py-1 px-0" href="/contact-us">Contact us</a>
          <a class="nav-link fw-bold py-1 px-0" href="/project-card">ProjectCard</a>
        </nav>
      </div>
      <router-view></router-view>
    </header>
</template>

<style scoped></style>
