<template>
    <div class="router">
       current child Router: {{$route.params.userId}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .router {
        color: royalblue;
        font-size: 18px;
        font-weight: bold;
    }
</style>