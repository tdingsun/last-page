<script lang="ts">
    let { children } = $props();
</script>
<li class="mb-2 pl-2 pr-4">
    <div>
        {@render children()}
    </div>
</li>