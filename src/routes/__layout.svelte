<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import CharNav from '$lib/components/CharNav.svelte';
</script>

<div class="flex flex-col w-full">
	<Header />

	<main>
		<CharNav />
		<slot />
	</main>
</div>
