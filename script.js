document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Simple validation check
  const form = e.target;
  const data = {
    team: form.team_name.value,
    p1: form.player1_name.value,
    p1email: form.player1_email.value,
    p2: form.player2_name.value,
    p2email: form.player2_email.value,
    slot: form.slot.value
  };

  if (!data.team || !data.p1 || !data.p1email || !data.p2 || !data.p2email || !data.slot) {
    alert('Please fill all fields!');
    return;
  }

  // Optional: Save data to Google Sheets via webhook or Zapier

  // Redirect to Razorpay payment link
  const paymentURL = "https://rzp.io/l/your-razorpay-link"; // Replace with your real payment URL
  window.location.href = paymentURL;
});
