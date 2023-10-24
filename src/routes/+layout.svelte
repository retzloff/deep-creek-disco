<script>
	import '../app.css';

	import Stripe from '../components/Stripe.svelte';
</script>

<div class="min-h-screen">
	<div class="mx-auto max-w-lg">
		<Stripe />
	</div>

	<nav class="h-full mx-auto max-w-lg my-2 text-slate-300 divide-x-2 text-center">
		<a href="/" class="px-4 no-underline">2023</a>
		<a href="/oneshot" class="px-4 no-underline">One Shot</a>
		<a href="/rooms" class="px-4 no-underline">Rooms</a>
	</nav>

	<slot />

	<div class="h-full mx-auto max-w-lg">
		<Stripe />
	</div>
</div>
