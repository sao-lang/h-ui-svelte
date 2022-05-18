declare module '*.svelte' {
    import type { SvelteComponentTyped } from "svelte";
    const component: typeof SvelteComponentTyped;
    export default component;
}