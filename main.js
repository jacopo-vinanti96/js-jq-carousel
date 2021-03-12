var prevBtn = $('.prev').children('i'),
    nextBtn = $('.next').children('i'),
    elemFirst = $('.first'),
    elemLast = $('.last');

// Onclick btn.prev l' immagine con .active perde la classe .active e la precedente ottiene la classe .active
prevBtn.click(
  function () {

    var elemActive = $('.active');

    if ( elemActive.hasClass('.first') == true ) {

    } else {
      elemActive.toggleClass('active');
      elemActive.prev().toggleClass('active');
    }
  });
// Onclick btn.next l' immagine con .active perde la classe .active e la seguente ottiene la classe .active
nextBtn.click(
  function () {

    var elemActive = $('.active')

    elemActive.toggleClass('active');
    elemActive.next().toggleClass('active');
  });
