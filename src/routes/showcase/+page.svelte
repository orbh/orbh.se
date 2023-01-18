<script lang="ts">
	import { expoInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	import eon from '../../assets/eon.jpg';
</script>

<section
	transition:slide={{ easing: expoInOut }}
	class="flex flex-col items-center justify-center border-8 border-slate-800 p-8 rounded-lg"
>
	<h2 class="font-bold text-2xl">Showcase</h2>
	<div class="">
		<a target="_blank" rel="noreferrer" href="https://github.com/orbh/EonDiceRoller">
			<img alt="Eon CLI view" src={eon} />
		</a>
	</div>
</section>
