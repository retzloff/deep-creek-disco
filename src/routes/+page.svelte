<script>
  import BearStripe from '$lib/components/BearStripe.svelte';

  // Declare countdown variables as state
  let months = $state(0);
  let weeks = $state(0);
  let days = $state(0);

  $effect(() => {
    const eventDate = new Date('2025-10-23');
    const now = new Date();

    // Calculate months until October
    let monthDiff = (eventDate.getFullYear() - now.getFullYear()) * 12;
    monthDiff += eventDate.getMonth() - now.getMonth();
    months = monthDiff;

    // Calculate total days between now and the event
    const totalDays = Math.floor((eventDate - now) / (1000 * 60 * 60 * 24));
    // Subtract approximate days for the months we've counted
    const remainingDays = totalDays - monthDiff * 30;

    weeks = Math.floor(remainingDays / 7);
    days = remainingDays % 7;
  });
</script>

<div class="min-h-screen bg-navy-900 text-bear-white flex flex-col py-4">
  <BearStripe />

  <main class="flex-1 flex items-center bg-navy-800">
    <div class="w-full py-8 flex flex-col">
      <div class="text-center">
        <h1
          class="text-5xl font-bold mb-4 bg-gradient-to-b from-bear-gold to-bear-orange-brown inline-block text-transparent bg-clip-text"
        >
          Deep Creek Bears 2025
        </h1>
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
    </div>
  </main>

  <BearStripe />
</div>
