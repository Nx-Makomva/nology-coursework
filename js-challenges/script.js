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
          return nameArray.length -1;
      }

  console.log(getLargestNumber['jo', 'nic', 'ben', 'dan', 'sed']);
// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.
      // allNumbersPositive([2,4,5]); // returns true
      // allNumbersPositive([-5,4,6]); // returns false


