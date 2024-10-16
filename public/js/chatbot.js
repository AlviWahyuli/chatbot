document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('send-button');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Menyimpan status untuk cek apakah ini adalah chat pertama
    let isFirstChat = true;

    sendButton.addEventListener('click', function () {
        const message = chatInput.value.trim();
        if (message !== '') {
            addMessage('Anda', message, 'user');
            chatInput.value = '';

            if (isFirstChat) {
                // Mengirim menu informasi setelah chat pertama
                sendMenuInfo();
                isFirstChat = false;
            } else {
                // Kirim pesan ke server
                sendMessageToServer(message);
            }
        }
    });

    // Tambahkan listener untuk event 'Enter' di input chat
    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });

    // Fungsi untuk mengirim menu informasi
    function sendMenuInfo() {
        const menuMessage = 'Silakan pilih menu informasi:';
        addMessage('Chatbot', menuMessage, 'bot');

        // Tambahkan dropdown pertanyaan
        const dropdown = document.createElement('select');
        dropdown.innerHTML = `
            <option value="">-- Pilih Pertanyaan --</option>
            <option value="Apa jam operasional?">Apa jam operasional?</option>
            <option value="BBagaimana cara mendaftar?">Bagaimana cara mendaftar?</option>
            <option value="Apakah ada layanan konsultasi online?">Apakah ada layanan konsultasi online?</option>
        `;
        
        dropdown.addEventListener('change', function() {
            const selectedQuestion = dropdown.value;
            if (selectedQuestion) {
                addMessage('Anda', selectedQuestion, 'user');
                sendMessageToServer(selectedQuestion); // Kirim pertanyaan yang dipilih
            }
        });

        // Tambahkan dropdown ke chat
        chatMessages.appendChild(dropdown);
    }

    // Fungsi untuk mengirim pesan ke server
    function sendMessageToServer(message) {
        fetch('/chatbot-response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({ question: message })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                addMessage('Chatbot', data.answer, 'bot');
            } else if (data.status === 'not_found') {
                addMessage('Chatbot', 'Maaf, saya tidak mengerti pertanyaan Anda. Coba tanyakan hal lain.', 'bot');
            } else {
                addMessage('Chatbot', 'Maaf, ada masalah dengan chatbot.', 'bot');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            addMessage('Chatbot', 'Maaf, terjadi kesalahan saat memproses permintaan Anda.', 'bot');
        });
    }

    // Fungsi untuk menambahkan pesan ke dalam chat
    function addMessage(sender, text, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', type);
        
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.innerHTML = `<strong>${sender}:</strong> ${text}`;
        
        messageElement.appendChild(messageContent);
        chatMessages.appendChild(messageElement);
        
        // Animasi GSAP untuk pesan masuk
        gsap.from(messageContent, {
            duration: 0.5,
            opacity: 0,
            y: 20,
            ease: "power2.out"
        });

        // Scroll ke bawah setelah pesan ditambahkan
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
