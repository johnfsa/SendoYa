$(function() {
  setTimeout(function(){
		$('#start').fadeOut(500);
	},100);

  $(".theTarget").skippr({
    transition : 'slide',
    speed : 1000,
    easing : 'easeOutQuart',
    navType : 'none',
    childrenElementType : 'div',
    arrows : false,
    autoPlay : true,
    autoPlayDuration : 3500,
    keyboardOnAlways : true,
    hidePrevious : false
  });

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

});