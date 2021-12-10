// Import required packages
const prompt = require('prompt-sync')({sigint: true});

// This is in normal (unencrypted) text
var c_inEnglish = "ABCDEFGHIJKLMNOPQRSTUVWXYZ,.?!()0123456789"
// This is in encrypted text
var c_inCipher  = "Z3YX4W!V5U1TS6R?QPO7N2)M,8LKJI9H.GF0ED(CBA"


console.clear();
// Run program
f_mainLoop()





// Main menu
function f_mainLoop() {

  // Asks whether to Encrypt or Decrypt
  var choice = prompt("Encrypt(0) or Decrypt(1)? ");
  
  // If input is 0, encrypt the text, else decrypt
  choice==0 ? f_encryptText(prompt("Text to Encrypt: ")) 
  : f_decryptText(prompt("Text to Decrypt: "));

  choice=prompt("Do you want to run again? No(0)/Yes(1): ");
  if (choice==1) f_mainLoop(); else console.clear(); 
}





function f_encryptText(input) {
  var output="";
  input=input.toUpperCase();

  // For every character in the input variable
  for (var x=0; x<input.length; x++) {
    if (charAt(input,x)==" ") { output+=" "; }
    // and for every character in the c_inEnglish constant (unchanging variable)
    for (var y=0; y<c_inEnglish.length; y++) {
      // if the character of input is the same as the character of c_inEnglish
      if (charAt(input,x)==charAt(c_inEnglish,y)) {
        // add the same character from c_inCipher with index y to output
        output+=charAt(c_inCipher, y);
      }
    }
  }
  // log output in the console
  console.log("\nEncrypted Text: "+output+"\n");
}



function f_decryptText(input) {
  var output="";
  input=input.toUpperCase();

  // For every character in the input variable
  for (var x=0; x<input.length; x++) {
    if (charAt(input,x)==" ") { output+=" "; }
    // and for every character in the c_inCipher constant (unchanging variable)
    for (var y=0; y<c_inCipher.length; y++) {
      // if the character of input is the same as the character of c_inCipher
      if (charAt(input,x)==charAt(c_inCipher,y)) {
        // add the same character from c_inEnglish with index y to output
        output+=charAt(c_inEnglish, y);
      }
    }
  }
  // log output in the console
  output=output.substring(0,1).toUpperCase()+output.substring(1,output.length+1).toLowerCase();
  console.log("\nDecrypted Text: \t"+output+"\n");
}





// Returns character at num index of a string 
function charAt(string, num) { return string.substring(num,num+1);}