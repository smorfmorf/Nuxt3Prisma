<template>
    <header>
        Шапка default Layout
        <NuxtLink to="/about">about =>>> </NuxtLink>
    </header>
    <!-- сюда рендер страниц из папки pages -->
    <!-- основной маршрут -->
    <main>
        <slot />
    </main>
</template>
