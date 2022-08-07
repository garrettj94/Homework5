var container = document.querySelector(".container");
var currentDay = document.getElementById("#currentDay");

var titleEl = $("<h1>");
titleEl.text("Hello friends");


var today = moment() 
$("#currentDay").text(today.format("MMMM Do, YYYY"))


// for(i=9; i => 17; i++) {
     
// }

// document.getElementById('table_to_highlight')
//             .addEventListener('click', function(item) {

//             })

//        // To get tr tag 
//                 // In the row where we click
//                 var row = item.path[1];
  
//                 var row_value = "";
  
//                 for (var j = 0; j < row.cells.length; j++) {
  
//                     row_value += row.cells[j].innerHTML;
//                     row_value += " | ";
//                 }
  
//                 alert(row_value);
  
//                 // Toggle the highlight
//                 if (row.classList.contains('highlight'))
//                     row.classList.remove('highlight');
//                 else
//                     row.classList.add('highlight');

console.log(titleEl)