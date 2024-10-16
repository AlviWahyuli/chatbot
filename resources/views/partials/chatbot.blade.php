    <!-- Section 1: Chatbot dan Layanan Informasi -->
    <section id="section1" class="d-flex align-items-center justify-content-center" style="height: 100vh;">
        <div class="container">
            <div class="row align-items-center">
                <!-- Kolom Kiri: Logo Chatbot -->
                <div class="col-md-6 text-center mb-4 mb-md-0">
                    <img src="{{ asset('images/logo-chatbot.png') }}" alt="Logo Chatbot" class="img-fluid chatbot-logo">
                </div>
                <!-- Kolom Kanan: Informasi Layanan dan Chat -->
                <div class="col-md-6">
                    <h2 class="mb-3">Layanan Informasi</h2>
                    <p class="mb-4">Kami menyediakan layanan chatbot untuk membantu Anda dengan cepat dan efisien. Chatbot kami siap menjawab pertanyaan Anda kapan saja.</p>
                    <!-- Layout Chat -->
                    <div class="chat-container">
                        <div class="chat-header">
                            <h5>Customer Service Chatbot</h5>
                        </div>
                        <div class="chat-messages" id="chat-messages">
                            <!-- Pesan Chat akan ditampilkan di sini -->
                        </div>
                        <div class="chat-input">
                            <input type="text" id="chat-input" placeholder="Ketik pesan Anda..." class="form-control">
                            <button id="send-button" class="btn btn-primary mt-2">Kirim</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
