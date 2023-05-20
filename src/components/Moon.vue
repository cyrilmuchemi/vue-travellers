<script>
import sourceData from '@/data.json'

export default {
    data() {
        return {
            name: sourceData.destinations[0].name
        }
    }
}

</script>

<template>
    <main class="grid-container grid-container--home">
        <h1 class="numbered title">{{ name }}</h1>
    </main>
</template>
