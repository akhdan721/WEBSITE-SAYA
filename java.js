// Simple alert function for "Pelajari Lebih Lanjut" button
function alertMessage() {
  alert("Terima kasih telah mengunjungi bisnis kami!");
}

// Form submission handler
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page refresh
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
    form.reset();
  } else {
    alert("Harap isi semua bidang!");
  }
});
