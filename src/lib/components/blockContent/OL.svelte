<script lang="ts">
    let { children } = $props();
</script>
<ol class="list-outside list-decimal ml-7 my-4">
    {@render children()}
</ol>