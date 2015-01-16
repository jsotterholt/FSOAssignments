/*************************************************
 * \author Josh Hufford
 * \date 14-Jan-2014
 * \file hufford_josh_assignment2.js
 * \about Encapsulating procedures in JavaScript
 */

//Variables
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

//Main Script
checkpointProcedure(prompt("How many are in your party?"));