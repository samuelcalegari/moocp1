var instances = plyr.setup({controls : ['play-large', 'play', 'progress', 'current-time', 'captions']});

$(function() {

  var owl = $('.owl-carousel');

  owl.owlCarousel({
    addClassActive: true,
    loop:true,
    margin:50,
    center:true,
    nav:true,
    navText: [
      '<i class=\'glyphicon glyphicon-menu-left\'></i>',
      '<i class=\'glyphicon glyphicon-menu-right\'></i>'
    ],
    responsive:{
      0:{
        items:1
      },
      1000:{
        items:2
      }
    }
  });

  owl.on('changed.owl.carousel', function(event) {

    plyr.get().forEach(function(instance) {
      instance.pause();
    });

    var currentItem = event.page.index;
    instances[currentItem].play();
  })

});




