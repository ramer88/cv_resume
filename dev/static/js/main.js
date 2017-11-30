$(document).ready(function () {
  $('.sandwich-menu').click(function() {
    $(this).toggleClass('active');//-добавляем .active к .sandwich-menu
    $('.wrapper-menu').toggle();//-делаем .wrapper-menu видимым т.е. display-block
  });
/*  $('.skillbar-point').mousemove(function() {
    $('.skillbar-point').mousemove();
});*/
/*  function fun1() {
    var rng=document.getElementById('r1');
    var p=document.getElementsById('percent');
    #percent.innerHTML=rng.value;
  };*/

/*  function fun1() {
    var rng = $('#r1');
    $('#percent').html(rng.value);
  };
  */
/*  $( "#r1" ).on( "input", function() {
    var rng = $('#r1');
    $('#percent').html(rng.value);
});*/
/*  $('#r1').mousemove(function() {
    var rng = $('#r1');
    $('#percent').html(rng.value);
});*/
  $('#r1').on('mousemove', fan1);

  function fan1() {
    var rng = $('#r1');
    $('#percent').text( $('#r1').value );
    }
  svg4everybody({});
});

