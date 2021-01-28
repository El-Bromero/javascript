// ***For all the exercises, be sure to log the output of the function to the console.***

        /************************************************************************************/
        // Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

        //your code...
        function tekCamp() {
            for (let i = 1; i <= 100; i++)
            {
                output = "";
                if (i % 3 == 0)
                {
                    output = "TEK";
                }
                if (i % 5 == 0)
                {
                    output += "camp";
                }
                if (output != "")
                {
                    console.log(output);
                }
            }
        }
        //tekCamp(); // Remove comment to test function out



        /************************************************************************************/
        //Write a function that converts the current temperature from Fahrenheit to Celsius. 

        //your code...
        function farenheitCelsius(F) {
            // F to C formula: (F - 32) * 5/9 = C
            return (F - 32) * 5/9;
        }

        // Test Cases
        // console.log(farenheitCelsius(32));
        // console.log(farenheitCelsius(63));

        /************************************************************************************/
        //Write a function that converts the Celsius temperature back to Fahrenheit. 

        //your code...
        function celsiusFarenheit(C) {
            // C to F formula: (C * 9/5) + 32 = F
            return (C * 9/5) + 32;
        }
        // Test Cases
        // console.log(celsiusFarenheit(17.2));
        // console.log(celsiusFarenheit(0));


        /************************************************************************************/
        // Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

        //your code...
        function canVote(age) {
            if (age >= 18)
            {
                return true;
            }
            return false;
        }

        // Test Cases
        // console.log(canVote(17));
        // console.log(canVote(100));


        /************************************************************************************/
        // Write a function that converts a string to an array. It should return an array.  

        //your code...
        function strToArr(str) {
            let strToArray = [];
            for (let i = 0; i < str.length; i++)
            {
                strToArray.push(String(str[i]));
            }
            return strToArray;
        }

        // Test Cases
        // console.log(strToArr("Teksystems"));
        // console.log(strToArr("HelloTest123!?$"));


        /************************************************************************************/
        // Write a function that reverses your telephone number.  It should return the reversed telephone number.

        //your code...
        function reversePhone(number) {
            let reverseNum = "";
            for (let i = number.length-1; i >= 0 ; i--)
            {
                reverseNum += number[i];
            }
            return reverseNum;
        }

        // Test Cases
        // console.log(reversePhone("123-456-7890"))
        // console.log(reversePhone("0987654321"));


        /************************************************************************************/
        // Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.

        //your code...

        function carInfo(make, model, year, color) {
            var car = {make:make, model:model, year:year, color:color};
            return car;
        }

        // Test Cases
        // console.log(carInfo("Toyota","Camry","2020","Red"));
        // console.log(typeof(carInfo("","","","")));


        /************************************************************************************/
        // Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

        //example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

        //your code...

        function evenOrOdd(numbers) {
            let evenOddList = {};
            for(let i = 0; i < numbers.length; i++) 
            {
                if(numbers[i] % 2 == 0)
                {
                    Object.assign(evenOddList, {[numbers[i]]: "even"});
                }
                else
                {
                    Object.assign(evenOddList, {[numbers[i]]: "odd"});
                }
            }
            return evenOddList;
        }

        // Test Cases
        // console.log(evenOrOdd([10,23,3,4]));
        // console.log(evenOrOdd([2,4,3,5,8,7,6,100]));


        /************************************************************************************/
        const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        // Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.

        //your code...

        for(let i = 0; i < numbers.length; i++)
        {
            if(i % 3 == 0) // (Did numbers[i] % 3 == 0) before but its says 0th, 3rd, 6th, 9th... values
            {
                console.log(numbers[i]);
            }
        }

        /************************************************************************************/
        const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        //access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

        var school = foodArray[foodArray.length-1];
        console.log(school);

        const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
        // Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".


        /************************************************************* */
        // Refactor the for() loop to be a while loop.


        // for(let i=0; i<10; i++) {
        //     // console.log(" the value of i in the loop is : " + i);
        // }
        // This for loop turns into this while loop:
        let i = 0;
        while(i < 10)
        {
            //console.log(" the value of i in the loop is : " + i); // Commented this out since I didn't want his in the console 10 times
            i++;
        }

        //your code...

        for(let i = 0; i < foodArray.length; i++)
        {
            let value = foodArray[i];
            // Check typeof element at index i. Check last character to see if it has 's' or not.
            if(typeof value === 'string')
            {
                if(value[value.length-1] === 's')
                {
                    console.log(value + " are " + adjectiveArray[i]);
                }
                else
                {
                    console.log(value + " is " + adjectiveArray[i]);
                }
            }
            else if (typeof value === 'object')
            {
                if(value.program[value.program.length-1] === 's')
                {
                    console.log(value.program + " are " + adjectiveArray[i]);
                }
                else
                {
                    console.log(value.program + " is " + adjectiveArray[i]);
                }
            }
        }



        /************************************************************* */
        //Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
        //use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

        //your code...
        function sum(a,b) {
            return a + b;
        }
        function multiply(c,d) {
            return c * d;
        }
        function divide(e,f) {
            return e / f;
        }
        function power2(g) {
            return g*g;
        }
        let answer = sum(30,2);
        answer = multiply(answer,20);
        answer = divide(answer,10);
        answer = power2(answer);
        console.log(answer);

        /************************************************************* */
        //Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 

        // ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

        // 20
        console.log(Boolean(20));
        console.log("20 is truthy, because it is a number and non zero numbers are typed as 'true' in boolean operations");

        // 0
        console.log(Boolean(0));
        console.log("0 is falsey, because 0 where it is 0 or -0 is seen as false in boolean operations");

        // "zero";
        console.log(Boolean("zero"));
        console.log('"zero" is truthy, because it is a non empty string and non empty strings are typed as true in boolean operations');

        // const zero = 20;
        const zero = 20;
        console.log(Boolean(zero));
        console.log("zero variable is truthy, because the value of the variable zero is a non zero number and non zero numbers are typed true in boolean operations");

        // null
        console.log(Boolean(null));
        console.log("null is falsey, because it is absent of value so it is seen as typed false in boolean operations");

        // "0"
        console.log(Boolean("0"));
        console.log('"0" is truthy, because it is a non empty string and non empty strings are typed as true in boolean operations');

        // !""
        console.log(Boolean('${!""}'));
        console.log('!"" is truthy, because "" is typed as falsey since it is empty and the ! operator is called "not" and reverses the boolean value. So the final value is truthy');

        // {}
        console.log(Boolean({}));
        console.log("{} is truthy, because empty objects are considered to be typed as true");

        // () => {console.log("hello TEKcamp!");
        console.log(Boolean(() => {console.log("hello TEKcamp!")}));
        // Seeing this function above it returns an error since it is missing a "}" but I am assuming the "}" is there for this answer
        console.log('() => {console.log("hello TEKcamp!")}; is truthy, because it is a function that is outputting to log a string. Functions, even empty functions are typed as truthy');

        // 125
        console.log(Boolean(125));
        console.log("125 is truthy, because it is a number and non zero numbers are typed as 'true' in boolean operations");

        // undefined
        console.log(Boolean(undefined));
        console.log("undefined is falsey, because there is no value there or specifically a value is not assigned so it is seen as falsey");

        // ""
        console.log(Boolean(""));
        console.log('"" is falsey, because empty strings are considered to be typed falsey');



        /************************************************************* */
        // Refactor the following code using a switch statement:

        const day = "friday";

        // if(day === "monday") {
        //     console.log("we got a long week ahead of us...");
        // } else if(day === "tuesday") {
        //     console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        // } else if (day === "wednesday") {
        //     console.log("We are smack dab in the middle of the week");
        // } else if (day === "thursday") {
        //     console.log("Thursday night... the mood is right");
        // } else if (day === "friday") {
        //     console.log("TGIF.  Friday truly is the best day of the week!")
        // } else {
        //     console.log("It's a weekend!")
        // }

        switch(day)
        {
            case "monday":
                console.log("we got a long week ahead of us...");
                break;
            case "tuesday":
                console.log("tuesday's are still beterr than mondays, but LONG way to go still");
                break;
            case "wednesday":
                console.log("We are smack dab in the middle of the week");
                break;
            case "thursday":
                console.log("Thursday night... the mood is right");
                break;
            case "friday":
                console.log("TGIF.  Friday truly is the best day of the week!")
                break;
            default:
                console.log("It's a weekend!")
        }


        /************************************************************* */
        // Refactor the following statements to use ternary expressions:

        const age = 10;
        // if (age > 21) console.log("adult"); else {
        //     console.log("minor");
        // }

        // if (age > 13 && age < 19) console.log('teen'); else {
        //     console.log("not a teenager");
        // };

        // if (age > 65) console.log("retired"); else {
        //     console.log("still working...");
        // }

        (age > 21) ? console.log("adult") : console.log("minor");

        (age > 13 && age < 19) ? console.log('teen') : console.log("not a teenager");

        (age > 65) ? console.log("retired") : console.log("still working...");
        
        /************************************************************* */
        //Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
        /*
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your objedct using the 'this' keyword.
        */

        //your code...

        let brandon = 
        {
            name: "Brandon Romero",
            age: 22,
            gender: "M",
            healthy: "no",
            hobbies: "Playing video games and hanging out with friends",
            profession: "Programmer",
            education : "BS in CS"
        };

        brandon.learn = function() {
            console.log(this.name + " is learning JavaScript");
        }

        brandon.learn();

        // Method using some property that exists on my object
        brandon.work = function() {
            console.log(this.name + " profession is a " + this.profession);
        }
        brandon.work();

        /************************************************************* */

        {
            const year = 2021;
            const nums = [1,2,3,4,5];
            let sum = 0;
            let i = 0;
            const doubled = [];

            //Refactor the following statements into expressions


            // 1.
            // if(year > 2000 && year < 2100) {
            //     console.log("welcome to the 21st century");
            // }
            
            (year > 2000 && year < 2100) ? console.log("welcome to the 21st century") : "" ;

            // 2.
            // for(let i=0; i<nums.length; i++) {
            //     sum += nums[i];
            // }
            // console.log(sum);
            
            sum = nums.reduce((total, amount) => total + amount);
            console.log(sum);
            
            3.
            // while(i < nums.length) {
            //     doubled.push(nums[i]*2);
            //     i++;
            // }
            
            // console.log(doubled);

            nums.forEach(function(item, index) {
                doubled[index] = item*2;
            })
            console.log(doubled);
        }


        /************************************************************* */
        // Use array methods to solve the following problems.

        const nums = [1,2,3,4,5];
        // Square every number in the array.  Store the squares in a new array.

        //your code...

        let numsSquared = [];
        nums.forEach(function(item, index) {
            numsSquared[index] = item*item;
        })
        console.log(numsSquared);


        const fivePlus = [1,3,5,7,9,1,3,5,2,3,1,23,4,232,3,4,1,2,2,2,3,4,4,1,12,11,23,3,4,5];
        //Remove all numbers that are less than 5.  Store the results in a new array.

        //your code...

        let greaterFive = fivePlus.filter(five => five >= 5);
        console.log(greaterFive);


        // Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

        //your code...

        let randomArray = [];
        // Put random numbers from 0 to 9
        for (let i = 0; i < 20; i++)
        {
            randomArray[i] = Math.floor(Math.random()*10);
        }

        console.log(randomArray);


        const showNums = [12,22,33,44,55,66,77,88,99,101];
        //Print out the value of each number divided by 2.  There is no need to store the output in an array.

        for (let i = 0; i < showNums.length; i++)
        {
            console.log(showNums[i]/2);
        }

        /************************************************************* */
        /* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */
        // Check for values of pieces. If not one of the specified pieces (or king) then it is null value
        function chessCalc(pieces) {
            //your code here
            let sum = 0;
            pieces.forEach(function(item, index) {
                if (pieces[index] === 'pawn')
                {
                    sum+=1;
                }
                else if (pieces[index] === 'knight' || pieces[index] === 'bishop')
                {
                    sum+=3;
                }
                else if (pieces[index] === 'rook')
                {
                    sum+=5;
                }
                else if (pieces[index] === 'queen')
                {
                    sum+=9;
                }
                else
                {
                    sum+=null;
                }
                
            } )
            if(sum != 0)
            {
                    return sum;
            }
            // Return null if no value was found
            return null;
        }

        // Test Cases
        // console.log(chessCalc(['king','queen','pawn','pawn','pawn','bishop']));
        // console.log(chessCalc(['random', 'king']));
        //console.log(chessCalc(['iPhone','queen','pawn']));
        //console.log(chessCalc(['android']));

        /************************************************************* */

        const ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
        //reverse the array, without modifying / `mutating` the ones array.

        const reversedOnes = ones.reverse();
        console.log(reversedOnes);

        /************************************************************* */
        //create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.

        // performer takes in callback function called afterPerformer in this case and runs it. Output is the 2 console logs from the 2 functions
        function performer(cb) {
            //code goes 
            console.log("This is from performer function!");
            cb();
        }

        function afterPerformer() {
            console.log("This is from the function after performer function!");
        }

        performer(afterPerformer);


        /************************************************************* */
        // For the given list of developers : 
        const devs = [
            {
                name: 'Cameron',
                age: 23,
                gender: 'm',
                "tech_stack" : ['html','css','js','React']
            },
            {
                name: 'Liz',
                age: 20,
                gender: 'f',
                "tech_stack" : ['java','spring-boot','MySql']
            },
            {
                name: 'Chris',
                age: 102,
                gender: 'm',
                "tech_stack" : ['react','express','python']
            },
            {
                name: 'Rashid',
                age: 27,
                gender: 'm',
                "tech_stack" : ['thymeleaf','postgres','js','Angular']
            },
            {
                name: 'Annie',
                age: 30,
                gender: 'F',
                "tech_stack" : ['html','scss','less','DynamoDB','GraphQL']
            },
            {
                name: 'Dr. Patel',
                age: 52,
                gender: 'M',
                "tech_stack" : null
            },
            {
                name: 'Isaiah',
                age: 48,
                gender: 'M',
                "tech_stack" : ['Java','','less','DynamoDB','GraphQL']
            },
            {
                name: 'Saima',
                age: 33,
                gender: 'F',
                "tech_stack" : ['MongoDB','Route53','Jenkins','Terraform','Kubernetes']
            },
            {
                name: 'Omar',
                age: 33,
                gender: 'm',
                "tech_stack" : ['c++']
            },
            {
                name: 'Mariam',
                age: 32,
                gender: 'f',
                "tech_stack" : null
            },
        ];

        /************************** */  
        // Find all devs older than 24

        //your code here...

        devs.forEach(function(item, index) {
            if(devs[index].age > 24)
            {
                console.log(devs[index].name + " is older than 24");
            }
        } )

        /************************** */  
        // Remove all people who are not developers (i.e. no tech stack)

        //your code here...

        devs.forEach(function(item, index) {
            if(devs[index].tech_stack === null)
            {
                console.log(devs[index].name + " is not a developer");
            }
        } )


        /************************** */  
        // Calculate the total age of all the devs

        //your code here...

        let totalAge = 0;
        devs.forEach(function(item, index) {
            totalAge+=devs[index].age;
        } )
        console.log("Total age of all the devs is " + totalAge);

        /************************** */  
        // Find all female devs

        //your code here...

        devs.forEach(function(item, index) {
            if(devs[index].gender === 'f' || devs[index].gender === 'F')
            {
                console.log(devs[index].name + " is a female dev");
            }
        } )

        /************************** */  
        // lowercase the genders of every dev

        //your code here...

        devs.forEach(function(item, index) {
            devs[index].gender = devs[index].gender.toLocaleLowerCase();
            console.log(devs[index].name + " gender is " + devs[index].gender);
        } )

        /************************** */  
        // Sort the developers by name

        //your code here

        devs.sort((a,b) => (a.name > b.name) ? 1 : -1);
        devs.forEach(function(item, index) {
            console.log(devs[index].name + " is sorted based on name and is on index " + index);
        } )

        /************************** */  
        // Sort the devs by age in descending order

        //your code here

        // Sort array based on age and it is in ascending order. Do reverse function to sort on descending
        devs.sort((a,b) => (a.age > b.age) ? 1 : -1);
        devs.reverse();
        devs.forEach(function(item, index) {
            console.log(devs[index].name + " is sorted based on age in descending order and is aged " + devs[index].age);
        } )

        /************************** */  
        // Sort the male coders by age

        //your code here

        devs.sort((a,b) => (a.age > b.age) ? 1 : -1);
        devs.forEach(function(item, index) {
            if(devs[index].gender === 'm' || devs[index].gender === 'M')
            {
                console.log(devs[index].name + " is male and is sorted based on age in order and is aged " + devs[index].age);
            }
            
        } )

        /************************** */  
        // For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below : 

        /*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

        //your code here

        let addSpace = [];
        devs.forEach(function(item, index) {
            if(devs[index].tech_stack === null)
            {
                console.log(devs[index].name + " is not a developer");
            }
            else
            {
                // Adds space to tech_stack and adds ',' so that it is not squished together
                addSpace = devs[index].tech_stack.join(', ');
                console.log(devs[index].name + " specializes in " + addSpace);
            }
        } )

        /************************************************************* */
        // Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

        function maxNumber(numbers) {
            //your code...
            // Go through each index and filter out anything that isn't a string or a number
            numbersMixed.forEach(function(item, index) {
                numbers = numbersMixed.filter(check => typeof check === 'string' || typeof check === 'number');
            } )
            // Go check for each string in filtered array. Use switch cases to turn literal number name to number type. Default parse to Int
            numbers.forEach(function(item, index) {
                if(typeof numbers[index] === 'string')
                {
                    switch (numbers[index])
                    {
                        case "zero":
                            numbers[index] = 0;
                            break;
                        case "one":
                            numbers[index] = 1;
                            break;
                        case "two":
                            numbers[index] = 2;
                            break;
                        case "three":
                            numbers[index] = 3;
                            break;
                        case "four":
                            numbers[index] = 4;
                            break;
                        case "five":
                            numbers[index] = 5;
                            break;
                        case "six":
                            numbers[index] = 6;
                            break;
                        case "seven":
                            numbers[index] = 7;
                            break;
                        case "eight":
                            numbers[index] = 8;
                            break;
                        case "nine":
                            numbers[index] = 9;
                            break;
                        default:
                            numbers[index] = parseInt(numbers[index], 10);
                    }
                }
            })
            // Filter out the NaN that appears after parsing ints
            numbers = numbers.filter(Boolean);
            let maximunNumber = 0;
            // Check each number in array and get max number
            numbers.forEach(function(item, index) {
                if(maximunNumber < numbers[index])
                {
                    maximunNumber = numbers[index];
                }
            } )
            // Console log the max number
            console.log("The maximum number in this array is: " + maximunNumber);
            // Return numbers array since it is the filtered array with just numbers
            return numbers;
        }

        // Create maxNumArray to take in filtered array from function and so it can be used for next exercise
        let maxNumArray = [];
        maxNumArray = maxNumber(maxNumArray);


        //After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

        function sortNums(numbers,desc=false) {
            //your code...
            // Sort by checking the values of each index and reverse if desc is passed as true. Else return the sorted (ascending order) array
            numbers.sort((a,b) => (a > b) ? 1 : -1);;
            if(desc)
            {
                return numbers.reverse();
            }
            return numbers;
        };

        console.log("Sorted in descending order array: " + sortNums(maxNumArray, true));

        /************************************************************* */
        //Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.


            //your code...
            // Getting this info from w3schools.com/js/js_es6.asp
            // I am choosing the arrow functions. Arrow functions allows developer a short syntax when writing function expressions. You do not need keywords such as function and return. You do not even need curly brackets. This allows a faster way for developers to quickly write function expressions especially functions that are on the simpler side.
            // Example
            const arrowExample = (arrowExample, randomNumber) => arrowExample * randomNumber;
            // Instead of:
            const functionExample = function(functionExample, anotherRandomNumber) {
                return functionExample * anotherRandomNumber;
            }


        /************************************************************* */
        //Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

        const mapObj = new Map();
        mapObj.set({company : "TEKsystems"},"object");

        console.log(mapObj.has({company : "TEKsystems"}));

        //The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

        //your code...


        //loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


        /************************************************************* */
        //Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  The doMath() function should print to the console the mathetmatical function that was carried out.  The doMath() function should return the computed value of any operation performed.

        // ex : 2,3 => doMath(2,3) => adding : 5
        // const operations = [];
        // function doMath(x,y) {};

        //your code...

        const adding = (x,y) => x + y;
        const subtracting = (x,y) => x - y;
        const multiplying = (x,y) => x * y;
        const dividing = (x,y) => x / y;
        const operations = [adding,subtracting,multiplying,dividing];

        let randomIndex = operations[Math.floor(Math.random() * operations.length)];
        function doMath(x,y) {
            console.log(randomIndex.name + " : " + randomIndex(x,y));

        };
        doMath(2,3);


        /************************************************************* */
        //- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

        //your code...
        function multiple(x) {
            return function fn(y) {
                return x * y;
            }
        };
        console.log(multiple(3)(9));

        //- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

        //your code
        
        function stockGain(basis) {
            let message = " is how much the stock has increased";
            return function inner(yrs) {
                let growthRate = 0.05;
                return basis * (growthRate * yrs) + message;
            }
        }
        console.log(stockGain(5)(10));

        // Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

        //your code...

        let futureValue = stockGain(10)(20);
        console.log(futureValue + " and is the future value of the stock");

// DO NOT DELETE THIS EXPORT
module.exports = {
    tekCamp,
    canVote
}


//*************************************** */



