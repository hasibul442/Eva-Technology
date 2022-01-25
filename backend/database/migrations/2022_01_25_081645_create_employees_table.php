<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('phone_no')->nullable();
            $table->string('address')->nullable();
            $table->string('gender')->nullable();
            $table->string('nid')->nullable();
            $table->string('image')->nullable();
            $table->string('position')->nullable();
            $table->string('status')->nullable();
            $table->string('is_team_member')->default(0);
            $table->date('dob')->nullable();
            $table->date('join_date')->nullable();
            $table->double('basic_salary',10,2)->default(0);
            $table->double('house_rent',10,2)->default(0);
            $table->double('medical',10,2)->default(0);
            $table->double('ta/ma',10,2)->default(0);
            $table->double('yearly_gross',10,2)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
