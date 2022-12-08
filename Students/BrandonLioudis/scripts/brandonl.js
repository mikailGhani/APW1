// JavaScript goes in this file, javaScript single line comments follow c/c++ standard of two frontslashes

$(document).ready(function() {                                              // jQuery will wait until DOM is ready

    // all custom jQuery will go here


    $("#MButton1").click(function() {                                       // assign click() function to button using button id
        $("#jQdemo").css("color","purple");                                        // dynamically sets the style for the specified element
        $("#jQdemo").html("This was designed by you, a Trevor day student or teacher");       // adds the text to the html of the element, $ at front of statement indicates jQuery,                                                                  // # at front of object indicates id, function to be called comes after . 
        alert("You just created words");                                    // call alert just for testing purposes
        $("#MButton1").html("I created words dynamically");                             // change the button label, or do whatever you want
    });                                                                     // note how the jQuery $ identifiers link the html object to the javaScript object

}); // end of jQuery block

// more javaScript code not using jQuery could go here

