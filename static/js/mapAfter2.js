window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.strokeStyle = "skyblue"
    context.lineWidth = 8;
    context.beginPath();

    context.moveTo(87,40);
	context.lineTo(310,137);
    context.moveTo(87,42);
    context.lineTo(220,200);
    context.stroke();
};