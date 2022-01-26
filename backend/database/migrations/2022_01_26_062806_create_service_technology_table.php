<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceTechnologyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_technology', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('service_id');
            $table->string('tag_name')->nullable();
            $table->string('tag_text_color')->nullable();
            $table->string('tag_bg_color')->nullable();
            $table->string('status')->nullable();
            // $table->foreign('service_id')->references('id')->on('services');
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
        Schema::dropIfExists('service_technology');
    }
}
