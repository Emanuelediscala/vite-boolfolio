<script>
import axios from "axios"
import SingleProject from "./SingleProject.vue"
export default {
    name: "ProjectCard",
    components: SingleProject,
    data() {
        return {
            chiave: "valore",
            apiUrl: "http://127.0.0.1:8000/api/projects",
            loading: false,
            projects: [],
            projectCurrentPage: 0,
            projectTotalPage: 0,


        }
    },
    methods: {
        getProjectsFirstPage() {
            this.loading = true;
            axios.get(this.apiUrl).then((response) => {
                this.projects = response.data.results.data;
                this.projectCurrentPage = response.data.results.current_page;
                this.projectTotalPage = response.data.results.last_page;
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.$router.push({ name: 'error', params: { code: 404 } })
            });
        },
        getProjectsPage(pageNumber) {

            if (pageNumber && pageNumber > 0 && pageNumber <= this.projectTotalPage) {

                let config = {
                    params: {
                        page: pageNumber
                    }
                };

                this.loading = true;
                axios.get(this.apiUrl, config).then(response => {
                    console.log(response.data);
                    this.projects = response.data.results.data;
                    this.projectCurrentPage = response.data.results.current_page;
                    this.projectTotalPage = response.data.results.last_page;
                    this.loading = false;
                }).catch(err => {
                    this.loading = false;
                    this.loadingError = err.message;
                });

            } else {
                console.error("Non ci sono più pagine");
            }

        },
        getProjectPrevPage() {

            this.getProjectsPage(this.projectCurrentPage);
            console.log(this.projectCurrentPage);
        },
        getProjectNextPage() {

            this.getProjectsPage(this.projectCurrentPage + 1);
        },
        getsinglepost(id) {
            return "<router-link :to='{ name: i.name, id: {id:i.id} }'>{{ i.label }}</router-link>"

        }
    },
    mounted() {
        this.getProjectsFirstPage();

    }
}
</script>

<template>
    <main>
        <h2>progetti: <span v-if="projectTotalPage > 0">{{ projectCurrentPage }} di {{ projectTotalPage }}</span></h2>
        <h3 v-if="loading">Errore caricamento dati</h3>
        <a class="button" @click="getProjectPrevPage">Pagina precedente</a><br>
        <a class="button" @click="getProjectsPage(pageNumber)" v-for="pageNumber in projectTotalPage">{{ pageNumber
        }}</a><br>
        <a class="button" @click="getProjectNextPage">Pagina successiva</a>
        <div class="d-flex">
            <template v-for="(project, i) in projects">
                <router-link :to="{ name: 'single_project', params: { id: project.id } }" tag="div" class="card" style="width: 18rem;">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">
                                {{ project.title }}
                            </h5>
                            <h4 class="card-title">{{ project.type ? project.type.name : "Nessuna" }}</h4>
                            <h4>Tecnologies:
                                <span class="text-danger" v-if="project.tecnologies.length"
                                    v-for="tecnologia in project.tecnologies">{{ tecnologia.name }}&nbsp;</span>
                                <span class="text-warning" v-else>Nessuna Tecnologia</span>
                            </h4>
                            <p class="card-text">{{ project.content }}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </router-link>
            </template>
        </div>
    </main>
</template>

<style>
a {
    cursor: pointer;
    text-decoration: none !important;
}

</style>