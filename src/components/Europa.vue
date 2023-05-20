<script>
import sourceData from '@/data.json'

export default {
    data() {
        return {
            name: sourceData.destinations[2].name
        }
    }
}

</script>

<template>
<h1 class="text-white fs-900 ff-sans-cond">{{name}}</h1>
</template>