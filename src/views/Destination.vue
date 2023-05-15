<template>
    <div class="destination">
        <h1>Destination</h1>
    </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
    data() {
        return {
           destinations: sourceData.destinations
        }
    }
}
</script>