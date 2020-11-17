var search_input = document.querySelector("#search_input");

search_input.addEventListener("keyup", function(e){
  var span_items = document.querySelectorAll(".table_body .issue span");
  var table_body = document.querySelector(".table_body tr");
  var search_item = e.target.value.toLowerCase();
 
 span_items.forEach(function(item){
   if(item.textContent.toLowerCase().indexOf(search_item) != -1){
      item.closest("tr").style.display = "";
   }
   else{
     item.closest("tr").style.display = "none";
     }
 })
  
});