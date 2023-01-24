<script lang="ts">
	import '../app.css';
</script>

<div class="bg-slate-100 min min-h-screen min-w-full flex flex-col antialiased text-slate-700">
	<header class="flex flex-row gap-5 px-6 py-3 bg-white border-b border-slate-900/10">
		<div class="flex-grow">
			<a href="/" class="text-3xl font-bold whitespace-nowrap hover:text-sky-500">
				Olle Goblirsch
			</a>
		</div>
		<nav class="flex items-center gap-4">
			<span>
				<a href="/" class="text-xl font-bold hover:text-sky-500"> Home </a>
			</span>
			<span>
				<a href="/about" class="text-xl font-bold hover:text-sky-500"> About </a>
			</span>
			<span>
				<a href="/showcase" class="text-xl font-bold hover:text-sky-500"> Showcase </a>
			</span>
		</nav>
	</header>

	<main class="flex flex-grow flex-col justify-center items-center p-4">
		<slot />
	</main>

	<footer class="flex items-center justify-between px-4 py-2 bg-white border-t border-slate-900/10">
		<div class="text-sm">© Olle Goblirsch. All rights reserved.</div>
		<div class="flex gap-5">
			<a
				class="flex justify-center items-center w-8 h-8"
				href="https://github.com/orbh/"
				rel="noopener noreferrer"
				target="_blank"
				title="My github page"
			>
				<svg
					class="fill-slate-900 hover:scale-125 hover:fill-sky-500"
					viewBox="0 0 98 96"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
					/>
				</svg>
			</a>
			<a
				class="flex justify-center items-center w-8 h-8"
				href="mailto:olle.goblirsch@gmail.com"
				rel="noopener noreferrer"
				target="_blank"
				title="Send me an Email!"
			>
				<svg
					class="fill-slate-900 hover:scale-125 hover:fill-sky-500"
					aria-hidden="true"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10.6904 13.0037C11.5174 13.4049 12.4826 13.4049 13.3096 13.0037L24 7.81666V17.9379C24 19.0425 23.1046 19.9379 22 19.9379H2C0.89543 19.9379 0 19.0425 0 17.9379V11.9982V7.81667L10.6904 13.0037ZM12.4365 11.2043C12.1609 11.338 11.8391 11.338 11.5635 11.2043L0.630667 5.89969C-0.324518 5.43623 0.00549698 4 1.06721 4H22.9328C23.9945 4 24.3245 5.43623 23.3693 5.89969L12.4365 11.2043Z"
					/>
				</svg>
			</a>
		</div>
	</footer>
</div>
