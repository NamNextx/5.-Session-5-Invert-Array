var myArray = Array();
var arrayCount = 0;

function addArray() { // add array form input
    myArray[arrayCount] = document.getElementById('idinput').value;
    document.getElementById('idoutput').innerText+=myArray[arrayCount]

    arrayCount++;
    //document.getElementById('idinput').value =null;

}
var x = [-3,5,1,3,2,10];
var first=0;
var last = x.length - 1;
function inverted_Array() { // inverted array then have array
   /* alert(myArray.length/2)
    var tg;
    for (var i = 0; i < 2; i++) {
        tg=myArray[i];
        myArray[i]=myArray[myArray.length-(i+1)];
        alert(myArray[i]);
        myArray[myArray.length-i+1]=tg;

    }
    alert(myArray);
*/
    document.write(myArray);
    while (first < last) {
        var b = myArray[first];
        myArray[first] = myArray[last];
        myArray[last] = b;
        first++;
        last--;
    }
    document.write("abcd---"+ myArray);
}
