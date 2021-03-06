function makeGrid(height, width) {
    const table = document.getElementById("canvas");
    let grid = '';

    // iter over row
    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        // iter for cell
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    // add grid to table
    table.innerHTML = grid;

    // add click event to cells
    addClickEventToCells();
}

// get height and width
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('input_height').value;
    const width = document.getElementById('input_width').value;
    makeGrid(height, width);
}

// add click event to cells
function addClickEventToCells() {
    // on color selection return color:
    const colorPicker = document.getElementById("color_selector");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}


// on submit of form
document.getElementById('size_selector').onsubmit = function () {
    formSubmission();
};

// create default 16x16 grid
makeGrid(16, 16);