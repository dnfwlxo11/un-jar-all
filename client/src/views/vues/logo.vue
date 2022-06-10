<template>
    <div class="logo">
        <div>
            <!-- <div class="main-title">
                <strong class="d-flex justify-content-center align-items-center">운 잘 알</strong>
            </div> -->
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
    object-fit: cover;
    object-position: center top;
    height: 300px;
    color: #FFF;
    width: 70%;
    background-color: #35435D;
    border-radius: 0.5rem;
}

.main-title {
    font-size: 100px;
    height: 300px;
    z-index: 2;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
}
</style>