<script lang="ts">
    let { children, class: className = '' } = $props();
</script>
<blockquote class="relative pl-8 {className}">
    {@render children()}
</blockquote>