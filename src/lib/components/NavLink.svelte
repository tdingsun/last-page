<script lang="ts">
    let { href, children } = $props();
</script>

<a {href} class="hover:underline">
    {@render children()}
</a>