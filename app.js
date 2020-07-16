// 3
var tests = [[1,2,3],[4,5,6]];

// 4

var arr = [
    [1,2], [3,4], [5,6]
  ];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  };


// 5

// [ [ [1,2] , [3 , 4 ] , [ [5 , 6] , [ 7 ,8] ] , [ 9,10 ] ]
// 6

function myFunction(firstNumber,secondNumber){
    if (firstNumber > secondNumber ){return firstNumber}
    else { return secondNumber};
}

        console.log(myFunction(3,4));

//7

function myNewFunction (firstVal,secondVal){
    if (firstVal === secondVal){return "equal";}
    else {return "not equal";};

}

console.log(myNewFunction(1,1))

console.log(myNewFunction(1,2))