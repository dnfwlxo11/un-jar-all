<template>
    <div class="stat-card">
        <div class="card custom-card">
            <div class="stat-title">
                <strong>
                    {{title}}
                </strong>
            </div>
            <div class="stat-content">{{content}}</div>
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
        content: {
            type: Number,
            default: 0
        }
    }
}
</script>
<style lang="scss" scoped>
.custom-card {
    color: #FFF;
    max-width: 400px;
    max-height: 300px;
    background-color: #1E2025;
    border-radius: 0.5rem;
}

.stat-title {
    font-size: 20px;
}

.stat-title,
.stat-content {
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>