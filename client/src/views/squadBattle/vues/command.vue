<template>
    <div class="command">
        <div class="command-line">
            <div class="d-flex h-100">
                <div class="command-header">
                    <strong>Command</strong>
                </div>
                <div class="command-body d-flex justify-content-center align-items-center">
                    <div v-for="(item, idx) of command" class="command-btn mr-3" :key="idx">
                        {{item}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Command',
    data() {
        return {
            command: ['→', '←', '←', '↑', '↓', '→', '←', '←', '↑', '↓', '→', '←', '←', '↑', '↓', '→', '←', '←', '↑', '↓']
        }
    },
}
</script>
<style lang="scss" scoped>
.command {
    background-color: #FFF;
    border-radius: 0.25rem;
}

.command-line {
    height: 80px;
}

.command-header {
    width: 10%;
    border-right: 1px solid lightgrey;
}

.command-body {
    width: 90%;
    max-width: 90%;
    overflow-x: auto;
}

.command-btn {
    color: #FFF;
    font-size: 30px;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background-color: #2c3e50;
}
</style>