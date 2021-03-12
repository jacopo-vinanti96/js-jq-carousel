// Dichiarazione variabili globali
var bullet = $('.fas.fa-circle'),
    elemFirst = $('.first'),
    elemLast = $('.last'),
    nextBtn = $('.next').children('i'),
    prevBtn = $('.prev').children('i');

// Onclick btn.prev l' immagine con .active perde la classe .active e la precedente ottiene la classe .active
function prevImg () {
  // Variabile dichiarata localmente per riassegnarla all' elemento precedente
  var elemActive = $('.active');
  // Rende non visibile l' immagine
  elemActive.toggleClass('active');
  // Se è la prima si passa all' ultima, altrimenti rende visibile l' immagine precedente
  if ( elemActive.hasClass('first') == true ) {
    elemLast.toggleClass('active');
  } else {
    elemActive.prev().toggleClass('active');
  }
}

// Onclick btn.next l' immagine con .active perde la classe .active e la seguente ottiene la classe .active
function nextImg () {
  // Variabile dichiarata localmente per riassegnarla all' elemento seguente
  var elemActive = $('.active');
  // Rende non visibile l' immagine
  elemActive.toggleClass('active');
  // Se è l' ultima si passa alla prima, altrimenti rende visibile l' immagine seguente
  if ( elemActive.hasClass('last') == true ) {
    elemFirst.toggleClass('active');
  } else {
    elemActive.next().toggleClass('active');
  }
}

// Onkeydown (arrow) si richiamano le funzioni
$(document).keydown(
  function(e){
    if (e.keyCode == 37) {
      prevImg();
    } else if (e.keyCode == 39) {
      nextImg();
    }
  }
);

// Onclick si richiamano le funzioni
prevBtn.click( function () {
  prevImg();
}
);

nextBtn.click( function () {
  nextImg();
}
);

// Ciclo per assegnare la proprietà click ai bullet
for (var j = 0; j < bullet.length; j++) {

  $(bullet[j]).on( "click",
    function () {
// Dichiarazione variabili locali (si utilizzano soltanto qui)
      var elemActive = $('.active'),
          img = $('.images img');
// Rimuove la classe active dagli elementi
      elemActive.toggleClass('active');
// Seleziona l' elemento cliccato (n° bullet) e lo rende active
      $(this).toggleClass('active');
// Controlla la posizione del bullet active e assegna active all' immagine nella stessa posizione
      for (var i = 0; i < bullet.length; i++) {
        if ( $(bullet[i]).hasClass('active') ) {
          $(img[i]).toggleClass('active');
        }
      }
    }
  );
}
