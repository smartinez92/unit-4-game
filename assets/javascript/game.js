
$(document).ready(function () {
/*
    // Variables for wins and losses.
    var wins = 0;
    var loss = 0;

    // Variable for the random number you need to win.
    var randWinNum = [Math.floor(Math.random() + 100)];

    // Variable for Crystal random numbers.
    var randCrystal = [Math.floor(Math.random() + 10)];

    // Variable for user score.
    var userScore = 0


    // Crystal button on click function.
    $("#crystals").on("click", function () {

        // Create random winning number.
        var winNum = randWinNum;

        // Create random number for crystal.
        var crystalNum = randCrystal;

        // Show the numbers in HTML.
        document.getElementById("crystalNum").innerHTML = crystalNum;
    });

    if (userScoreTotal == winNum) {
        wins++;

    } else {
        loss++;
    }
    */

   // This will make the target number random.
    var targetNumber = Math.floor(Math.random() * 80) + 20;

    $(".randNum").text(targetNumber);

    var counter = 0;

    // We begin by expanding our array to include all the options options.
    var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Create a for loop to create crystals for every numberOption.
    for (var i = 0; i < numberOptions.length; i++) {

        var crystalNum = numberOptions[i];
        // create image for crystals
        // var imageCrystal = $("<img>");

        // Add crystal image class for css.
        // imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        // imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        // crystalNum.attr("data-crystalvalue", numberOptions[i]);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(crystalNum);
    }

    // This time, our click event applies to every single crystal on the page. Not just one.
    $("#crystal").on("click", function () {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        //var crystalValue = ($(this).attr("data-crystalvalue"));
        //crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        counter += crystalNum;

        // All of the same game win-lose logic applies. So the rest remains unchanged.
        $(".totalScore").append(counter);

        if (counter === targetNumber) {
            wins++;
            $(".wins").append(wins);
        }

        else if (counter >= targetNumber) {
            loss++;
            $(".loss").append(loss);
        }

    });
});