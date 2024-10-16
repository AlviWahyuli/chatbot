<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChatbotResponse;

class ChatbotController extends Controller
{
    public function getResponse(Request $request)
    {
        $question = $request->input('question');
        
        // Pastikan pertanyaan cukup panjang untuk relevansi
        if (strlen($question) < 3) {
            return response()->json([
                'status' => 'not_found',
                'answer' => 'Maaf, saya tidak mengerti pertanyaan Anda. Coba tanyakan hal lain.'
            ]);
        }

        // Cari jawaban yang sesuai dari database dengan pencocokan lebih ketat
        $response = ChatbotResponse::where('question', 'LIKE', $question)->first();
        
        if ($response) {
            return response()->json([
                'status' => 'success',
                'answer' => $response->answer
            ]);
        } else {
            return response()->json([
                'status' => 'not_found',
                'answer' => 'Maaf, saya tidak mengerti pertanyaan Anda. Coba tanyakan hal lain.'
            ]);
        }
    }
}
