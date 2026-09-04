//your JS code here. If required.
let level =0;
let temp =document.getElementById("level");
let body = document.querySelector("body");
while(temp){
	level++;
	temp=temp.parentElement;
}
let p= document.createElement("p");
p.textContent=`The level of the element is: ${level}`
body.append(p);