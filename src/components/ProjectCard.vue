<script>
import axios from "axios"
export default {
    name: "AppMain",
    data() {
        return {
            chiave: "valore",
            apiUrl: "http://127.0.0.1:8000/api/projects",
            loading: false,
            projects: [],
            projectCurrentPage: 0,
            projectTotalPage: 0
        }
    },
    methods: {
        getProjects() {
            this.loading = true;
            axios.get(this.apiUrl).then((response) => {
                this.projects = response.data.results.data;
                this.projectCurrentPage = response.data.results.current_page;
                this.projectTotalPage = response.data.results.lastpage;
                this.loading = false;
            }).catch(err => {
                this.loading = false
            });
        },
        getProjectsPage(pageNumber) {

            if (pageNumber && pageNumber > 0 && pageNumber <= this.projectTotalPage) {

                let config = {
                    params: {
                        page: pageNumber
                    }
                }
            }
        }
    },
        mounted() {
            this.getProjects();

        }
}
</script>

<template>
    <main>

        <h3 v-if="loading">Errore caricamento dati</h3>
        <template v-for="project in projects">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
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
        </template>
    </main>
</template>