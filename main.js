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

  addTrayToOven: function(prep_index) {
    var cookie = this.cookies[prep_index];
    this.cookies.splice(prep_index, 1)

    console.log(cookie);
    Oven.insertCookies();

    prep_index++;
    var list_item = "#prep_batches li:nth-child(" + prep_index + ")";
    $(list_item).remove();

  },

  prepareCookies: function(cookie) {
    this.cookies.push(cookie);
    console.log(this.cookies);
    var list_item = "<li>" + cookie.name + "<button class='putinoven'>Add to oven!</button></li>"
    $("#prep_batches").append(list_item);
  }
}


var Oven = {
  cookies: [],

  bakeOneMinute: function() {

    for (var i = 0; i < this.cookies.length; i++)
    {
       this.cookies[i].bake();
       this.cookies[i].info();
    }
  },

  insertCookies: function(cookie) {
    this.cookies.push(cookie);
  }
}


$(document).ready(function() {

  // clicking on "make batch"
  $('#new_batch').on('submit', function(event){
    event.preventDefault();
    var cookieInput = $('#new_batch > input');
    var cookieName = cookieInput[0].value;
    var cookieTime = cookieInput[1].value;
    var newCookie = new Cookie (cookieName, cookieTime);

    Table.prepareCookies(newCookie);

    // Clear form
    cookieInput[0].value = "";
    cookieInput[1].value = 0;

  });

  // clicking on "add to oven"
  $('body').on('click', '.putinoven', function(event){
     event.preventDefault();
     var prep_index = $(this).parent().index();

     Table.addTrayToOven(prep_index);
  })


});
