<template>
    <!-- тут дефолтный layout -->
    <div>
        <h1>Главная страница</h1>
        <hr />
        <PlusModalLink to="/info">Товар 1 info </PlusModalLink>
        <!-- параллельный/модальный контент -->
        <PlusModalPage name="my-modal" />
    </div>
</template>
<style lang="scss">
h1 {
    @include Title;
}
</style>
