function bigButton(){
    const elem = document.getElementById("Text");
    elem.style.fontSize = "24pt";

}

function mooButton(){
    var elem = document.getElementById("Text").value;
    var parts = elem.split(".");
    elem = parts.join("-Moo ");
    document.getElementById("Text").value = elem.toUpperCase();
    
}

function fancyButton(){
    const elem = document.getElementById("Text");
    elem.style.fontWeight = "bold";
    elem.style.color = "blue";
    elem.style.textDecoration = "underline";
}

function boringButton(){
    const elem = document.getElementById("Text");
    elem.style.fontWeight = "normal";
    elem.style.color = "black";
    elem.style.textDecoration = "none"; 
}