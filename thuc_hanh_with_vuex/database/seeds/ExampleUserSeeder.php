<?php

use Illuminate\Database\Seeder;

class ExampleUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\example_user::class, 10)->create();
    }
}
