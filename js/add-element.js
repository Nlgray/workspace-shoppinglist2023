/*
 * Practice on Elements
 */
const myarray = [1,2,3,4,5];
myarray.push(10);
console.log(myarray);

// get all the hot class elements- change them to cool class
$(".hot").each(function(){
  //this.setAttribute("class", "cool");
  $(this).removeClass("hot");
  // add the class cool
  $(this).addClass("cool");
});

// traverse the elements
$("#two").next().next().text("Candy");


// add a new element by clicking the plus sign
$("#add").click(addElement);
// before and after are for siblings
// append and prepend are for parent

function addElement() {
  // add a new element
  // add a input text box
  $("#todo").append("<li><input type=\"text\"></li>"); 
  // whenever the user are done add the element
  $('input').blur(function(){
      var userinput = $(this).val();
      $(this).parent().addClass("cool");
      $(this).parent().text(userinput);
  });
  $('li').click(changeStyle);
}

// bind click with the event handler
$('li').click(changeStyle);
//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle() {
  //if ($(this).hasClass('cool'))
  // finish it please

}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').remove();
}
