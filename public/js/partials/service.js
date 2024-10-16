// Fungsi untuk memulai animasi GSAP untuk Section 3
function startGSAPAnimationsForSection3() {
    // Animasi untuk Section 3
    gsap.from(".animate-section3", {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power3.out",
    });

    // Animasi untuk button
    gsap.from(".animate-btn3", {
        duration: 1.5,
        opacity: 0,
        scale: 0.8,
        ease: "power3.out",
        delay: 0.5
    });

    // Animasi untuk service boxes secara staggered
    gsap.from(".animate-card3", {
        duration: 1.5,
        opacity: 0,
        y: 30,
        ease: "power3.out",
        stagger: 0.3
    });
}

// Intersection Observer untuk mendeteksi scroll ke Section 3
document.addEventListener("DOMContentLoaded", function() {
    // Buat observer untuk memantau kapan Section 3 masuk ke viewport
    const observer3 = new IntersectionObserver((entries, observer3) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ketika Section 3 terlihat, mulai animasi GSAP
                startGSAPAnimationsForSection3();
                // Unobserve setelah animasi dimulai agar tidak dipanggil berulang kali
                observer3.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3 // Ketika 30% dari Section 3 terlihat, animasi dimulai
    });

    // Mulai observasi Section 3
    const section3 = document.querySelector("#fasilitas-layanan");
    observer3.observe(section3);
});