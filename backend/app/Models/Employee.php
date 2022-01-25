<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $table = 'employees';
    protected $fillable = ['name','email','phone_no','address','gender','nid','image','position','status','is_team_member','dob','join_date','basic_salary','house_rent','medical','ta/ma','yearly_gross'];
}
