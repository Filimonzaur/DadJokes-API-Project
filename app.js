$('.dad-talking').hide();
$('#typing').hide();
$('.dialogue').hide();
setTimeout(()=>{
  $('.dad').hide();
  $('.dad-talking').show();
  $("#typing").show();
  $('.dialogue').show();
  setTimeout(()=>{
    $('.dad-talking').hide();
    $('.dad').removeClass('dadAnimationIn');
    $('.dad').show();
  }, 2300);
},1500);
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://icanhazdadjoke.com",
	"method": "GET",
	"headers": {
    Accept: "text/plain",
	}
};
$('#btn').click(()=>{
  $('#btn').html('Another joke');
  $.ajax(settings).done(function (response) {
        $('.setup').html(response);
    });
  $('#typing').removeClass('typing');
  $('#typing').width();
  $('#typing').addClass('typing');
  $('.dad').hide();
  $('.dad-talking').show();
  setTimeout(()=>{
    $('.dad-talking').hide();
    $('.dad').show();
  }, 2300);
});