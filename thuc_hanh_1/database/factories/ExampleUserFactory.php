<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\example_user;
use Faker\Generator as Faker;

$factory->define(example_user::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'address' => $faker->address,
        'phone' => $faker->phoneNumber,
        'image' => 'bai_bien.jpg',
        'date' => new DateTime,
        'email' => $faker->unique()->safeEmail,
        'gender' => 1,
        'created_at' => new DateTime,
        'updated_at' => new DateTime
    ];
});
