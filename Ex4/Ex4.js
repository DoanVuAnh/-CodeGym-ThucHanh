function drawRectangle() {
    let numLength = +document.getElementById("numLength").value;
    let numWidth = +document.getElementById("numWidth").value;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#d33";
    ctx.fillRect(0, 0, numLength, numWidth);
}