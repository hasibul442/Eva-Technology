<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Servicetech extends Model
{
    use HasFactory;
    protected $table = 'service_technology';
    protected $fillable = ['service_id','tag_name','tag_text_color','tag_bg_color','status'];
}
