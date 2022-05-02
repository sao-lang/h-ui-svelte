declare module '*.svelte' {
    import type { SvelteComponentTyped } from "svelte";
    const component: SvelteComponentTyped<any, any, any>;
    export default component;
}