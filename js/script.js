var bucketList = [
  'Create a perfume',
  'Create an 8 bit videogame',
  'Get a tatoo',
];
for ( var i = 0; i < bucketList.length; i++) {
  clonePrependAppend ('.template li',bucketList[i],'.bucket_list');
}
//-----------------------------------------------------------------
$('.bucket_list_delete').click(
  function(){
    $(this).parent().remove();
  }
);
//-------------------------------------------------------------
$('#add').keydown(
  function(event){
    if (event.which == 13){
      var userText = $(this).val();
      if ( userText != '') {
        var capitalizedUserText = capitalizeFirstLetter(userText);
        clonePrependAppend ('.template li',capitalizedUserText,'.bucket_list')
        // Cleanig command
        $(this).val('');
      }
    }
  }
);
//-------------------------------------------------------
// Removing userText
$(document).on('click','.bucket_list_delete',function(){
  $(this).parent().remove();
})
//----------------------------------------------------
// Function - clonePrependAppend
function clonePrependAppend (clone,listedText,tag) {
  var template = $(clone).clone();
  template.prepend(listedText);
  $(tag).append(template);
}
// Function - capitalizeFirstLetter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
