<script lang="ts">
    import classNames from 'classnames';
    export let direction: 'horizental' | 'vertical' = 'horizental';
    export let size: 'mini' | 'small' | 'medium' | 'large' = 'medium';
    export let circle: boolean = false;
    export let bordered: boolean = false;
    export let type: 'primary' | 'default' | 'info' | 'success' | 'warning' | 'danger' = 'default';
</script>

<div
    class={classNames([
        'h-button-group',
        `h-button-group--${type}`,
        `is-${size}`,
        { 'is-circle': circle },
        { 'is-bordered': bordered },
        `is-${direction}`,
    ])}
>
    <slot />
</div>
