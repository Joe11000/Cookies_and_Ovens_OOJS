OVENSIZE = 3;

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
    console.log( name + ":  " + current_bake_time + " of " + total_bake_time + " min. Status: " + this.getStatus());
  }
}

var Table = {
  cookies: [],

  addTrayToOven: function() {

  },

  prepareCookies: function(cookie) {
    this.cookies.push(cookie);
    console.log(this.cookies);
    // jquery cookie name and a button to put
    // cookies on table into oven
    var list_item = "<li>" + cookie.name + "<button class='putinoven'>Add to oven!</button></li>"
    $("#prep_batches").append(list_item);


  }
}


$(document).ready(function() {
  $('#new_batch').on('submit', function(event){
    event.preventDefault();
    var cookieInput = $('#new_batch > input');
    var cookieName = cookieInput[0].value;
    var cookieTime = cookieInput[1].value;
    var newCookie = new Cookie (cookieName, cookieTime);

    Table.prepareCookies(newCookie);

    // Clear
    cookieInput[0].value = "";
    cookieInput[1].value = 0;

  });
});
