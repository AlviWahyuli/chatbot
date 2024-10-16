document.addEventListener('DOMContentLoaded', function () {
    // Animasi masuk untuk body
    gsap.to("body", { duration: 1, opacity: 1, ease: "power2.out" });

    // Animasi masuk untuk section1
    gsap.from("#section1", { duration: 1, opacity: 0, y: 50, ease: "power2.out" });

    // Animasi masuk untuk logo chatbot dengan efek bounce
    gsap.from(".chatbot-logo", { duration: 1, scale: 0.3, opacity: 0, ease: "back.out(1.7)", delay: 0.5 });

    // Animasi munculnya header dan chat container secara bertahap
    gsap.from(".chat-header", { duration: 1, opacity: 0, y: -30, ease: "power2.out", delay: 0.8 });
    gsap.from(".chat-container", { duration: 1, opacity: 0, y: 30, ease: "power2.out", delay: 1 });

    // Animasi teks header chatbot
    gsap.from("h2", { duration: 1, opacity: 0, x: -50, ease: "power2.out", delay: 1.2 });
    gsap.from("p", { duration: 1, opacity: 0, x: -50, ease: "power2.out", delay: 1.4 });

    // Animasi input chat dan tombol kirim
    gsap.from(".chat-input", { duration: 1, opacity: 0, y: 20, ease: "power2.out", delay: 1.6 });
});
