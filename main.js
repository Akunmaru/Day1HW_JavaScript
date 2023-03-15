//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
let findWords = function () {
    let empty = [];
    for (let i = 0, len = dog_names.length; i < len; i++) {
        if (dog_string.indexOf(dog_names[i]) != -1) {
            empty.push('Matched dog_name')
        } else {
            empty.push('No Match')
        }
    } 
    return empty 
}
console.log(dog_names)
console.log(findWords())

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arras = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    catMemeGoBrr = [];
    for (let i = 0, len = arras.length; i < len; i++) {
        if (i % 2 == 0 ) {
            arras[i] = "even index"
        }
    }
    return arras
}
console.log(arras)
console.log(replaceEvens())
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]