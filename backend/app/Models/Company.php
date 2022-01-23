<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;
    protected $table = 'companies';
    protected $fillable = [
        'company_name',
        'email',
        'phone_no',
        'mission',
        'vission',
        'why_choose_us',
        'about',
        'location',
        'facebook',
        'logo',
        'current_balance',
    ];
}
