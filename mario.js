const slider = document.getElementById("height");
slider.addEventListener("input", determineHeightAndThenDrawPyramid);

const symbolSelect = document.getElementById("symbol");
symbolSelect.addEventListener("input", determineHeightAndThenDrawPyramid);

const pyramid = document.getElementById("pyramid");

function determineHeightAndThenDrawPyramid() {

    pyramid.innerHTML = "";

    let rowStr = "";
    let symbol = document.getElementById("symbol").value;

    const height = document.getElementById("height").value;


    for (let i = 0; i < (height); i++) {

        for ( let j = i; j < (height - 1); j++) {
            rowStr += ".";
        }

        for (let j = 0; j < (i + 2); j++) {
            rowStr += symbol;
        }
       
        const row = document.createElement("p");
        row.innerText = rowStr;
        pyramid.appendChild(row);

        rowStr = "";

        }


}
