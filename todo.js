// for adding cross symbol

var myTodoList = document.getElementsByTagName("LI");
var i;

for(i = 0;i<myTodoList.length;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "cancel";
    span.appendChild(txt);
    myTodoList[i].appendChild(span); 
}

// for closing a list item

var cancel = document.getElementsByClassName("cancel");
var i;
for(i = 0; i < cancel.length; i++){
    cancel[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    };
}

var list = document.querySelector("ul");

list.addEventListener('click',
    function(ev){
        if(ev.target.tagName === "LI"){
            ev.target.classList.toggle("checked")
        }  
    },false  
);

// add new item on pressing button

function addItem(){
    var li = document.createElement("li");
    var myValue = document.getElementById("myInput").value;
    var myTask = document.createTextNode(myValue);
    li.appendChild(myTask);

    if(myValue === "")
        alert("Enter a value");
    else
        document.getElementById("myList").appendChild(li);

    document.getElementById("myInput").value = "";
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00d7");
    span.className = "cancel";
    span.appendChild(txt);        
    li.appendChild(span);



    for(i = 0; i < cancel.length;i++){
        cancel[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("You must write something!");
    } else {
        document.getElementById("myList").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        };
    }
}

var date = new Date();
var arrayMonth = date.getMonth();
var months = ["January","February","March","April","May", "June", "July", "August", "September", "October", "November", "December"];

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var arrayWeekDay = date.getDay();

var currentMonth = months[arrayMonth];
var currentDay = date.getDate();
var currentWeekday = days[arrayWeekDay];

var dateString = currentWeekday + " , " + currentDay + "   " + currentMonth;
document.getElementById("month").innerHTML = dateString;