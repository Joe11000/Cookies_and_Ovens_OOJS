function Cookie(name, total_bake_time){
  this.name = name;
  this.total_bake_time;

  var current_bake_time = 0;

  this.bake = function(){
    current_bake_time++;
  }

  this.getStatus = function()
  {

    if(current_bake_time === 0)
      return "raw";
    else if(current_bake_time < total_bake_time)
      return "still_gooey";
    else if(current_bake_time === total_bake_time)
      return "just_right";
    else if(current_bake_time <= total_bake_time + 3)
      return "crispy";
    else if(current_bake_time <= total_bake_time + 5)
      return "you done fucked up";
    else
      return "kitchen fire :o";
  }

  this.info = function(){
    console.log("I am a " + name + " with a bake time of " + total_bake_time + ". current bake time is " + current_bake_time);
  }
}

var chocolateChip = new Cookie ("chocolate chip",  4);

var Oven = {
  bakeOneMinute: function() {
    // call .bake on each cookie in oven

  }
}

$(document).ready(function() {
  $('new_batch').on('submit', function(event){
    event.preventDefault

  })
});
 
