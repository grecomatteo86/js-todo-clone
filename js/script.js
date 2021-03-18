/* Creare una todo list usando un template */


/* 1. Definisco un listato attraverso un array */
var bucketList = [

  'Inventare un profumo',
  'Progettare un videogioco 8 bit',
  'Tatuarmi la madonna sulla schiena',

];

/* 4. Per aggiungere il listato devo prima ciclare il mio array con un ciclo for */
for ( var i = 0; i < bucketList.length; i++) {

  /* 3. Clono il template */
  var template = $('.template li').clone();
  /* 5. Aggiungo il listato al template */
  template.prepend(bucketList[i]);
  /* 6. Prendo il mio template e lo metto nell'html */
  $('.bucket_list').append(template);

}
