<script lang="ts">
	import { expoInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	import eon from '../../assets/eon.jpg';
	import orbh from '../../assets/orbh.se.jpg';

	let projects = [
		{
			name: 'EonDiceRoller',
			link: 'https://github.com/orbh/EonDiceRoller',
			description:
				'Basic portfolio website. Made primarily with SvelteKit, TypeScript and Tailwind CSS, ESLint and Prettier.',
			keywords: ['Python', 'Command-line App', '.CSV'],
			image: { link: eon, altText: 'Eon CLI view' }
		},
		{
			name: 'orbh.se',
			link: 'https://github.com/orbh/orbh.se',
			description:
				'Basic portfolio website. Made primarily with SvelteKit, TypeScript and Tailwind CSS, ESLint and Prettier.',
			keywords: ['SvelteKit', 'TypeScript', 'Tailwind CSS'],
			image: { link: orbh, altText: 'Source code for website' }
		}
	];
</script>

<section
	transition:slide={{ easing: expoInOut }}
	class="flex gap-4 items-center justify-center flex-wrap"
>
	{#each projects as project}
		<div
			class="flex flex-col justify-center items-center border-8 border-slate-800 rounded-lg gap-1 max-w-md"
		>
			<a title="Visit on Github" target="_blank" rel="noreferrer" href={project.link}>
				<img alt={project.image.altText} src={project.image.link} />
			</a>
			<div class="flex flex-col gap-1 px-4">
				<a title="Visit on Github" target="_blank" rel="noreferrer" href={project.link}>
					<h3 class="font-bold text-2xl">{project.name}</h3>
				</a>
				<p>{project.description}</p>
				<ul class="flex gap-4 py-2">
					{#each project.keywords as keywords}
						<li
							class="bg-slate-400 rounded-full px-2 border-slate-800 border-2 hover:-translate-y-1"
						>
							{keywords}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/each}
</section>
