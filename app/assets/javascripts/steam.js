(function () {
  "use strict";

  var i = 0;
  for (; i < 5; i += 1) {
    setTimeout(function addSmoke() {
      var
        time = Math.random() * 1000 + 3000,
        smoke = $('<div />', {
          class: 'smoke',
          css: {
            opacity: 0,
            left: Math.random() * 175 + 50
          }
        });
      
      // add to steam
      $(smoke).appendTo('#steam');

      // animate
      $.when(
        // animate to 100% opacity in half the time (fade in)
        $(smoke).animate({
          opacity: 1
        }, {
          duration: time / 2,
          easing: 'linear',
          queue: false,
          
          // animate to 0% opacity in the remaining time (fade out)
          complete: function () {
            $(smoke).animate({
              opacity: 0
            }, {
              duration: time / 2,
              easing: 'linear',
              queue: false
            });
          }
        }),

        // animate movement
        $(smoke).animate({
          bottom: $('#steam').height()
        }, {
          duration: time,
          easing: 'linear',
          queue: false
        })

      // when all down, remove and add new random smoke
      ).then(function () {
        $(smoke).remove();
        addSmoke();
      });
    }, Math.random() * 10000);
  }
}());
