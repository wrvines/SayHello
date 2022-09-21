"use strict";

const history = document.getElementById("history");

function calcResults() {
    let numInput = document.getElementById("num1");
    let num = numInput.value;

    let sqr_result = num * num;
    let cube_result = sqr_result * num;

    document.getElementById("square").textContent = sqr_result;
    document.getElementById("cube").textContent = cube_result;

    let pElem = document.createElement("p");
    pElem.textContent = num;

    document.getElementById("history").appendChild(pElem);

    numInput.value = "";
}

let clearHistory = () => history.textContent = "";

let removeLast = () => history.removeChild(history.lastChild);
