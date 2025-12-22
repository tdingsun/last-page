<script lang="ts">
    let { children } = $props();
</script>
<ul class="list-disc left-4 relative flex gap-2 flex-col">
    {@render children()}
</ul>