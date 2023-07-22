import { reactive } from "vue";

export const store = reactive({
    apiUrl: "http://127.0.0.1:8000/api/projects/",
    storageUrl: "http://127.0.0.1:8000/storage/",
    origiapiUrl : "http://127.0.0.1:8000/api/",
    projectsTotalNumber : 0
});