<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChatbotResponseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('chatbot_responses')->insert([
            [
                'question' => 'Apa jam operasional?',
                'answer' => 'Kami buka setiap hari dari jam 08.00 hingga 16.00.',
            ],
            [
                'question' => 'Bagaimana cara mendaftar?',
                'answer' => 'Anda bisa mendaftar melalui aplikasi atau datang langsung ke klinik kami.',
            ],
            [
                'question' => 'Apakah ada layanan konsultasi online?',
                'answer' => 'Ya, kami menyediakan layanan konsultasi online melalui website.',
            ],
        ]);
    }
}
