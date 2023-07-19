<script>
export default {
    name: "AppHeader",
    data() {
        return {
        navLinks: [
          { label: "Home", name: "home" },
          { label: "contact us", name: "contact-us"  },
          { label: "Project Card", name: "project-card" },
          { label: "Testa pagina di errore", name: "error", code:"404" },
          
            // { label: "Articolo a caso", name: "single-post", params: { id: 3 } }
        ]
        }
    }
}
</script>

<template>
  <header>
    <template v-for="i in navLinks">
      <router-link :to="{ name: i.name, params: {code:i.code} }">{{ i.label }}</router-link>
      
    </template>
  </header>
</template>


<style scoped>
header {
  width: 100%;
  background: #666;
  color: black;
  padding: 1rem;
}
header a {
  margin: 1rem;
}
</style>