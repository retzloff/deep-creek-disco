<script>
	import house from '$lib/assets/house-back.jpg';
</script>

<header class="grid">
	<div>
		<h1>Deep Creek Bears <span>2023</span></h1>
		<p>October 26-30, 2023</p>
		<p><a class="cta" href="https://ti.to/deep-creek-bears/2023">Reserve your spot</a></p>
		<p>
			Questions? <a href="mailto:matt@d-domains.net">Send us an email</a>
		</p>
	</div>
	<img src={house} alt="Front of Boulder Heights" />
</header>

<style>
	header {
		--rounded: 0.5rem;
	}

	.grid {
		display: grid;
		gap: 1rem;
		place-items: center;
	}

	.grid > * {
		grid-column: 1/2;
		grid-row: 1/2;
	}

	div {
		text-align: center;
		padding: 1rem 1.5rem;
		background: hsl(0, 0%, 0%, 0.8);
		border-radius: var(--rounded);
	}

	h1 {
		margin: 0;
	}

	a {
		text-decoration: none;
		font-weight: 600;
		color: var(--anzac);
	}

	.cta {
		padding: 0.25rem 0.5rem;
	}

	a:hover {
		text-decoration-line: underline;
	}

	img {
		border-radius: var(--rounded);
		aspect-ratio: 16/9;
		object-fit: cover;
		z-index: -1;
	}
</style>
