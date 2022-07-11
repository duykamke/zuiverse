<script lang="ts">
	import { page } from '$app/stores';
	const alphabeticalSections: Record<string, Array<{ name: string; link: string }>> = {
		A: [
			{
				name: 'about me',
				link: '/about'
			},
		],
		B: [
			{
				name: 'bout me',
				link: '/about'
			},
		],
		C: [],
		D: [],
		E: [],
		F: [],
		G: [],
		H: [],
		I: [],
		J: [],
		K: [],
		L: [],
		M: [],
		N: [],
		O: [],
		P: [],
		Q: [],
		R: [],
		S: [],
		T: [],
		U: [],
		V: [],
		W: [],
		X: [],
		Y: [],
		Z: []
	};

	const dropDownStringLength = (dropDownStrings: string[]) => {
		let length = 0;
		dropDownStrings.forEach((s, i) => {
			length = length + s.length;
			if (i < dropDownStrings.length - 1) {
				length = length + 2;
			}
		});
		return length;
	};
</script>

<ul class="w-full inline-flex justify-between">
	{#each Object.entries(alphabeticalSections) as [character, sections], alphabeticalSectionIndex (alphabeticalSectionIndex)}
		<li class="flex p-2 group">
			<h4 class="relative">
				<span class="cursor-pointer">{character}</span>
				<span
					class="
                    inline-flex
                    divide-x-2
                    divide-yellow-300
                    absolute
                    -left-1
                    z-50
                    transform-gpu
                    rotate-90
                    origin-bottom-left
                    overflow-x-hidden
                    whitespace-nowrap
                    transition-width
                    ease-linear
                    duration-300
                    w-0
                    group-hover:w-[13ch]"
				>
					{#each sections as { name, link }, sectionIndex}
						{#if sectionIndex < 1}
							<a class="px-1 hover:text-yellow-300" href={link}>
								{name.substring(1)}
							</a>
						{:else}
							<a class="px-1 hover:text-yellow-300" href={link}>
								{name}
							</a>
						{/if}
					{/each}
				</span>
			</h4>
		</li>
	{/each}
</ul>
