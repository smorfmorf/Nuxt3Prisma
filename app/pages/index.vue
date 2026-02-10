<script setup lang="ts">
import Test from "~/components/Test.vue";
</script>

<template>
    <!-- тут дефолтный layout -->
    <div>
        <ClientOnly>
            <Suspense>
                <template #default>
                    <Test />
                </template>

                <template #fallback>
                    <div>Загрузка...</div>
                </template>
            </Suspense>
        </ClientOnly>
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
