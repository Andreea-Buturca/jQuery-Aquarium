// orange fish
$(document).click(function (event) {
    $("#fish1Id").stop(true);
    $("#fish1Id").animate({left: event.pageX - 100, top: event.pageY - 100}, 700);
    fishMoves("#fish1Id", 6100);
});
$("#fish1Id").dblclick(function () {
    $(this).stop(true).animate({width: 400, height: 400});
    setTimeout(function () {   
    $("#fish1Id").animate({width: 250, height: 250}, 500);
    }, 2500);      // gets smaller after 2.5 seconds
    setTimeout(function () {
        fishMoves("#fish1Id", 6100); 
    }, 3000);     // starts to move after 3 seconds
}); 

// blue fish
$("#fish2Id").hover(function () {
    $(this).stop(true);
    moveToRandom($(this));
    fishMoves("#fish2Id", 7000);
});

function moveToRandom(idRef) {
    var y = getRandom(0, $(document).height() - 100);
    var x = getRandom(0, $(document).width() - 100);
    $(idRef).animate({
        top: y
        , left: x
    }, 1000);
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// fish1 and fish2 movements
function fishMoves(idRef, speed) {
    var y = getRandom(0, $(document).height() - 150);
    var x = getRandom(0, $(document).width() - 150);
    $(idRef).animate({
        top: y
        , left: x
    }, speed, function () {
        fishMoves(idRef, speed)
    });
};
$(document).ready(function () {
    fishMoves("#fish1Id", 6100)
});
$(document).ready(function () {
    fishMoves("#fish2Id", 6500)
});

//three bubbles
function bubbles_movements(idRef, speed) {
   var x = getRandom(0, $(document).width() - 100); //random from left margin, -100 stay in the screen view
   var y = $(document).height() + 100; // goes from top to bottom margin 
    $(idRef).offset({
           top: y 
        , left: x
    });
    $(idRef).animate({
         left: x
        , top: -100 // goes over to top margin
    }, speed, function () {
        bubbles_movements(idRef, speed)
    });
}
$(document).ready(function () {
    bubbles_movements("#bubble1Id", 8000)
});
$(document).ready(function () {
    bubbles_movements("#bubble2Id", 7000)
});
$(document).ready(function () {
    bubbles_movements("#bubble3Id", 6000)
});

function bubbles_fadeOut(idRef, speed) {
    $(idRef).stop(true);
    $(idRef).fadeOut;
    bubbles_movements(idRef, speed);
}
$(".bubbleClass").click(function () {
    bubbles_fadeOut($(this), 8000)
});
