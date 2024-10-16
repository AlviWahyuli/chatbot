 // Fungsi untuk memulai animasi GSAP
        function startGSAPAnimations() {
            // Animasi untuk Section 2
            gsap.from(".animate-section2", {
                duration: 1.5,
                opacity: 0,
                y: 50,
                ease: "power3.out",
            });

            // Animasi untuk button
            gsap.from(".animate-btn", {
                duration: 1.5,
                opacity: 0,
                scale: 0.8,
                ease: "power3.out",
                delay: 0.5
            });

            // Animasi untuk icon dan text dalam row secara staggered
            gsap.from(".animate-card", {
                duration: 1.5,
                opacity: 0,
                y: 30,
                ease: "power3.out",
                stagger: 0.3
            });
        }

        // Intersection Observer untuk mendeteksi scroll
        document.addEventListener("DOMContentLoaded", function() {
            // Buat observer untuk memantau kapan Section 2 masuk ke viewport
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Ketika Section 2 terlihat, mulai animasi GSAP
                        startGSAPAnimations();
                        // Unobserve setelah animasi dimulai agar tidak dipanggil berulang kali
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.3 // Ketika 30% dari Section 2 terlihat, animasi dimulai
            });

            // Mulai observasi Section 2
            const section2 = document.querySelector("#tentang-kami");
            observer.observe(section2);
        });
