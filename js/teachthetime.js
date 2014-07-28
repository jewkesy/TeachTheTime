var theTimess = [];
var counter = 0;
var theColour = "";
var wordCount = 10;
var flipSpeed = "750";

var secInt;
var minInt;
var hrInt;
var showTimeInt;

var hdegree = 0;
var mdegree = 0;
var sdegree = 0;

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

    //$("#goBack").hide();

    //$("#header").show('slow');
    //$("#menu").show('fast');

    //$("#theClock").hide();
    $("#action-btn").hide();

    $("#header").on('click', function(e) {
        $("#sec").hide();
        var theTimeToShow = loadRandomTime(new Date(2012, 0, 1), new Date());

        clearInterval(secInt);
        secInt = 0;
        clearInterval(minInt);
        minInt = 0;
        clearInterval(hrInt);
        hrInt = 0;
        clearInterval(showTimeInt);
        showTimeInt = 0;

        $("#timeText").html("");    
        setTimeHands(theTimeToShow);
        showTimeInt = setTimeout(function() {
            setTimeText(theTimeToShow)
        }, 5000);
    });

    $("#levels li").on('click', function(e) { 
        console.log('clicked');
        e.preventDefault; 
        this.blur(); 
        $("#levels").hide('slow');
        $("#about").hide('fast');
        $("#goBack").show('fast');
        $("#theWords").empty();
        return loadTimes($(this).attr('class'), 5); 
    });
    // $("#goBack").on('click', function(e) {
    //     $("#wrapper").hide('fast');
    //     $("#about").show('slow');
    //     $("#levels").show('fast');
    //     $("#goBack").hide('fast');
    // });

    liveTime();

}

function loadRandomTime(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function liveTime() {
    $(function() {
        var initialRun = true;
        $("#sec").show();

        secInt = setInterval( function() {
            var theCurrentDate = new Date();

            setTimeHands(theCurrentDate);

            // var seconds = theCurrentDate.getSeconds();

            // var sdegree = seconds * 6;
            // var srotate = "rotate(" + sdegree + "deg)";
            // $("#sec").css({ "transform": srotate });
            setTimeText(theCurrentDate);
        }, 1000 );

        // secInt = setInterval( function() {
        //     var theCurrentDate = new Date();
        //     var seconds = theCurrentDate.getSeconds();
        //     var sdegree = seconds * 6;
        //     var srotate = "rotate(" + sdegree + "deg)";
        //     $("#sec").css({ "transform": srotate });
        //     setTimeText(theCurrentDate);
        // }, 1000 );

        // hrInt = setInterval( function() {
        //     var hours = new Date().getHours();
        //     var mins = new Date().getMinutes();
        //     hdegree = hours * 30 + (mins / 2);
        //     var hrotate = "rotate(" + hdegree + "deg)";
        //     $("#hour").css({ "transform": hrotate});
        // }, 1000 );

        // minInt = setInterval( function() {
        //     var mins = new Date().getMinutes();
        //     mdegree = mins * 6;
        //     var mrotate = "rotate(" + mdegree + "deg)";
        //     $("#min").css({ "transform" : mrotate });
        // }, 1000 );



    });
}

function setTimeHands(theTime) {
    //$("#sec").hide();
    var hours = theTime.getHours();
    var mins = theTime.getMinutes();
    var secs = theTime.getSeconds();

    var currHdegree = hdegree;

    hdegree = hours * 30 + (mins / 2);
    //var hrotate = "rotate(" + hdegree + "deg)";

    $("#hour").animateRotate(hdegree, currHdegree);

    //$("#hour").css({ "transform": hrotate});


    var currMdegree = mdegree;

    mdegree = mins * 6;
    //var mrotate = "rotate(" + mdegree + "deg)";
    //$("#min").css({ "transform" : mrotate });
    $("#min").animateRotate(mdegree, currMdegree);  


    var currSdegrees = sdegree;

    sdegree = secs * 6;
    //var srotate = "rotate(" + sdegree + "deg)";
    //$("#sec").css({ "transform": srotate });
    $("#sec").animateRotate(sdegree, currSdegrees);  
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
    else if (mins >=4 && mins <=7) {
        displayMins = " 5 minutes past " + hour;
    }
    else if (mins >=8 && mins <=13) {
        displayMins = " 10 minutes past " + hour;
    }
    else if (mins >=14 && mins <=17) {
        displayMins = " quarter past " + hour;
    }
    else if (mins >=18 && mins <=23) {
        displayMins = " 20 minutes past " + hour;
    }
    else if (mins >=24 && mins <=27) {
        displayMins = " 25 minutes past " + hour;
    }
    else if (mins >=28 && mins <=33) {
        displayMins = " half past " + hour;
    }
    else if (mins >=34 && mins <=37) {
        hour = hour + 1;
        displayMins = " 25 minutes to " + hour;
    }
    else if (mins >=38 && mins <=43) {
        hour = hour + 1;
        displayMins = " 20 minutes to " + hour;
    }
    else if (mins >=44 && mins <=47) {
        hour = hour + 1;
        displayMins = " quarter to " + hour;
    }
    else if (mins >=48 && mins <=53) {
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
console.log(level);
    theTimes = [];
    counter = 0;

    theColour = rgb2hex($("." + level).css( "background-color" ));

    var times = [];

    switch (level) {
        case "lvl1":  // oclock hrs, can repeat??
            times = reception1;
            break;
        case "lvl2":  // quarters, halves and oclocks
            times = reception2;
            break;
        case "lvl3":   //5 past, 5 to
            times = year1;
            break;
        case "lvl4": // 10 past, 10 to
            times = year2;
            break;
        case "lvl5":   // 20 past, 20 to
            times = year3;
            break;
        case "lvl6": // 25 past, 25 to
            times = year4;
            break;
        default:
            times = reception1;
            break;
    }
    shuffleArray(times);

    if (!count) count = times.length;
    if(count > times.length) count = times.length;

    for(var i=0; i< count; i++) {
        theTimes.push(times[i]);
    }

    $(".flipbox").html();
    //$(".flipbox").html("<span class=\"big " + level + "\">" + theWords[0] + "</span>");

    $(".flipbox").flippy({
        color_target: theColour,
        direction: "bottom",
        duration: flipSpeed,
        verso: "<span class=\"big\">" + theTimes[0] + "</span>",
     });
    $("#wrapper").show('fast');
//console.log("0 of " + theWords.length);
}



$.fn.animateRotate = function(angle, startAng, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
        args.step = function(now) {
            $.style(e, 'transform', 'rotate(' + now + 'deg)');
            if (step) return step.apply(this, arguments);
        };

        $({deg: startAng}).animate({deg: angle}, args); //note the 0 is start, but this should be passed in...
    });
};


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