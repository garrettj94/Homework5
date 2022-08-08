var container = document.querySelector(".container");
var currentDay = document.getElementById("#currentDay");
var timeBlock = document.querySelector(".time-block")
var saveBtn = document.querySelector(".saveBtn")
var time 


var today = moment() 
$("#currentDay").text(today.format("MMMM Do, YYYY"))

saveBtn.addEventListener("click")


function timeBlock(){
   

for(i=9; i => 5; i++);


} 

     
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


function formatDate(date) {
    var d = new Date(date);
    var hh = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var dd = "AM";
    var h = hh;
    if (h >= 12) {
      h = hh - 12;
      dd = "PM";
    }
    if (h == 0) {
      h = 12;
    }
    m = m < 10 ? "0" + m : m;
  
    s = s < 10 ? "0" + s : s;
  
    /* if you want 2 digit hours:
    h = h<10?"0"+h:h; */
  
    var pattern = new RegExp("0?" + hh + ":" + m + ":" + s);
  
    var replacement = h + ":" + m;
    /* if you want to add seconds
    replacement += ":"+s;  */
    replacement += " " + dd;
  
    return date.replace(pattern, replacement);
  }
  
  alert(formatDate("February 04, 2011 12:00:00"));

