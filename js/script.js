/* Creare una todo list usando un template */

/* 0. Creo una funzione che mi fa il
clone, prepend e append */


function clonePrependAppend (clone,listatoTesto,tag) {

  var template = $(clone).clone();

  template.prepend(listatoTesto);

  $(tag).append(template);

}


/* 1. Definisco un listato attraverso un array */
var bucketList = [

  'Inventare un profumo',
  'Progettare un videogioco 8 bit',
  'Tatuarmi la madonna sulla schiena',

];

/* 4. Per aggiungere il listato devo prima ciclare il mio array con un ciclo for */
for ( var i = 0; i < bucketList.length; i++) {

  /* 3. Clono il template
  var template = $('.template li').clone();
  5. Aggiungo il listato al template
  template.prepend(bucketList[i]);
  6. Prendo il mio template e lo metto nell'html
  $('.bucket_list').append(template); */

  /* 17. Invoco la mia funzione */
  clonePrependAppend ('.template li',bucketList[i],'.bucket_list');

}

/* 7. Rendo la X operativa */
$('.bucket_list_delete').click(
  function(){
    $(this).parent().remove();
  }
);

/* 9. Con '#aggiungi' rimango in ascolto di tutto
quello che viene scritto nel campo input */
$('#aggiungi').keydown(
  function(event){
    /* 10. Eseguo il controllo: se l'utente pigia invio
    allora mi prendo il valore di quello che ha inserito
    e me lo salvo in una variabile */
    if (event.which == 13){
      var testo = $(this).val();
      /* 15. Controllo: se quello che inserisce l'utente
      non è testo vuoto allora lo inserisco */
      if ( testo != '') {

        /* 11. Clono il template
        var template = $('.template li').clone();
        12. Aggiungo il valore della variabile al template
        template.prepend(testo);
        13. Immetto il template nell'html
        $('.bucket_list').append(template); */

        /* 17. Invoco la mia funzione */
        clonePrependAppend ('.template li',testo,'.bucket_list')

        /* 14. Ripulisco campo input una volta che l'utente preme invio */
        $(this).val('');
      }
    }

});

/* 16. Comando che permette al document di rimanere in ascolto di un eventuale
evento click su bucket_list_delete che mi andrà a rimuovere il <li>
aggiunto dall'utente */
$(document).on('click','.bucket_list_delete',function(){
  $(this).parent().remove();
})
