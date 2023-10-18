<script>
	import '../app.css';

	import Stripe from '../components/Stripe.svelte';
</script>

<div class="min-h-screen">
	<div class="mx-auto max-w-lg">
		<Stripe />
	</div>
	<slot />
	<div class="h-full mx-auto max-w-lg">
		<Stripe />
	</div>
</div>
