//----------------ARRAY INTRO----------------//

//----------------Binary Search----------------//

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(primes, target){
  let min = 0;
  let max = primes.length - 1;
  let guess;
  while (min < max) {
    guess = Math.floor((max + min)/2)
    if (primes[guess] === target) {
      return guess
    } else if (primes[guess] < target) {
      let min = guess + 1
    } else {
      let max = guess - 1
    }
  }
  return -1
}

//----------------Pivot Index----------------//

  // return index where the sum of the numbers to the left of the index
  // is equal to the sum of the numbers to the right
  // if none exists, return -1
  // if multiple, return left-most pivot index
