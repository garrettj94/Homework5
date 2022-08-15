var container = document.querySelector(".container").children
var conchil = document.getElementById('#0900')
var currentDay = document.getElementById("#currentDay");
var timeBlock = $(".time-block")
var saveBtn = $(".saveBtn")
var textArea = $("textarea")
var hours = $(".hour")
var text = ("#text")
// use container.children 


var today = moment() 
$("#currentDay").text(today.format("MMMM Do, YYYY"))
 
var currentTime = moment().format('HH:mm');


var past = past < currentTime;

var future = future < currentTime;

var hour = parseInt($('#1200'))
console.log(hour)

saveBtn.on("click" , function(event){
    event.preventDefault();
    localStorage.setItem(textArea, hours);
})




console.log(saveBtn)

 

function backgroundColorEdit(){

    for(var i=0; i < container.children.length; i++){
        console.log(container[i])
        }

    if (hours === currentTime){
        style.backgroundColor = "#red";
    }else if (hours < currentTime){
        document.getElementById("#text").style.backgroundColor = "#green";
    }else 
    {
        document.getElementById("#text").style.backgroundColor = "#gray";
    }
}

 
console.log(container)
console.log(currentTime)
console.log(conchil)




