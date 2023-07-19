<script>
import ProjectCard from './pages/ProjectCard.vue'
import { RouterLink } from 'vue-router';
import AppHeader from './components/AppHeader.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    ProjectCard,
    AppHeader,
    RouterLink
}
} 
</script>


<template>
<AppHeader/>
<router-view></router-view>
</template>

<style scoped></style>
