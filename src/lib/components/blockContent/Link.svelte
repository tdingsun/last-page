<script lang="ts">
	let { portableText } = $props();

</script>


	<a
		href={portableText.value.href}
		target="_blank"
		class="underline cursor-pointer"
	>
		{portableText.plainTextContent}
	</a>