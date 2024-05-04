let text = "";
// console.log(text);
let display 
update()

function update(){
    text = document.getElementById("Code").value;
    display = document.getElementById("Display");
    display.innerHTML = text;
    console.log(text)
}