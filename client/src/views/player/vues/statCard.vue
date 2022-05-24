<template>
    <div class="stat-card">
        <div class="card custom-card">
            <div>{{title}}</div>
            <div>{{value}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'StatCard',
    props: {
        title: {
            type: String,
            default: '지표'
        },
        value: {
            type: Number,
            default: 0
        }
    }
}
</script>
<style lang="scss" scoped>
.custom-card {
    background-color: #1E2025;
}
</style>