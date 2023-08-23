//ex.1
for (var i = 0; i<21; i++) {
    console.log(i);
	}
	
//ex.2
for (var i = 0; i < 21; i++) {
    var j = i % 2;
    if (j == 0) {
        console.log(i);
    }}
	
//ex.3
var arr=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for (i = 0; i < arr.length; i += 1) 
   {
    sum += arr[i]; }
console.log(sum);

//ex.4
console.log(Math.max(...arr));
	
//ex.5
arr.forEach(element => {
  repeat[element] = (repeat[element] || 0) + 1;
});

console.log(repeat);

//challenge:
var matrix = [ [0,1,0,1],[1,0,1,0],[0,1,0,1],[1,0,1,0] ];
for ( var j = 0; j < 4; j++) {
    console.log(matrix[j]);
}