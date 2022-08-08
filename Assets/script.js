var container = document.querySelector(".container");
var currentDay = document.getElementById("#currentDay");
var timeBlock = $(".time-block")
var saveBtn = $(".saveBtn")
var textArea = $("textarea")
var hour =$(".hour")



var today = moment() 
$("#currentDay").text(today.format("MMMM Do, YYYY"))
 




saveBtn.on("click" , function(event){
    event.preventDefault();
    localStorage.setItem();
})


function setClasses(){

    var time = moment().format('H');
    var past = past < time;
    var present = time;
    var future = future < time;

    console.log(present)    
    console.log(currentTime)


    for(i=0; i < timeBlock.length; i++){
    console.log(timeBlock[i])
    }
    if(timeBlock[0]){
        
    }

}

function backgroundColorEdit(){
    if (present == time){
        document.getElementsByClassName("backgroundTool").style.backgroundColor = "#ff0000";
    }else if (present < time){
        document.getElementsByClassName("backgroundTool").style.backgroundColor = "#d3d3d3";
    }else 
    {
        document.getElementsByClassName("backgroundTool").style.backgroundColor = "#90ee90";
    }
}

setClasses()   




// javascript set class


