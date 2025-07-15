// Set today's date as minimum in the date picker
document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("play_date");
  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;

  const slotSelector = document.getElementById("time_slot");

  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 10;
    const endHour = 21;

    for (let h = startHour; h < endHour; h++) {
      if (h === 13) continue; // Skip 1–2 PM
      const start = `${String(h).padStart(2, "0")}:00`;
      const end = `${String(h).padStart(2, "0")}:45`;
      slots.push(`${start} - ${end}`);
    }

    slotSelector.innerHTML = slots
      .map(slot => `<option value="${slot}">${slot}</option>`)
      .join("");
  };

  generateTimeSlots();
});

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    team: form.team_name.value,
    p1: form.player1_name.value,
    p1email: form.player1_email.value,
    p2: form.player2_name.value,
    p2email: form.player2_email.value,
    date: form.play_date.value,
    time: form.time_slot.value
  };

  // Basic validation
  if (Object.values(data).some(val => !val)) {
    alert("Please fill all fields!");
    return;
  }

  // Redirect to Razorpay
  const paymentURL = "https://rzp.io/l/your-razorpay-link"; // <-- Replace this
  window.location.href = paymentURL;
});
