var bullet = $('.fas.fa-circle'),
    elemFirst = $('.first'),
    elemLast = $('.last'),
    nextBtn = $('.next').children('i'),
    prevBtn = $('.prev').children('i');

function prevImg () {
  return function () {
    var elemActive = $('.active');

    elemActive.toggleClass('active');

    if ( elemActive.hasClass('first') == true ) {
      elemLast.toggleClass('active');
    } else {
      elemActive.prev().toggleClass('active');
    }
  }
}

function nextImg () {
  return function () {
    var elemActive = $('.active');

    elemActive.toggleClass('active');

    if ( elemActive.hasClass('last') == true ) {
      elemFirst.toggleClass('active');
    } else {
      elemActive.next().toggleClass('active');
    }
  }
}

$(document).keydown(
  function(e){
    if (e.keyCode == 37) {
      prevImg();
    } else if (e.keyCode == 39) {
      nextImg();
    }
});

// Onclick btn.prev l' immagine con .active perde la classe .active e la precedente ottiene la classe .active
prevBtn.click( prevImg() );

// Onclick btn.next l' immagine con .active perde la classe .active e la seguente ottiene la classe .active
nextBtn.click( nextImg() );

// for (var i = 0; i < bullet.length; i++) {
//   bullet[i].click(
//     function () {
//       $(this).addClass('active');
//     // for (var i = 0; i < bullet.length; i++) {
//     //   if ( this == bullet[i] ) {
//     //     $('.images > img'[i]).toggleClass('active');
//     //   }
//     // }
//     }
//   );
// }
