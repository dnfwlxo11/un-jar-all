<template>
    <div class="stat-card">
        <div class="card card">
            <div class="card-title">
                <strong>
                    {{title}}
                </strong>
            </div>
            <div class="card-body">{{content}}</div>
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
.card {
    max-width: 400px;
    max-height: 300px;
    background-color: #EEEEEE;
}

.card-title {
    padding: 10px 0px 10px 0px;
    font-size: 20px;
}

.card-body {
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>