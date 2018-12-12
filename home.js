$(document).ready(function(){

  var slideIndex = 1

  var intervalId = setInterval(slideshow, 5000)

  $('h1').css({fontSize: '72px'})
  $('h1').fadeIn(800)

  $('.slideshow-image').click(function(){
    clearInterval(intervalId)
    $('.slideshow-overlay').fadeIn(400)
    $('.slideshow-image').addClass('slideshow-zoom')
  })

  $('.slideshow-overlay').click(function(){
    $('.slideshow-overlay').fadeOut(400)
    $('.slideshow-image').removeClass('slideshow-zoom')
    intervalId = setInterval(slideshow, 5000)
  })

  function slideshow(){
    $('.slideshow-image').fadeOut(400)
    $('.slideshow-image').eq(slideIndex).delay(200).fadeIn(400)
    slideIndex = slideIndex + 1
    if(slideIndex == $('.slideshow-image').length){
      slideIndex = 0
    }
  }

})
