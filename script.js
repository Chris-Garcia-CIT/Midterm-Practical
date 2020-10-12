var wrapperEle = document.body.querySelector(".wrapper");
function writeSomething(){
var ele = document.createElement("div")
ele.innerHTML=number;
document.body.appendChild(ele);
}
var list = [
  {
    name:"Harry",
    age:25
  },
  {
    name:"Larry",
    age:15
  },
  { 
    name:"Bert",
    age:45
  },
  {
    name:"Jerry",
    age:35
  },
  {
    name:"Berry",
    age:5
  },
  {
    name:"Bart",
    age:55
  }
];

for (var i = 0; i < list.length; i++) {
  if (list[i]) {
    var personEle = document.createElement("div");
    personEle.innerHTML = list[i].name;
    wrapperEle.appendChild(personEle);
    personEle.style.color="red";
  }
}

var number=0;
   
document.body.querySelector(".button").addEventListener("click", function(){
writeSomething(number=number+1)
});