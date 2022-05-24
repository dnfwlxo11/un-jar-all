<template>
    <div class="logo">
        <div class="main-title">
            <strong>운 잘 알</strong>
        </div>
        <div>
            <img src="@/assets/logo.jpg">
        </div>
    </div>
</template>

<script>
export default {
    name: 'logo'
}
</script>

<style lang="scss" scoped>
img {
    z-index: 1;
    opacity: 0.6;
    object-fit: cover;
    object-position: center top;
    height: 300px;
    color: #FFF;
    width: 70%;
    height: 300px;
    background-color: #35435D;
    border-radius: 0.5rem;
}

.main-title {
    font-size: 100px;
    height: 300px;
    z-index: 2;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    color: white;
}
</style>