<script lang="ts">
	import { expoInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
</script>

<section
	transition:slide={{ easing: expoInOut }}
	class="border-8 border-slate-800 p-8 rounded-lg bg-white"
>
	<p class="text-4xl font-extrabold text-slate-800">
		Hello! My name is
		<span class="text-4xl font-extrabold text-sky-500">Olle.</span>
	</p>
	<h2 class="text-2xl font-extrabold text-slate-700">Junior Developer</h2>
	<h2 class="text-2xl  font-extrabold text-slate-600">Welcome to my cozy corner of the web!</h2>
</section>
