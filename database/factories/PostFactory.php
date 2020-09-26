<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'author_id' => $faker->name,
        'title' => $faker->text,
        'content' => $faker->text,
    ];
});
