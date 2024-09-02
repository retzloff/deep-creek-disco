<script>
	import CountdownTimer from '../../components/CountdownTimer.svelte';
</script>

<div class="flex h-screen flex-col justify-center px-4">
	<div
		class="mx-auto w-full max-w-lg space-y-6 rounded-xl border-4 border-orange-800 bg-gradient-to-br from-orange-500 to-orange-800 px-4 py-8 text-center text-white shadow-xl md:px-8"
	>
		<h1 class="text-xl font-semibold sm:text-4xl">Deep Creek Bears 2024</h1>
		<h2 class="text-xl italic sm:text-3xl">October 24 - 28</h2>
		<hr />
		<CountdownTimer />
	</div>
</div>
