
function diceRoll(userInput){ //function declaration (diceRoll), parameter (userInput)
    let roll = Math.floor(Math.random() * userInput + 1); //variable (let) roll = random roll number
    return roll;
}
console.log("Player 1") // logs player 1
function roll(){ //function declaration (roll)
        let value = [];
        let dice1 = diceRoll(4);
        value.push(dice1);
        let dice2 = diceRoll(6);
        value.push(dice2);
        let dice3 = diceRoll(8);
        value.push(dice3);
        let dice4 = diceRoll(10);
        value.push(dice4);
        let dice5 = diceRoll(12);
        value.push(dice5);
        let dice6 = diceRoll(20);
        value.push(dice6);
        console.log(value);
    return value;
}

function totalRoll(rollResult){ //function declaration (totalRoll), parameters (rollResult)
    let total = 0; //declare variable (total)
    for(let i =0; i < rollResult.length; i++){ // for loop
        total += rollResult[i];
        console.log(total);
        } 
        return total;
}


//caller
let result = [];
let result2 = [];
diceRoll(); 
let rollResult = roll(this,result); 
let total1 = totalRoll(rollResult);
console.log("Player 2");
let rollResult2 = roll(this,result2); 
let total2 = totalRoll(rollResult2); 

    if (total1 > total2){
        console.log("Player 1 wins! Click refresh to gamble again!");
    }
    else if (total1 === total2) {
        console.log ("Its a draw! Click refresh to play again!");
    }
    else {
    	console.log ("Player 2 wins! Click refresh to gamble again!");
    }
//get rollResult into totalRoll
//research return keyword,  sends function back to caller. ends a function.
// look at function on line 11, see whats wrong with line 11