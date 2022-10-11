let Mass = [2,3,4,5,6,7];
function arraySum (array) {
    let sum = 0;
    for (let i = 0 ; i < array.length; i++) {
        sum += array[i]
    }    
    console.log(sum);
}
arraySum(Mass)