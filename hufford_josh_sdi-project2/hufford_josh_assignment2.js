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
var checkpointProcedure = function(boolVar) {
    if (boolVar) {
        console.log("You must go through the full security line.");
    } else {
        console.log("You can go through the fast security line.");
    }
}

//Main Script
checkpointProcedure(prompt("Do you have any liquids on you?"));