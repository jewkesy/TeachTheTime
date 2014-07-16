var theWords = [];
var counter = 0;
var theColour = "";
var wordCount = 10;
var flipSpeed = "750";

$(function(){
    $("#btn-reverse").on("click",function(e){
        $(".flipbox").flippyReverse();
        e.preventDefault();
    });
        
    $("#btn-first").on("click",function(e){
        counter = 0;

        $(".flipbox").flippy({
            color_target: theColour, //"red",
            direction: "left",
            duration: flipSpeed,
            verso: "<span class=\"big\">" + theWords[counter] + "</span>",
         });
         e.preventDefault();
    });
    
    $("#btn-prev").on("click",function(e){
        counter = counter-1;
        if (counter < 0) counter = 0;

        $(".flipbox").flippy({
            color_target: theColour, //"red",
            direction: "right",
            duration: flipSpeed,
            verso: "<span class=\"big\">" + theWords[counter] + "</span>",
         });
         e.preventDefault();
    });
    
    $("#btn-next").on("click",function(e){
        counter = counter+1;

        var text = "<span class=\"big\">" + theWords[counter] + "</span>";
        if (counter>theWords.length-1) {
            counter = theWords.length - 1;

            text = "<div id=\"right-content\"><img src=\"http://lorempixel.com/610/300/cats\" alt=\"placeholder\"/></div>";
        }

        $(".flipbox").flippy({
            color_target: theColour, //"#b6d635",
            direction: "top",
            duration: flipSpeed,
            verso: text,
         });
         e.preventDefault();
    });
    
    $("#btn-last").on("click",function(e){
        counter = theWords.length;

        $(".flipbox").flippy({
            color_target: theColour, // "#03588C",
            direction: "bottom",
            duration: flipSpeed,
            verso: "<div id=\"right-content\"><img src=\"http://lorempixel.com/610/300/animals\" alt=\"placeholder\"/></div>",
         });
         e.preventDefault();
    });
});

function resetPage() {
    console.error('NotImplementedException');
    return; 
    $("#wrapper").hide();
    $("#goBack").hide();

    $("#header").show('slow');
    $("#menu").show('fast');

    $("#levels li").on('click', function(e) { 
        e.preventDefault; 
        this.blur(); 
        $("#levels").hide('slow');
        $("#about").hide('fast');
        $("#goBack").show('fast');
        $("#theWords").empty();
        return loadWords($(this).attr('class'), wordCount); 
    });
    $("#goBack").on('click', function(e) {
        $("#wrapper").hide('fast');
        $("#about").show('slow');
        $("#levels").show('fast');
        $("#goBack").hide('fast');
    });
}

function liveTime() {
     $(function() {
        var initialRun = true;

          setInterval( function() {
                var theCurrentDate = new Date();
              var seconds = theCurrentDate.getSeconds();
              var sdegree = seconds * 6;
              var srotate = "rotate(" + sdegree + "deg)";

              $("#sec").css({ "transform": srotate });
              setTimeText(theCurrentDate);
          }, 1000 );
          
          setInterval( function() {
              var hours = new Date().getHours();
              var mins = new Date().getMinutes();
              var hdegree = hours * 30 + (mins / 2);
              var hrotate = "rotate(" + hdegree + "deg)";
              
              $("#hour").css({ "transform": hrotate});
              
          }, 1000 );

          setInterval( function() {
              var mins = new Date().getMinutes();
              var mdegree = mins * 6;
              var mrotate = "rotate(" + mdegree + "deg)";
              
              $("#min").css({ "transform" : mrotate });
              
          }, 1000 );
    });
}

function setTimeText(theTime) {
    var hour = theTime.getHours();
    var mins = theTime.getMinutes();
    var displayMins = "";

    var combinedDisplay = "";
    if (hour >= 12) hour = hour - 12;
    if (mins <= 3) {
        displayMins = hour + " o'clock ";
    } 
    else if (mins >=4 && mins <=8) {
        displayMins = " 5 minutes past " + hour;
    }
    else if (mins >=9 && mins <=13) {
        displayMins = " 10 minutes past " + hour;
    }
    else if (mins >=14 && mins <=18) {
        displayMins = " quarter past " + hour;
    }
    else if (mins >=19 && mins <=23) {
        displayMins = " 20 minutes past " + hour;
    }
    else if (mins >=24 && mins <=28) {
        displayMins = " 25 minutes past " + hour;
    }
    else if (mins >=29 && mins <=33) {
        displayMins = " half past " + hour;
    }
    else if (mins >=34 && mins <=38) {
        hour = hour + 1;
        displayMins = " 25 minutes to " + hour;
    }
    else if (mins >=39 && mins <=43) {
        hour = hour + 1;
        displayMins = " 20 minutes to " + hour;
    }
    else if (mins >=44 && mins <=48) {
        hour = hour + 1;
        displayMins = " quarter to " + hour;
    }
    else if (mins >=49 && mins <=53) {
        hour = hour + 1;
        displayMins = " 10 minutes to " + hour;
    }
    else if (mins >=54) {
        hour = hour + 1;
        displayMins = " 5 minutes to " + hour;
    }
    else {
        displayMins = "unknown time! " + mins;
    }

//console.log(mins);
    combinedDisplay = displayMins;
//console.log(combinedDisplay);
    $("#timeText").html(combinedDisplay);    
}

function loadTimes(level, count) {
    console.error('NotImplementedException');
    return;
    theWords = [];
    counter = 0;

    theColour = rgb2hex($("." + level).css( "background-color" ));

    var words = [];

    switch (level) {
        case "lvl1":
            words = reception1;
            break;
        case "lvl2":
            words = reception2;
            break;
        case "lvl3":
            words = year1;
            break;
        case "lvl4":
            words = year2;
            break;
        case "lvl5":
            words = year3;
            break;
        case "lvl6":
            words = year4;
            break;
        default:
            words = reception1;
            break;
    }
    shuffleArray(words);

    if (!count) count = words.length;
    if(count > words.length) count = words.length;

    for(var i=0; i< count; i++) {
        theWords.push(words[i]);
    }

    $(".flipbox").html();
    //$(".flipbox").html("<span class=\"big " + level + "\">" + theWords[0] + "</span>");

    $(".flipbox").flippy({
        color_target: theColour,
        direction: "bottom",
        duration: flipSpeed,
        verso: "<span class=\"big\">" + theWords[0] + "</span>",
     });
    $("#wrapper").show('fast');
//console.log("0 of " + theWords.length);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x, 10).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}