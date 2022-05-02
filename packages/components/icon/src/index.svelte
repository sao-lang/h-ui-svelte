<script lang="ts">
    import classnames from 'classnames';
    import * as Icon from '@icon-park/svg/es';
    export let loading: boolean = false;
    export let type: string = '';
    export let size: number | string = '1em';
    export let theme: 'outline' | 'filled' | 'two-tone' | 'multi-color' = 'outline';
    export let spin: boolean = false;
    export let fill: string | string[] = 'currentColor';
    export let strokeLinecap: 'butt' | 'round' | 'square' = 'round';
    export let strokeLinejoin: 'miter' | 'round' | 'bevel' = 'round';
    export let strokeWidth: number = 4;
    const newType = loading ? 'LoadingFour' : type;
    const svg = Icon[newType]
        ? Icon[newType]({ size, theme, spin, fill, strokeLinecap, strokeLinejoin, strokeWidth })
        : '';
    $: iconSize = typeof size === 'number' ? size + 'px' : size;
</script>

<span>
    {#if loading || !!type}
        <span
            class={classnames(['h-icon', { 'is-loading': loading }])}
            style={`width: ${iconSize}; height: ${iconSize};`}
        >
            {@html svg}
        </span>
    {/if}
</span>
