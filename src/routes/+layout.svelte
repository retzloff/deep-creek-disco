<script>
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import '../app.css';

  injectAnalytics({ mode: dev ? 'development' : 'production' });

  let { children } = $props();
</script>

<svelte:head>
  <title>Deep Creek Bears 2025</title>
</svelte:head>

{@render children()}
