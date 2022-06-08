<template>
    <div class="find-password">
        <nav-bar></nav-bar>
        <div class="container mb-5" style="padding: 90px 15px;">
        </div>
    </div>
</template>
<script>
export default {
    name: 'FindPassword'
}
</script>
<style lang="scss" scoped>
.custom-card {
    width: 40%;
    background-color: lightgrey;
    padding: 30px;
}

.signin-title {
    font-size: 30px;
}

.essential {
    border-radius: 50%;
    background-color: red;
    height: 5px;
    width: 5px;
}

input {
    padding-left: 10px;
    height: 40px;
    width: 100%;

    &:focus {
        outline: lightgrey;
    }
}
</style>