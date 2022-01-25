<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('company_name')->nullable();
            $table->string('email')->nullable();
            $table->string('phone_no')->nullable();
            $table->longText('mission')->nullable();
            $table->longText('vission')->nullable();
            $table->longText('why_choose_us')->nullable();
            $table->longText('about')->nullable();
            $table->string('location')->nullable();
            $table->string('facebook')->nullable();
            $table->string('logo')->nullable();
            $table->double('current_balance',10,2)->default(0);
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
        Schema::dropIfExists('companies');
    }
}
