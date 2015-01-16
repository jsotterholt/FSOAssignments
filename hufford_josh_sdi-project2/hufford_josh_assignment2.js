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
var checkpointProcedure = function(promptVar) {
    if (parseInt(promptVar, 10)) {
        console.log("There are " + promptVar + " people in your party.");
    } else {
        console.log("This \"" + promptVar + "\" is not a valid number.");
    }
}

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
var seatingOptions = function(people) {
    var i = people;
    var numWholeSplits = 0;
    for (i; i > 0; i--) {
        if (0 === people % i) {
            numWholeSplits++;
            console.log(people + " and " + i + " divide evenly.");
        }
    }
}

//Main Script
numInParty = prompt("How many are in your party?");
checkpointProcedure(numInParty);
confirmation = confirm("You must wait for everyone in your party to arrive.");
retBool = waitForParty(confirmation, numInParty);
retNumber = seatingOptions(numInParty);