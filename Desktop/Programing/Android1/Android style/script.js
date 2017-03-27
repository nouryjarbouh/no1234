

function change() {
    var x=document.getElementById('mySidenav')
    if (x.style.width == "0px") 
	{
        x.style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
		document.getElementById('hamburger_span_1').style.backgroundColor = "rgb(64,108,41)";
		document.getElementById('hamburger_span_2').style.backgroundColor = "rgb(64,108,41)";
		document.getElementById('hamburger_span_3').style.backgroundColor = "rgb(64,108,41)";

    } 
	else {
        x.style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
		document.getElementById('hamburger_span_1').style.backgroundColor = "rgb(85,143,54)";
		document.getElementById('hamburger_span_2').style.backgroundColor = "rgb(85,143,54)";
		document.getElementById('hamburger_span_3').style.backgroundColor = "rgb(85,143,54)";
    }
}

function search() {
    document.getElementById('hamburger').style.display = "none";
    document.getElementById('Developers').style.display = "none";
    document.getElementById('dis1').style.display = "none";
    document.getElementById('dis2').style.display = "none";
    document.getElementById('dis3').style.display = "none";
    document.getElementById('dis4').style.display = "block";
    document.getElementById('main').style.display = "none";
    document.getElementById('mySidenav').style.width = "0px";
    document.getElementById('console').style.display = "none";
	document.getElementById('my_search').style.display = "none";
	document.getElementById('search_on').style.display = "block";
    document.getElementById('nav').style.backgroundColor = "rgb(176,190,197)";
}

function stop_search() {
    document.getElementById('hamburger').style.display = "block";
    document.getElementById('Developers').style.display = "block";
    document.getElementById('dis1').style.display = "block";
    document.getElementById('dis2').style.display = "block";
    document.getElementById('dis3').style.display = "block";
    document.getElementById('dis4').style.display = "none";
	document.getElementById('main').style.display = "block";
	document.getElementById("main").style.marginLeft = "250px";
    document.getElementById('mySidenav').style.width = "250px";
	document.getElementById('my_search').style.display = "block";
	document.getElementById('search_on').style.display = "none";
    document.getElementById('nav').style.backgroundColor = "rgb(106,179,68)";
	if (screen.width > 1000 || screen.width < 767) {
		document.getElementById('console').style.display = "block";
	  } else {
		document.getElementById('console').style.display = "none";
	}
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}



