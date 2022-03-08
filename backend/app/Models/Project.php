<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $table = 'projectes';
    protected $fillable = ['client_name','client_company_name','phone_no','email','location','company_logo','project_name','work_order_price','received_amount','start_date','end_date','status','description','duration'];
}
