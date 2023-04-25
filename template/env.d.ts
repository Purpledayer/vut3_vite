/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}