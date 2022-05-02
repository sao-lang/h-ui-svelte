<script lang="ts">
    import * as Icon from '@icon-park/svg/es';
    export let type: string = '';
    export let size: number | string = '1em';
    export let theme: 'outline' | 'filled' | 'two-tone' | 'multi-color' = 'outline';
    export let spin: boolean = false;
    export let fill: string | string[] = 'currentColor';
    export let strokeLinecap: 'butt' | 'round' | 'square' = 'round';
    export let strokeLinejoin: 'miter' | 'round' | 'bevel' = 'round';
    export let strokeWidth: number = 4;
    const svg = Icon[type]
        ? Icon[type]({ size, theme, spin, fill, strokeLinecap, strokeLinejoin, strokeWidth })
        : '';
</script>

<span>
    {@html svg}
</span>
