<script>
	let targetDate = new Date('2024-10-24T16:00:00').getTime();
	let timeLeft = calculateTimeLeft();

	function calculateTimeLeft() {
		const currentDate = new Date().getTime();
		const timeDifference = targetDate - currentDate;

		if (timeDifference <= 0) {
			return {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			};
		}

		const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			.toString()
			.padStart(2, '0');
		const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
			.toString()
			.padStart(2, '0');
		const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
			.toString()
			.padStart(2, '0');

		return {
			days,
			hours,
			minutes,
			seconds
		};
	}

	const timerInterval = setInterval(() => {
		timeLeft = calculateTimeLeft();
		if (
			timeLeft.days === 0 &&
			timeLeft.hours === 0 &&
			timeLeft.minutes === 0 &&
			timeLeft.seconds === 0
		) {
			clearInterval(timerInterval);
		}
	}, 3_600_000); // Update hourly
</script>

<div class="text-lg font-semibold text-white/90 sm:text-xl">
	{timeLeft.days} days to go
	<!-- {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s -->
</div>
