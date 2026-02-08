// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    modules: ["@nuxt/fonts", "@nuxt/image", "@pinia/nuxt", // "@prisma/nuxt",

        "@vueuse/nuxt", "nuxt-pages-plus"],
    // "dayjs-nuxt",
    // "nuxt-typed-router",
    //"nuxt-file-storage",
    fonts: {
        families: [{ name: "Nunito", provider: "google" }],
    },
    css: ["/scss/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "/scss/_mixins.scss" as *;`,
                },
            },
        },
    },
});