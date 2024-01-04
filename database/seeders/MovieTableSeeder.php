<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movie = [
            [
                'name' => 'Marvel: End Game',
                'slug' => 'marvel-end-game',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=rrGMENN1iaY',
                'thumbnail' => 'https://static.posters.cz/image/1300/posters/avengers-endgame-journey-s-end-i122136.jpg',
                'rating' => 9,
                'is_featured' => true
            ],
            [
                'name' => 'Spiderman: No Way Home',
                'slug' => 'spiderman-no-way-home',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=JfVOs4VSpmA',
                'thumbnail' => 'https://cinemags.org/wp-content/uploads/2021/11/spider-man-no-way-home.jpg',
                'rating' => 8.9,
                'is_featured' => false
            ],
            [
                'name' => 'Fast and Furious 7',
                'slug' => 'fast-and-furious',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=JfVOs4VSpmA',
                'thumbnail' => 'https://www.tallengestore.com/cdn/shop/products/Fast_Furious_7_-_Paul_Walker_-_Vin_Diesel_-_Dwayne_Johnson_-_Hollywood_Action_Movie_Poster_8a31196b-c4eb-490e-addf-73aa6e27bf01.jpg?v=1582543211',
                'rating' => 8.9,
                'is_featured' => true
            ],
        ];

        Movie::insert($movie);
    }
}
