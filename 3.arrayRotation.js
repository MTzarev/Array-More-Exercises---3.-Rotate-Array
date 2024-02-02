function arrayRotation(arr){
let times = arr.pop();

for (let i=0; i<(arr.length)+times; i++){
    arr.unshift(arr.pop(i))
     
}
console.log(arr.join(` `));
    
}
arrayRotation(['1', '2', '3', '4', '2']);
arrayRotation(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
