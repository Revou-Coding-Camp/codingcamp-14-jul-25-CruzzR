// ========================
// NAVBAR ACTIVE STATE
// ========================
const navLinks = document.querySelectorAll(".nav-item");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// ========================
// HAMBURGER NAV TOGGLE (for responsive)
// ========================
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navLinks");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
}

// ========================
// Hi [Nama] di Halaman Home
// ========================
if (currentPage === "index.html" || currentPage === "") {
  const greetingContainer = document.getElementById("greeting");
  let name = localStorage.getItem("visitorName");

  if (!name) {
    name = prompt("Masukkan namamu:");
    if (name) {
      localStorage.setItem("visitorName", name);
    }
  }

  if (greetingContainer && name) {
    greetingContainer.innerHTML = `Hi <strong>${name}</strong> 👋`;
  }
}

// ========================
// Form Validasi & Tampilkan Input
// ========================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      alert("Semua field harus diisi.");
      return;
    }

    // Waktu saat ini
    const now = new Date();
    const waktu = now.toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const result = document.createElement("div");
    result.classList.add("message-output");
    result.innerHTML = `
      <div class="message-card">
        <p><strong>Waktu:</strong> ${waktu}</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subject}</p>
        <p><strong>Pesan:</strong><br>${message}</p>
      </div>
    `;

    // Efek fade-in
    result.style.opacity = 0;
    contactForm.after(result);
    setTimeout(() => {
      result.style.transition = "opacity 0.5s ease";
      result.style.opacity = 1;
    }, 10);

    contactForm.reset();
  });
}

// ========================
// RESPONSIVE DESIGN HELPER (Optional Debug Logging)
// ========================
window.addEventListener("resize", () => {
  console.log("Ukuran layar sekarang:", window.innerWidth);
});

// ========================
// Placeholder Profile Info
// ========================
if (currentPage === "profile.html") {
  const profileContainer = document.getElementById("profile-info");
  if (profileContainer) {
    profileContainer.innerHTML = `
      <h2>Tentang Saya</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      <ul>
        <li><strong>Nama:</strong> Syahid</li>
        <li><strong>Profesi:</strong> Calon Network Engineer</li>
        <li><strong>Sertifikasi:</strong> CCNA, MTCNA, TOEIC</li>
        <li><strong>Asal:</strong> Pandeglang, Indonesia</li>
      </ul>
    `;
  }
}
