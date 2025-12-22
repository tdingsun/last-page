<script lang="ts">
    let { children, class: className = '' } = $props();
</script>
<blockquote class="relative pl-8 mb-4 {className}">
    {@render children()}
</blockquote>