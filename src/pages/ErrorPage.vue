<script>
export default {
    name:"ErrorNotFound",
    data() {
        return {
            errorMessage : {
                404: "Nothing found",
                401: "Unathorized"
            }
        }
    }
}
</script>

<template>
<section>
    <h1>Error {{ $route.params.code }}</h1>
    <p v-if="errorMessage">{{ errorMessage[$route.params.code] }}</p>
</section>
</template> 