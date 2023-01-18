<script lang="ts">
	import { expoInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
</script>

<section transition:slide={{ easing: expoInOut }} class="border-8 border-slate-800 p-8 rounded-lg ">
	<h1 class="text-4xl font-extrabold">Hello! My name is Olle.</h1>
	<h2 class="text-2xl font-extrabold">Junior Developer</h2>
	<h2 class="text-2xl  font-extrabold">Welcome to my cozy corner of the web!</h2>
</section>
