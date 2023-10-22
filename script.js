// Prompt the user for input
const userInput = prompt("Enter a text with extra spaces:");

console.log("Your Text without removing etra space :")
console.log(userInput)



// Remove extra spaces using regular expression
console.log("lanth of text without removing etra space" , userInput.length)
const trimmedText = userInput.replace(/\s+/g, ' ');

// Display the result
console.log("Text with extra spaces removed:");
console.log(trimmedText);
console.log("lanth of input after removing etra space" , trimmedText.length)
