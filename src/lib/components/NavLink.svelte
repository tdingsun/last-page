<script lang="ts">
    let { href, children } = $props();
</script>

<a {href} class="hover:underline py-2 text-2xl font-light text-center">
    {@render children()}
</a>