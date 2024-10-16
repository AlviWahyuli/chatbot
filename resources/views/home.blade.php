@extends('layouts.app')

@section('title', 'Beranda')

@section('content')
    @include('partials.chatbot')
    @include('partials.profile')
    @include('partials.service')
@endsection
