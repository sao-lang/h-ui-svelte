<script lang="ts">
    import { Icon, Button, ButtonGroup } from '@h-ui-svelte/components/index';
</script>

<main>
    <div>
        <h3>Icon</h3>
        <Icon
            type="LoadingThree"
            theme="multi-color"
            size="24"
            fill={['#f61689', '#3d1e44', '#415294', '#3dda87']}
            strokeLinecap="butt"
        />
        <Icon loading />
    </div>
    <div>
        <h3>Button</h3>
        <h4>不同类型</h4>
        <Button loading plain type="primary">primary</Button>
    </div>
    <div>
        <h3>ButtonGroup</h3>
        <div style="margin: 30px;">
            <ButtonGroup size="small" type="primary" circle bordered direction="vertical">
                <Button>1234</Button>
                <Button type="warning" round>34132</Button>
                <Button type="primary" text round>343543</Button>
            </ButtonGroup>
            <ButtonGroup size="small" type="primary" circle bordered direction="horizental">
                <Button>1234</Button>
                <Button type="warning" round>34132</Button>
                <Button type="primary" text round>343543</Button>
            </ButtonGroup>
        </div>
    </div>
</main>

<style>
</style>
