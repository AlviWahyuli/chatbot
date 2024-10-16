<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'UPTD Puskesmas Gubug I')</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Animate.css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" integrity="sha384-...your_hash..." crossorigin="anonymous" />
    <!-- CSS Kustom per Section -->    
    <link rel="stylesheet" href="{{ asset('css/partials/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/partials/chatbot.css') }}">
    <link rel="stylesheet" href="{{ asset('css/partials/profile.css') }}">
    <link rel="stylesheet" href="{{ asset('css/partials/service.css') }}">
    <link rel="stylesheet" href="{{ asset('css/partials/footer.css') }}"> 
    <link rel="stylesheet" href="{{ asset('css/profil.css') }}"> 
    <link rel="stylesheet" href="{{ asset('css/layanan.css') }}">  
    <link rel="stylesheet" href="{{ asset('css/kontak.css') }}">  
</head>
<body>
    <!-- Konten Navbar -->
    @include('partials.navbar')
    <!-- Konten Halaman -->
    <div class="container mt-4">
        @yield('content')
    </div>

    <!-- Footer -->
    @include('partials.footer')

    <!-- Bootstrap JS dan dependencies -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Feather Icons JS -->
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    <script>
        // Inisialisasi Feather Icons
        feather.replace()
    </script>

    <!-- GSAP Library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <!-- GSAP dan ScrollTrigger untuk Animasi Footer -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>

    <!-- Sciprt JS -->
    <script src="{{ asset('js/chatbot.js') }}"></script>
    <script src="{{ asset('js/partials/hero.js') }}"></script>
    <script src="{{ asset('js/partials/profile.js') }}"></script>
    <script src="{{ asset('js/partials/service.js') }}"></script>
    <script src="{{ asset('js/partials/footer.js') }}"></script>
</body>
</html>
