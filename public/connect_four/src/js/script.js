var totalCounter = 0
var player1 = "red"
var player2 = "yellow"
var whichPlayer = player1
var player1Slots = []
var player2Slots = []
var winner = null

var game = {
    switchPlayer: function() {
        if (whichPlayer == player1) {
            whichPlayer = player2
        }
        else if (whichPlayer == player2) {
            whichPlayer = player1
        }
    },
    endCheck: function() {
        this.checkIfMatches(whichPlayer);
        if ((totalCounter == 42) && (winner == null)) {
            $('.header').html("<h1>The game is a stalemate!!</h1>");
        }
    },
    addToken: function(slot) {
        if (whichPlayer == player1) {
            player1Slots.push(parseInt(slot));
            player1Slots.sort(function(a,b) {return a-b});
        }
        else if (whichPlayer == player2) {
            player2Slots.push(parseInt(slot));
            player2Slots.sort(function(a,b) {return a-b});
        }
    },
    raiseFloor: function() {
        if (oldID <= 67) {
            document.getElementById(oldID).setAttribute("data-state", "inactive");
            newID = (parseInt(oldID) + 10);
            newActiveElement = document.getElementById(newID);
            newActiveElement.setAttribute("data-state", "active");
        }
    },
    checkIfMatches: function(player) {
        if (player == player1) {
            array = player1Slots
        }
        else if (player == player2) {
            array = player2Slots
        }
        for (var i = 0; i < array.length; i++) {
            matches = 1;
            this.checkVertical(array[i], array);
            matches = 1;
            this.checkDiagonalLeft(array[i], array);
            matches = 1;
            this.checkDiagonalRight(array[i], array);
            matches = 1;
            this.checkHorizontal(array[i], array);
        }
    },
    checkVertical: function(start, array) {
        if ((array.indexOf(start + 10) != -1) && (start <= 67)) {
            matches = matches + 1;
            if (matches == 4) {
                winner = whichPlayer;
            }
            this.checkVertical((start + 10), array);
        }
    },
    checkDiagonalLeft: function(start, array) {
        if ((array.indexOf(start + 9) != -1) && (start <= 67)) {
            matches = matches + 1;
            if (matches == 4) {
                winner = whichPlayer;
            }
            this.checkDiagonalLeft((start + 9), array);
        }
    },
    checkDiagonalRight: function(start, array) {
        if ((array.indexOf(start + 11) != -1) && (start <= 67)) {
            matches = matches + 1;
            if (matches == 4) {
                winner = whichPlayer;
            }
            this.checkDiagonalRight((start + 11), array);
        }
    },
    checkHorizontal: function(start, array) {
        if ((array.indexOf(start + 1) != -1) && (start <= 67)) {
            matches = matches + 1;
            if (matches == 4) {
                winner = whichPlayer;
            }
            this.checkHorizontal((start + 1), array);
        }
    }
};

$(document).ready(function () {
    $(".box").mouseenter(function () {
        if ($(this).attr("data-state") == "active") {
            $(this).stop().animate({"opacity": "0.65"}, "fast");
            $(this).css("background-color", whichPlayer);
        }
    });
    $(".box").click(function() {
        if ($(this).attr("data-state") == "active") {
            $(this).toggleClass(whichPlayer);
            $(this).animate({"opacity": "1"}, "slow");
            $(this).off("mouseleave");
            $(this).off("mouseenter");
            totalCounter = totalCounter + 1
            oldID = $(this).attr("id");
            game.addToken(oldID);
            game.raiseFloor();
            game.endCheck();
            // [ Outside of game functions because of unit testing with Jasmine 
            if (winner == whichPlayer) {
                $('#victory_image').css("display", "block");
                $('#header').html("<h1>The winner is " + whichPlayer + "!!</h1>");
                document.getElementById('victory_audio').play();
                $('.grid .col-1-7 .box').attr("data-state", "inactive");
                $('#refresh').css("display", "block");
            }
            // Without testing, this code above would work in the standard endCheck(); method as an "else if" conditional ]
            game.switchPlayer();
        }
    });
    $(".box ").mouseleave(function() {
        if ($(this).attr("data-state") == "active") {
           $(this).css("background-color", "gray");
           $(this).stop().animate({"opacity": "0.35"}, "fast");
        }
    });
});