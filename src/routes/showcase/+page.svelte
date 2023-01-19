<script lang="ts">
	import { expoInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	import eon from '../../assets/eon.jpg';
	import orbh from '../../assets/orbh.se.jpg';

	let projects = [
		{
			name: 'orbh.se',
			link: 'https://github.com/orbh/orbh.se',
			description:
				'Basic static portfolio website. Made primarily with tools such as SvelteKit, TypeScript and Tailwind CSS.',
			keywords: ['SvelteKit', 'TypeScript', 'Tailwind CSS'],
			image: { link: orbh, altText: 'Source code for website' }
		},
		{
			name: 'EonDiceRoller',
			link: 'https://github.com/orbh/EonDiceRoller',
			description: `CLI written in Python and designed to be used with the swedish TTRPG Eon. It's current functions are generating a .CSV-file with generated rolls and automatically calculating improvement rolls.`,
			keywords: ['Python', 'Command-line App', '.CSV'],
			image: { link: eon, altText: 'Eon CLI view' }
		}
	];
</script>

<section transition:slide={{ easing: expoInOut }} class="flex justify-center gap-5 flex-wrap">
	{#each projects as project}
		<div class="flex flex-col max-w-md border-8 border-slate-800 rounded-lg bg-white">
			<a title="Visit on Github" target="_blank" rel="noreferrer" href={project.link}>
				<img alt={project.image.altText} src={project.image.link} />
			</a>
			<div class="flex flex-col flex-1 px-4">
				<div class="flex flex-col flex-grow">
					<a title="Visit on Github" target="_blank" rel="noreferrer" href={project.link}>
						<h3 class="font-bold text-2xl">{project.name}</h3>
					</a>
					<p>{project.description}</p>
				</div>
				<div>
					<ul class="flex gap-2 py-2">
						{#each project.keywords as keywords}
							<li class="bg-slate-200 rounded-full px-2 py-1 hover:-translate-y-1">
								{keywords}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	{/each}
</section>
