<script lang="ts">
	import { expoInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let items = [
		{ name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
		{ name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
		{ name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
		{ name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
		{ name: 'Svelte', link: 'https://svelte.dev/' },
		{ name: 'React', link: 'https://reactjs.org/' },
		{ name: 'SQL', link: 'https://en.wikipedia.org/wiki/SQL' },
		{ name: 'Git', link: 'https://git-scm.com/' },
		{ name: 'Firebase', link: 'https://firebase.google.com/' },
		{
			name: 'Responsive Design',
			link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design'
		},
		{ name: 'Agile Development', link: 'https://en.wikipedia.org/wiki/Agile_software_development' }
	];
</script>

<svelte:head>
	<title>orbh - About</title>
	<meta
		name="description"
		content="I'm a creative junior developer who's trying to make the web more usable, accessible and fun. Currently looking for my first big leap into IT. I've studied the Information Systems programme at Örebro University."
	/>
</svelte:head>

<section
	transition:slide={{ easing: expoInOut }}
	class="flex flex-col gap-3 border-8 border-slate-800 p-4 sm:p-8 rounded-lg md:max-w-3xl bg-white"
>
	<div>
		<h2 class="font-bold text-xl sm:text-3xl text-slate-800">About me</h2>
		<p class="text-md sm:text-lg">
			I'm a creative junior developer who's trying to make the web more usable, accessible and fun.
			Currently looking for my first big leap into IT. I've studied the Information Systems
			programme at Örebro University.
		</p>
	</div>
	<div>
		<h2 class="font-bold text-xl sm:text-3xl text-slate-800">Some things I'm familiar with</h2>
		<ul class="flex gap-4 flex-wrap pt-2 leading-10">
			{#each items as item}
				<li class="hover:-translate-y-1">
					<a
						class="bg-slate-900 text-white text-md sm:text-lg rounded-full py-2 px-4 whitespace-nowrap hover:text-sky-500"
						target="_blank"
						rel="noreferrer"
						href={item.link}>{item.name}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</section>
