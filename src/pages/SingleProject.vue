<script>
import axios from "axios";
export default {
    name: "SinglePost",
    data () {
        return {

            apiUrl: "http://127.0.0.1:8000/api/projects/",
            loading: false,
            projects: ""
        }
    },
    
    methods: {
        getProjects(id) {
            this.loading = true;
            axios.get(this.apiUrl + id).then((response) => {
                this.projects = response.data.results;
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.$router.push({name:'error', params: {code:404}})
            });
    }
},
mounted() {
    this.getProjects (this.$route.params.id)
    
}
} 
</script>

<template>
 <section v-if="projects">
        <h1>{{ projects.title }}</h1>
        <h2>Categoria: {{ projects.type ? projects.type.name : "Nessuna" }}</h2>
        <h2>Tags: 
            <span v-if="projects.tecnologies.length" v-for="tecnology in projects.tecnologies">{{ tag.name }}&nbsp;</span>
            <span v-else>Nessun tag</span>
        </h2>
        <p>{{ projects.content }}</p>
    </section>

</template> 