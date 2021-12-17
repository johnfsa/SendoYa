$(function() {
  setTimeout(function(){
		$('#start').fadeOut(500);
	},100);

  $('#gourmetBinTrigger').on('click', function(event) {
    $('#popUpBackground').fadeIn();
    $('#popUpGourmetBin').fadeIn();
    event.preventDefault();
  });

  $('#coTangoTrigger').on('click', function(event) {
    $('#popUpBackground').fadeIn();
    $('#popUpCoTango').fadeIn();
    event.preventDefault();
  });

  $('#guildTrigger').on('click', function(event) {
    $('#popUpBackground').fadeIn();
    $('#popUpGuild').fadeIn();
    event.preventDefault();
  });

  $('#himitsukichiTrigger').on('click', function(event) {
    $('#popUpBackground').fadeIn();
    $('#popUpHimitsukichi').fadeIn();
    event.preventDefault();
  });

  $('#popUpBackground').on('click', function(event) {
    $('#popUpBackground').fadeOut();
    $('.popUp').fadeOut();
    event.preventDefault();
  });

  $('.closePopUp').on('click', function(event) {
    $('#popUpBackground').fadeOut();
    $('.popUp').fadeOut();
    event.preventDefault();
  });

 $('a[href^="#"]').on('click', function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop: position}, 550, "swing");
    return false;
  });
});