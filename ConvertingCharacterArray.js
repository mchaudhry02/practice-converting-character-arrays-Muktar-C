//Task 1: Decode the Following Reversed Messages
// Messages given (reversed)
let msg1 = "! kyako eb ll'uoy dna ,gniog peeK !sgnitfles ot ytirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsirpe uoy fi tub ,tsrif ta drah mees yam gnidoC";
let msg2 = "!citcarp htihw retteb teg ll'uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let msg3 = "!pleh ot rehto morf tnerferidn era uoy ,elbtuor evah uoy fi .lanoissaforp a ekil leef ot evah t'noD uoY";
let msg4 = "'.rettam llits yehT ,smargorp llams etirw ylno nac uoy fi .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";

// Decode using split, reverse, join
console.log(msg1.split("").reverse().join(""));
console.log(msg2.split("").reverse().join(""));
console.log(msg3.split("").reverse().join(""));
console.log(msg4.split("").reverse().join(""));

//Task 2: Write Your Own Reverse Messages
// My original message
let myMessage = "Believe in yourself and keep learning every day.";

// Encrypt (reverse it)
let encrypted = myMessage.split("").reverse().join("");

// Log both
console.log("Original:", myMessage);
console.log("Encrypted:", encrypted);

//