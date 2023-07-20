<script>
import axios from "axios";
import {store} from "../store"
export default {
    name: "SinglePost",
    data () {
        return {
            store,
            loading: false,
            projects: "",
            
        }
    },
    
    methods: {
        // METODO PER DEFINIRE I SINGOLI PROJECT
        getProjects(id) {
            this.loading = true;
            axios.get(this.store.apiUrl + id).then((response) => {
                this.projects = response.data.results;
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.$router.push({name:'error', params: {code:404}})
            });
    },
    getotalProjects() {
        // METODO PER DEFINIRE TUTTI I PROGETTI
            this.loading = true;
            axios.get(this.store.apiUrl).then((response) => {
                this.store.projectsTotalNumber = response.data.results.total;
                console.log(this.projectsTotalNumber);
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.$router.push({name:'error', params: {code:404}})
            });
    }
},
mounted() {
    this.getProjects (this.$route.params.id);
    this.getotalProjects();
    
},
beforeRouteUpdate(to,from) {
    if(from.name == to.name) {
        let newPostId = to.params.id;
        this.getProjects(newPostId);
    }
}
} 
</script>

<template>
 <section v-if="projects">
    <img :src="store.storageUrl + projects.image" />
        <h1>{{ projects.title }}</h1>
        <h2>Categoria: {{ projects.type ? projects.type.name : "Nessuna" }}</h2>
        <h2>Tags: 
            <span v-if="projects.tecnologies.length" v-for="tecnology in projects.tecnologies">{{ tag.name }}&nbsp;</span>
            <span v-else>Nessun tag</span>
        </h2>
        <h3>
            <template v-if="projects.id < store.projectsTotalNumber">
            <router-link :to="{name:'single_project', params:{id:projects.id+1}}">Prossimo Articolo</router-link>
            </template>
            <br>
            <template v-if="projects.id > 1">
            <router-link :to="{name:'single_project', params:{id:projects.id-1}}">Articolo precedente</router-link>
                
            </template>
        </h3>
        <p>{{ projects.content }}</p>
        
    </section>

</template> 