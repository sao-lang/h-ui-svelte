<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import Icon from '../../icon';
    import classNames from 'classnames';
    export let type: 'primary' | 'default' | 'info' | 'success' | 'warning' | 'danger' = 'default';
    export let size: 'mini' | 'small' | 'medium' | 'large' = 'medium';
    export let text: boolean = false;
    export let loading: boolean = false;
    export let round: boolean = false;
    export let circle: boolean = false;
    export let dashed: boolean = false;
    export let solid: boolean = false;
    export let block: boolean = false;
    export let disabled: boolean = false;
    export let textColor: string = '';
    export let backgroundColor: string = '';
    export let borderColor: string = '';
    export let plain: boolean = false;
    const dispatch = createEventDispatcher();
    const handleClick = (e: MouseEvent): void => {
        dispatch('click', e);
    };
</script>

<button
    class={classNames([
        'h-button',
        `h-button--${type}`,
        `is-${size}`,
        { 'is-block': block },
        { 'is-round': round },
        { 'is-circle': circle },
        { 'is-text': text },
        { 'is-solid': solid },
        { 'is-dashed': dashed },
        { 'is-disabled': disabled },
    ])}
    on:click={handleClick}
    style={`color: ${textColor}; background-color: ${backgroundColor}; border-color: ${borderColor}; box-shadow: ${
        plain ? 'none' : ''
    };`}
>
    {#if loading}
        <Icon
            loading
            size={20}
            fill={disabled ? '#aaa' : type && type !== 'default' ? '#fff' : '#000'}
        />
    {/if}
    <span class="h-button__inner">
        <slot name="icon" />
    </span>
    <span class="h-button__inner"> <slot /></span>
</button>
