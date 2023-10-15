<script>
	import Stripe from '../components/Stripe.svelte';
	import CountdownTimer from '../components/CountdownTimer.svelte';
	import BoulderHeightsMap from '../components/BoulderHeightsMap.svelte';
</script>

<div class="mx-auto max-w-lg">
	<Stripe />
</div>

<section class="text-slate-200 bg-cloud-burst">
	<div class="">
		<img src="./house-front.jpg" class="contrast-75" alt="" />
	</div>
	<div>
		<h1>Deep Creek Bears</h1>
		<p class="text-xl">October 26th - 30th, 2023</p>
	</div>
</section>

<section class="bg-anzac light">
	<h2>Countdown</h2>
	<CountdownTimer />
</section>

<section class="bg-sirocco">
	<h2>Rooms - We still have some</h2>
	<p>
		<a href="mailto:matt@d-domains.net">Send us an email</a>
		if you're interested or pass this on if you know someone who would be. The price is $360 per person.
		We currently have one single and one double available.
	</p>
</section>

<section class="bg-selective-yellow light">
	<h2>The House</h2>
	<p>Check-in: Thursday at 4pm.</p>
	<p>Check-out: Monday at 12pm.</p>
	<address>
		<div class="pb-2">105 Boulder Ridge Dr, McHenry, MD 21541</div>
		<BoulderHeightsMap />
	</address>
</section>

<section class="bg-swamp-green">
	<h2>Meals</h2>
	<div>Coming Soon...</div>
</section>

<div class="mx-auto max-w-lg">
	<Stripe />
</div>

<style>
</style>
