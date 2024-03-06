// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
      // isNumberPositive(-1); // returns false
      // isNumberPositive(10); // returns true

    const isNumberPositive = (num) => {
        if (num > 0){
          return true;
        } else {
            return false;
        }
    }
console.log(isNumberPositive(-6));

// 2. Write a function that takes a number of days and converts it into an age.
      // convertDaysToAge(3650); // returns 10
      // convertDaysToAge(6570); // returns 18

      const convertDaysToAge = (ageInDays) => {
            ageInYears = Math.floor(ageInDays / 365);
            return `${ageInYears} years`;
      }

console.log(convertDaysToAge(45056));

// 3. Write a function that takes three numbers and returns the largest of the three numbers.
      // getLargestNumber(2 ,1, 4); // returns 4
      // getLargestNumber(6,2,3); // returns 6

      const getLargestNumber = (num1, num2, num3) => {
          const numbers = [num1, num2, num3];
          const largestNumber = Math.max(...numbers); // Can also just add num1, num2 & num3 in the brackets to avoid creating new variable
          return `The largest number is ${largestNumber}`;
      }

  console.log(getLargestNumber(12, 18, 6));

// 4. Write a function that takes an array of names and returns the last name from the array of names.
      // getLastName([”Charlie”, “Rob”, “Andy”]); // returns “Andy”
      // getLastName(["Ash","Stu"]); // returns "Stu"

      const getLastNameofArray = (nameArray) => {
          return nameArray[nameArray.length -1]; // When accessing elements in an array, you need to use square brackets 
                                                // to indicate that ur accessing something within it. Then use array-name & index
                                                // you're looking for (nameArray.length -1) - length of array minus 1. 
      }
      
  console.log(getLastNameofArray(['jo', 'nic', 'ben', 'dan', 'sed', 'pablo',]));

// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.
      // allNumbersPositive([2,4,5]); // returns true
      // allNumbersPositive([-5,4,6]); // returns false

      const allNumbersPositive = (numArray) => {
        for (let index = 0; index < numArray.length; index++) {
            if (numArray[index] < 0) {
              return false;
            }
          } 
          return true;
        } 
        // Note: take true return statement out of for loop for it to work
        // - Have the if statement check if there are negative numbers instead otherwise it returns true first time it encounters a positive number
      
    
  console.log(allNumbersPositive([2, 0, 5, 4, 0, -7]));
  console.log(allNumbersPositive([2, 0, 5, 4, 0, 7]));
  console.log(allNumbersPositive([-2, 0, 5, 4, 0, 1347]));
  console.log(allNumbersPositive([2, 10, 5, 4, 0, 27]));

