//by value = numbers, boolean, undefined, string, null
//by reference = array, object, class

var game1 = {
    counter1: document.getElementById("counter1"),
    bar1: document.getElementById("bar1"),
    score1: 0,
}

var game2 = {
    counter2: document.getElementById("counter2"),
    bar2: document.getElementById("bar2"),
    score2: 0,
}


function start(start) {
    var start = document.getElementById(start);
    
    //variables for win counter-------------------------------------------------
    var name1 = document.getElementById("name1").value;
    var win1 = 0;
    var WinName1 = document.getElementById("PlayerNameWin1").innerHTML = name1;
    var name2 = document.getElementById("name2").value;
    var win2 = 0;
    var WinName2 = document.getElementById("PlayerNameWin2").innerHTML = name2;
    var WinCount2 = document.getElementById("PlayerWinCount2").innerHTML = win2;
    //----------------------------------------------------------------------------

    var input1 = document.getElementById("name1");
    var input2 = document.getElementById("name2");
    input1.disabled = "true";
    input2.disabled = "true";

    start.parentNode.removeChild(start);


//touchscreen and click
    player1.addEventListener ("click", function(){

        if (game1.score1 < 100) {
        game1.score1 = game1.score1 + 2;
        game1.counter1.innerHTML = game1.score1 + "%";
        game1.bar1.style.height = game1.score1 + "%";
        }

        else if (game1.score1 = 100){
        var victorySound = new Audio("sounds/victorySound.mp3");
        victorySound.play();    
        alert("GAME OVER. " + name1 + " Won!");
        game1.score1 = 0;
        game2.score2 = 0;
        game1.counter1.innerHTML = game1.score1 + "%";
        game2.counter2.innerHTML = game2.score2 + "%";
        game1.bar1.style.height = game1.score1 + "%";
        game2.bar2.style.height = game2.score2 + "%";
        win1 = win1 + 1;
        var WinCount1 = document.getElementById("PlayerWinCount1").innerHTML = win1;
        }});

    player2.addEventListener ("click", function(){

    if (game2.score2 < 100) {
        game2.score2 = game2.score2 + 2;
        game2.counter2.innerHTML = game2.score2 + "%";
        game2.bar2.style.height = game2.score2 + "%";
        }
    
        else if (game2.score2 = 100){
        var victorySound = new Audio("sounds/victorySound.mp3");
        victorySound.play();    
        alert("GAME OVER. " + name2 + " Won!");
        game1.score1 = 0;
        game2.score2 = 0;
        game1.counter1.innerHTML = game1.score1 + "%";
        game2.counter2.innerHTML = game2.score2 + "%";
        game1.bar1.style.height = game1.score1 + "%";
        game2.bar2.style.height = game2.score2 + "%";
        win2 = win2 + 1;
        var WinCount2 = document.getElementById("PlayerWinCount2").innerHTML = win2;
        }});

    //keyboard keys
    window.addEventListener ("keyup", function(e){
    
        if (e.keyCode == 65) {
            if (game1.score1 < 100) {
            game1.score1 = game1.score1 + 2;
            game1.counter1.innerHTML = game1.score1 + "%";
            game1.bar1.style.height = game1.score1 + "%";
            }
    
            else if (game1.score1 = 100){
            var victorySound = new Audio("sounds/victorySound.mp3");
            victorySound.play();
            alert("GAME OVER. " + name1 + " Won!");
            game1.score1 = 0;
            game2.score2 = 0;
            game1.counter1.innerHTML = game1.score1 + "%";
            game2.counter2.innerHTML = game2.score2 + "%";
            game1.bar1.style.height = game1.score1 + "%";
            game2.bar2.style.height = game2.score2 + "%";
            win1 = win1 + 1;
            var WinCount1 = document.getElementById("PlayerWinCount1").innerHTML = win1;
            }}

        //as a sort of seperation
    
        else if (e.keyCode == 76) {
            if (game2.score2 < 100) {
            game2.score2 = game2.score2 + 2;
            game2.counter2.innerHTML = game2.score2 + "%";
            game2.bar2.style.height = game2.score2 + "%";
            }
            
            else if (game2.score2 = 100){
            var victorySound = new Audio("sounds/victorySound.mp3");
            victorySound.play();
            alert("GAME OVER. " + name2 + " Won!");
            game1.score1 = 0;
            game2.score2 = 0;
            game1.counter1.innerHTML = game1.score1 + "%";
            game2.counter2.innerHTML = game2.score2 + "%";
            game1.bar1.style.height = game1.score1 + "%";
            game2.bar2.style.height = game2.score2 + "%";
            win2 = win2 + 1;
            var WinCount2 = document.getElementById("PlayerWinCount2").innerHTML = win2;
            }
    }});}