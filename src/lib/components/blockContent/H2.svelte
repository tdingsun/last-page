<script lang="ts">
    let { children, class: className = '' } = $props();
</script>
<h3 class="relative not-last:mb-4 font-bold {className}">
    {@render children()}
</h3>