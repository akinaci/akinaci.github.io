
$(document).ready(function() {
   $(".btn").on("click", addItem);
   $(".link-delete").on("click", deleteItem);
   $("ol").on("click", ".link-delete", deleteItem);
});


function addItem() {
   text = window.prompt("New Favorite");
   delete_link = '<a href="#" class="link-delete">(Delete)</a>'
   $("ol").append("<li>" + text + " " + delete_link + "</li>");

}

function deleteItem() {
  console.info(event);
  $(event.target).remove("<li>" + text + " " + delete_link + "</li>");
  $(event.target).parent().fadeOut("<li>" + text + " " + delete_link + "</li>");
}
