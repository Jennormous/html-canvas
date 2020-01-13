var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

console.log(ctx);

// The origin of the grid is (x,y) --> (0,0), which is the top-left corner of canvas

ctx.fillRect(25, 25, 100, 100);
ctx.clearRect(45, 45, 60, 60);
ctx.strokeRect(50, 50, 50, 50);