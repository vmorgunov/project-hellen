var waiting = new Promise(function (resolve) {
  setTimeout(resolve, 4000);
});
$(window).on('load', function () {
  waiting.then(function () {
    ($preloader = $('.loaderArea')), ($loader = $preloader.find('.loader'));
    $loader.fadeOut();
    $preloader.delay(20000).fadeOut('slow');
  });
});
