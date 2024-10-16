@extends('layouts.app')

@section('title', 'Profil')

@push('styles')
    <link href="{{ asset('css/profil.css') }}" rel="stylesheet">
@endpush

@section('content')
    <h1>Profil Kami</h1>
    <p>Informasi tentang profil perusahaan.</p>
@endsection
