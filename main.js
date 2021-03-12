var prevBtn = $('.prev').children('i'),
    nextBtn = $('.next').children('i'),
    elemFirst = $('.first'),
    elemLast = $('.last');

// Onclick btn.prev l' immagine con .active perde la classe .active e la precedente ottiene la classe .active
prevBtn.click(
  function () {

    var elemActive = $('.active');

    elemActive.toggleClass('active');

    if ( elemActive.hasClass('first') == true ) {
      elemLast.toggleClass('active');
    } else {
      elemActive.prev().toggleClass('active');
    }

  });
// Onclick btn.next l' immagine con .active perde la classe .active e la seguente ottiene la classe .active
nextBtn.click(
  function () {

    var elemActive = $('.active');

    elemActive.toggleClass('active');

    if ( elemActive.hasClass('last') == true ) {
      elemFirst.toggleClass('active');
    } else {
      elemActive.next().toggleClass('active');
    }

  });
