@extends('layouts.app')

@section('title', 'Kontak')

@push('styles')
    <link href="{{ asset('css/kontak.css') }}" rel="stylesheet">
@endpush

@section('kontak')
    <h1>Kontak Kami</h1>
    <p>Informasi kontak dan formulir kontak.</p>
@endsection
