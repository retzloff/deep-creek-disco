<script>
	import Stripe from '../components/Stripe.svelte';
	import CountdownTimer from '../components/CountdownTimer.svelte';
	import BoulderHeightsMap from '../components/BoulderHeightsMap.svelte';
</script>

<div class="mx-auto max-w-lg">
	<Stripe />
</div>

<section class="text-slate-200 bg-cloud-burst">
	<img src="./house-front.jpg" class="contrast-75" alt="" />
	<h1 class="">Deep Creek Bears</h1>
	<p class="">October 26th - 30th, 2023</p>
</section>

<section class="bg-anzac">
	<h2>Days to go</h2>
	<CountdownTimer />
</section>

<section class="bg-sirocco">
	<h2>Location</h2>
	<address>
		<div class="pb-2">105 Boulder Ridge Dr, McHenry, MD 21541</div>
		<BoulderHeightsMap />
	</address>
</section>

<section class="bg-swamp-green">
	<h2>Meals and Stuff</h2>
	<div>Coming Soon...</div>
</section>

<div class="mx-auto max-w-lg">
	<Stripe />
</div>

<style>
</style>
