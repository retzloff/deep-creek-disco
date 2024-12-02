<script>
  import BearStripe from '$lib/components/BearStripe.svelte';
  let email = $state('');

  // Declare countdown variables as state
  let months = $state(0);
  let weeks = $state(0);
  let days = $state(0);

  $effect(() => {
    const eventDate = new Date('2025-10-23');
    const now = new Date();
    const diffTime = Math.max(eventDate - now, 0);

    months = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44));
    const remainingDays = diffTime % (1000 * 60 * 60 * 24 * 30.44);

    weeks = Math.floor(remainingDays / (1000 * 60 * 60 * 24 * 7));
    days = Math.floor((remainingDays % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  });

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Implement email signup logic
    console.log('Email submitted:', email);
  };
</script>

<div class="min-h-screen bg-navy-900 text-bear-white flex flex-col py-4">
  <BearStripe />

  <main class="flex-1 flex items-center bg-navy-800">
    <div class="w-full py-8 flex flex-col">
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-4 text-bear-gold">Deep Creek Bears 2025</h1>
        <p class="text-2xl mb-8 text-bear-cream">23-27 October 2025</p>
      </div>

      <div class="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
        <div
          class="bg-bear-dark-brown/40 p-6 rounded-lg border border-bear-orange-brown/30 text-center"
        >
          <span class="text-4xl font-bold text-bear-gold">{months}</span>
          <p class="text-bear-cream">Months</p>
        </div>
        <div
          class="bg-bear-dark-brown/40 p-6 rounded-lg border border-bear-orange-brown/30 text-center"
        >
          <span class="text-4xl font-bold text-bear-gold">{weeks}</span>
          <p class="text-bear-cream">Weeks</p>
        </div>
        <div
          class="bg-bear-dark-brown/40 p-6 rounded-lg border border-bear-orange-brown/30 text-center"
        >
          <span class="text-4xl font-bold text-bear-gold">{days}</span>
          <p class="text-bear-cream">Days</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} class="max-w-md mx-auto">
        <p class="text-bear-cream mb-4">Stay updated with the latest news and announcements!</p>
        <div class="flex gap-2">
          <input
            type="email"
            bind:value={email}
            placeholder="Email address"
            class="flex-1 px-4 py-2 rounded-l-lg bg-bear-gray/20 border border-bear-orange-brown
                           placeholder-bear-cream/50 text-bear-cream
                           focus:outline-none focus:border-bear-gold focus:ring-1 focus:ring-bear-gold
                           disabled:opacity-50 disabled:cursor-not-allowed"
            required
            disabled
          />
          <button
            type="submit"
            class="px-6 py-2 bg-bear-orange-brown hover:bg-bear-dark-brown rounded-r-lg transition-colors
                           text-bear-cream hover:text-bear-gold
                           disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-bear-orange-brown disabled:hover:text-bear-cream"
            disabled
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </main>

  <BearStripe />
</div>
