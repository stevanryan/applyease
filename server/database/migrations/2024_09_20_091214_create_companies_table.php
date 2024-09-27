<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string("name"); 
            $table->string("email")->unique(); 
            $table->string("password"); 
            $table->string("address"); 
            $table->string("country"); 
            $table->string("phone"); 
            $table->string("description")->nullable();
            $table->string("website")->nullable(); 
            $table->string("logo")->nullable();  
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
