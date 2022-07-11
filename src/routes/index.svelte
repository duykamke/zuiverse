<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	const TITLE = 'zuiverse';
	const DESCRIPTION = "just zui's stuff";
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={DESCRIPTION} />
	<meta property="og:title" content={TITLE} />
	<meta property="og:description" content={DESCRIPTION} />
	<meta property="og:type" content="website" />
</svelte:head>
