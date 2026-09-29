// Ex 1 - Product by addition

console.log('\nExercise 1\n')
let multiplicand = 12
let multiplier = 12
let product = 0

for (let i = 0; i < multiplier; i++) {
    product += multiplicand
}

console.log ('Final product of ' + multiplicand + ' times ' + multiplier + ': ' + product)

// Ex 2 - Sum of numbers from 1 to x

console.log('\nExercise 2\n')

let stopSum = 10
let finalSum = 0

for (let i = 1; i <= stopSum; i++) {
    finalSum += i
}
console.log ('Sum of all numbers between 1 and ' + stopSum + ' is: ' + finalSum)

// Ex 3 - Array element of longest string

console.log('\nExercise 3\n')

let groceryList = ["cherry", "tomato", "raspberry", "apple", "reallyLongString", "notlong"]
let indexOfLongestString = 0
let maxLength = 0

for (let i = 0; i < groceryList.length; i++) {
    let elementLenght = groceryList[i].length
    if(elementLenght > maxLength){
        indexOfLongestString = i
        maxLength = elementLenght
    }
}

console.log(groceryList)
console.log ('Index of longest string in the array is: ' + indexOfLongestString + ' which is ' + groceryList[indexOfLongestString])


// Ex 4 - Asterisk Pyramid

let rows = 5
let pyramid = "*"

console.log('For rows = ' + rows)

for (row = 1; row < rows; row++){
    let printValue = ""
    for (let column = 0; column < row; column++){
        printValue += "*"
    }
    console.log(printValue)
}

// Ex 5 - Reversed String

let originalString = 'this is a string'
let reversedString = ''
console.log('Original: ' + originalString)
for (character of originalString){
    reversedString = character + reversedString
}
console.log(reversedString)

// Ex 6 - Character Count. Arrays are iterable

let array = ['arrays', 'are', 'iterable']
let characterCount = {}

console.log(array)

for(let element of array){
    for(let character of element){
        // for.. in for objects returns keys. below is !, so it checks if a key is NOT in characterCount
        if (character in characterCount){ 
            characterCount[character]+= 1
        } else {
            characterCount[character] = 1
        }
    }
}

console.log(characterCount)