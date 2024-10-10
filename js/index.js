/////// Filtering an array of numbers and write a function returns a new array containing only the even numbers 
let arrayOfNumbers = [2, 5, 6, 8, 9, 55, 42, 10, 36, 7, 9, 33, 20, 89]

const FilteringNUmbers = (array) => {
    return array.filter((number) => number % 2 == 0)

}
console.log(" even numbers\n",
    FilteringNUmbers(arrayOfNumbers));




//////find the largest number

// first way 


const largestNumber = (array) => {
    return Math.max(...array);
}
console.log("LargestNumber\n", largestNumber(arrayOfNumbers));

largestNumber(arrayOfNumbers)

// 2nd way


const largestNUmber2 = (array) => {
    return array.reduce((largestNumber, number) => number > largestNumber ? number : largestNumber)
}




///// write a function that takes a string as input and returns the same string but reversed
let reverseTheString = 'Ahmed Mohamed Gaber Ameen'
const reversing = (string) => string.split("").reverse().join("")
console.log("/reversedString/\n", reversing(reverseTheString));


//// write a function that takes numbers and removes the duplicates
let duplicatedNumbers = [2, 2, 4, 4, 4, 3, 8, 9, 9, 5, 3, 7, 7, 7, 7, 66]




const removeDuplicates = (numbers) => {
    let newArray = [];
    numbers.map(number => {
        if (!newArray.includes(number)) {
            newArray.push(number);
        }
    })
    return newArray;

}
console.log("removeDuplicates\n", removeDuplicates(duplicatedNumbers));






