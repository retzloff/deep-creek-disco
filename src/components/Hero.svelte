<script>
	// import house from '$lib/assets/house-back.jpg';
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
</header>

<style>
	header {
		--rounded: 0.5rem;
		color: white;
		background-color: var(--sirocco);
		background-image: url($lib/assets/house-back.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		min-height: 400px;
	}

	.grid {
		display: grid;
		place-items: center;
	}

	.grid > * {
		grid-column: 1/2;
		grid-row: 1/2;
	}

	div {
		margin-inline: 1rem;
		border-radius: var(--rounded);
		padding: 1rem 1.5rem;
		text-align: center;
		background: hsl(0, 0%, 0%, 0.8);
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
</style>
