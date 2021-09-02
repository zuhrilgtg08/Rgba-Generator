let keluaranKotak = document.querySelector(".output");
let getBody = document.body;

function getValue(){
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    let alpha = document.getElementById("alpha").value;
    getBody.style.background = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    keluaranKotak.innerHTML = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function copy(){
    let element = document.createElement("textarea");
    element.value = keluaranKotak.textContent;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    alert("Copy Completed!!");
}