$(function() {
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
});