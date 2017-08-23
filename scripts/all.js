(function () {
  'use strict';

  var duration = 8 * 1000;

  var bgCount = 5;
  var bgIndex = 1;

  var nextBackground = function () {
    var current = bgIndex;
    var next = current + 1;
    if (next >= bgCount) {
      next = 0;
    }
    document.body.classList.remove('bg' + current);
    document.body.classList.add('bg' + next);

    bgIndex = next;

    setTimeout(nextBackground, duration);
  };

  setTimeout(nextBackground, duration);
}());
