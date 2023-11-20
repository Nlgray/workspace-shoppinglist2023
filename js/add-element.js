/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class

// traverse the elements
$('#two').next().next().text("candy");

// add a new element by clicking the plus sign
$('#add').click(addElement);

// before and after are for siblings
// append and prepend are for parent

function addElement() {


  $("$todo").append("<li><input type=\"text\"><li>");
  // add a new element
  // add a input text box
  
  // whenever the user are done add the element
  $('input').blur(function(){
    var userinput = $(this).val();
    $(this).parent().addclass("cool");
    $(this).parent().text(userinput);
  
 } );
 $('li').click(changeStyle);
  
}

// bind click with the event handler
$('li').click(changeStyle);

//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle() {
  if ($(this).hasClass('cool')){
    $(this).removeclass('cool')
  }else{
$(this).addElement('warm')
  }


}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').remove();
}
