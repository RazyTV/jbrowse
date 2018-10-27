
function goForr() {
  document.getElementById('bienC5').goForward()
  console.log("forward")
}
function goBacc() {

  document.getElementById('bienC5').goBack()
  console.log("back")
}

function getTitle3(){

  var logs2 = document.getElementById('bienC5').getTitle()
  document.getElementById('demo').innerHTML = logs2
  console.log(logs)

}
function refresh(){
  document.getElementById('bienC5').reload()
}

function searchThis(){
 var dep = document.getElementById("bienC5").getTitle()
 var lep = document.getElementById("demo")
 var rep = document.getElementById("serarchGoogle").value;
if(rep.includes(".com")){
var goto = "http://" + rep
document.getElementById("bienC5").loadURL(goto)
} else {
 var rep = document.getElementById("serarchGoogle").value;
 var res = rep.replace(/\s/g, "+");
 var dos = "https://google.com/search?q=" + res
 document.getElementById("bienC5").loadURL(dos)

}
}
