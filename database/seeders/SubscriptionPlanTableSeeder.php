<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 500000,
                'active_period_in_month' => 3,
                'features' => json_encode(['feature 1', 'feature 2']),
            ],
            [
                'name' => 'Premium',
                'price' => 1000000,
                'active_period_in_month' => 9,
                'features' => json_encode(['feature 3', 'feature 4', 'feature 5', 'feature 6']),
            ],

        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
