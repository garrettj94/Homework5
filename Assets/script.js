var container = document.querySelector(".container");
var currentDay = document.getElementById("#currentDay");
var timeBlock = $(".time-block")
var saveBtn = $(".saveBtn")
var textArea = $("textarea")
var hours = $(".hour")



var today = moment() 
$("#currentDay").text(today.format("MMMM Do, YYYY"))
 
var currentTime = moment().format('HHmm');


var past = past < currentTime;

var future = future < currentTime;


saveBtn.on("click" , function(event){
    event.preventDefault();
    localStorage.setItem();
})


// function setClasses(){S



//     for(i=0; i < timeBlock.length; i++){
//     console.log(timeBlock[i])
//     }
  

// }

function backgroundColorEdit(){
    if (hours === currentTime){
        document.getElementsById("").style.backgroundColor = "#ff0000";
    }else if (hours < currentTime){
        document.getElementById("").style.backgroundColor = "#d3d3d3";
    }else 
    {
        document.getElementsById("").style.backgroundColor = "#90ee90";
    }
}

 


console.log(currentTime)
console.log(hours)


// javascript set class


