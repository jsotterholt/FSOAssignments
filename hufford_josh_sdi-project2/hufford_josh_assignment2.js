/*************************************************
 * \author Josh Hufford
 * \date 14-Jan-2014
 * \file hufford_josh_assignment2.js
 * \about Encapsulating procedures in JavaScript
 */

//Variables
var confirmation = false;
var numInParty = 0;
var retBool = false;
var retNumber = 0;
var retString = "";
var boolStringified = "";
//Function Declarations

/**
 * \brief checks if the prompt is a valid number
 */
var checkpointProcedure = function(promptVar) {
    if (parseInt(promptVar, 10)) {
        console.log("There are " + promptVar + " people in your party.");
    } else {
        console.log("This \"" + promptVar + "\" is not a valid number.");
    }
}

/**
 * \brief waits for the desired number or skips over everyone.
 */
var waitForParty = function(wait, numPeople) {
    var arrivals = 0;
    var everyoneHere = false;
    while(wait) {
        if (arrivals < numPeople) {
            console.log("Another person has arrived!");
        } else {
            console.log("Everyone has arrived!");
            everyoneHere = true;
            break;
        }
        arrivals++;
    }
    return everyoneHere;
}

/**
 * \brief calculates all the denominators of the number passed and returns how many there are.
 */
var seatingOptions = function(people) {
    var i = people - 1;
    var numWholeSplits = 0;
    for (i; i > 0; i--) {
        if (0 === people % i) {
            numWholeSplits++;
            console.log(people + " and " + i + " divide evenly.");
        }
    }
    return numWholeSplits;
}

/**
 * \brief combine two strings with the proper ", and" conjunction for a compound sentence.
 */
var concatenateStringsWithAnd = function(string1, string2) {
    var andString = ", and ";
    var retString = "";
    retString = string1 + andString + string2;
    return retString;
}

//Main Script
//start script: get number in party.
numInParty = prompt("How many are in your party?");
//validate the value passed in the prompt.
checkpointProcedure(numInParty);
//confirmation check.
confirmation = confirm("You must wait for everyone in your party to arrive.");

//perform function calls to return values as assigned.
retBool = waitForParty(confirmation, numInParty);
retNumber = seatingOptions(numInParty);
retString = concatenateStringsWithAnd("We're ready to seat you now", "by the way, we had to place you in the back.");

//stringify the boolean into a readable format.
boolStringified = confirmation ? "Thank you all for waiting." : "I'm sorry we couldn't seat you all together."

//tie it all together
console.log(boolStringified + " With a party of " + numInParty + " people, we had " + retNumber + " seating options.");
console.log("However, we tried our best. " + retString);

//end of script.