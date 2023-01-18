<script lang="ts">
	import { expoInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
</script>

<section transition:slide={{ easing: expoInOut }} />
