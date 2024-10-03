// Question no # 01
// var f_name = prompt("Enter your first name")

// var l_name = prompt("Enter your last name")
// var fullname = f_name +" "+ l_name;
// document.write("Asslam u Alaikum Dear !!"
//     +fullname)

// Question no # 02
    
// var mobileModel = prompt("Enter your favorite mobile phone model:");


// var inputLength = mobileModel.length;

// document.write("Your favorite mobile phone model is: " + mobileModel + "<br>");
// document.write("Length of input: " + inputLength);

// Question no # 03

// var word = prompt("Enter your word to find");


// var index = word.indexOf("n");


// document.write("The word is: " + word + "<br>");
// document.write("Index of 'n': " + index);


// Question no # 04

// var word = prompt("Enter your word to find");


// var index = word.lastIndexOf("i");


// document.write("The word is: " + word + "<br>");
// document.write(" Last Index  of 'i': " + index);


// Question no # 05

// var word = "Pakistani";

// var charAtThirdIndex = word.charAt(3);

// document.write("The character at the 3rd index in 'Pakistani' is: " + charAtThirdIndex);

// Question no # 06
// var f_name = prompt("Enter your first name");
// var l_name = prompt("Enter your last name");
// var fullname = f_name.concat(" ", l_name); 
// document.write("Assalam u Alaikum Dear !! ".concat(fullname)); 

// Question no # 07

// var city = "Hyderabad";

// var newCity = city.replace("Hyder", "Islam");


// document.write("Original Word: " + city + "<br>");
// document.write("Modified Word: " + newCity);

// Question no # 08


// var message = "Ali and Sami are best friends. They play cricket and football together.";


// var updatedMessage = message.replace(/and/g, "&");

// document.write("Original Message: " + message + "<br>");
// document.write("Updated Message: " + updatedMessage);

// Question no # 09

// var stringValue = "472";

// var numberValue = Number(stringValue);


// document.write("String value: " + stringValue + "<br>");
// document.write("Type of string value: " + typeof(stringValue) + "<br>");
// document.write("Number value: " + numberValue + "<br>");
// document.write("Type of number value: " + typeof(numberValue));

// Question no # 10


// var userInput = prompt("Enter some text:");


// var upperCaseInput = userInput.toUpperCase();


// document.write("Original input: " + userInput + "<br>");
// document.write("Converted to uppercase: " + upperCaseInput);

// Question no # 11

// function toTitleCase(str) {
//     return str
//         .toLowerCase()
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
//         .join(" "); 
// }


// var userInput = prompt("Enter a sentence:");

// var titleCasedInput = toTitleCase(userInput);

// document.write("Title Case: " + titleCasedInput);

// // Question no # 12

// var num = 35.36; 
// var str = num.toString(); 
// var result = str.replace('.', ''); 

// document.write("Original number: " + num + "<br>");
// document.write("Number after removing dot: " + result);


// Question no # 13

// function isValidUsername(username) {
    
//     for (var i = 0; i < username.length; i++) {
//         var charCode = username.charCodeAt(i);
     
//         if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//             return false; 
//         }
//     }
//     return true; 
// }


// var username = prompt("Enter your username:");


// if (isValidUsername(username)) {
//     document.write("Username is valid: " + username);
// } else {
//     alert("Please enter a valid username. Username cannot contain special characters like [@ . , !]");
// }


// Question no # 14




// Question no # 15

// function isValidPassword(password) {
    
//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//         return false;
//     }

//     let hasLetters = false;
//     let hasNumbers = false;
    
//     for (let i = 0; i < password.length; i++) {
//         let charCode = password.charCodeAt(i);

//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             hasLetters = true; 
//         } else if (charCode >= 48 && charCode <= 57) {
//             hasNumbers = true; 
//         }
//     }

//     if (!hasLetters || !hasNumbers) {
//         alert("Password must contain both alphabets and numbers.");
//         return false;
//     }


//     let firstCharCode = password.charCodeAt(0);
//     if (firstCharCode >= 48 && firstCharCode <= 57) {
//         alert("Password must not start with a number.");
//         return false;
//     }

//     return true;
// }


// let password = prompt("Enter your password:");

// while (!isValidPassword(password)) {
//     password = prompt("Please enter a valid password.");
// }

// alert("Password is valid!");

// Question no # 16
// var university = "University of Karachi";

       
//         var universityArray = university.split(" ");

      
//         document.write("Array Elements:<br>");
//         for (var i = 0; i < universityArray.length; i++) {
//             document.write(universityArray[i] + "<br>"); 
//         }

        
// Question no # 17

// var userInput = prompt("Please enter a string:");

//         if (userInput) {
           
//             var lastCharacter = userInput.charAt(userInput.length - 1);

          
//             document.write("The last character of your input is: " + lastCharacter);
//         } else {
//             document.write("No input provided.");
//         }



        // Question no # 18

        // var str = "The quick brown fox jumps over the lazy dog";


        // var lowerStr = str.toLowerCase();

        // var wordsArray = lowerStr.split(" ");


        // var count = 0;

        
        // for (var i = 0; i < wordsArray.length; i++) {
        //     if (wordsArray[i] === "the") {
        //         count++;
        //     }
        // }

        // document.write('The word "the" occurs ' + count + ' times in the given string.');