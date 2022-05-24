<template>
    <div class="logo">
        <img src="@/assets/logo.jpg">
    </div>
</template>

<script>
export default {
    name: 'logo'
}
</script>

<style lang="scss" scoped>
img {
    object-fit: cover;
    object-position: center top;
    height: 300px;
    font-size: 60px;
    color: #FFF;
    width: 70%;
    height: 300px;
    background-color: #35435D;
    border-radius: 0.5rem;
}
</style>