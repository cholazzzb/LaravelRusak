<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function author()
    {
        return $this->belongsTo(User::Class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
