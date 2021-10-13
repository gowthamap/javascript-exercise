$(document).ready(function(){

    // $("header nav li:first").css({border: "2px solid red"});
    // $("header nav li:last").css({border: "2px solid red"});

    // $("#contact ul:first-child").css({border: "2px solid red"});
    // $("#contact ul:last-child").css({border: "2px solid red"});

    // $("header nav li:even").css({border: "2px solid blue"});
    // $("header nav li:odd").css({border: "2px solid yellow"});

    // $("section:not('#contact')").css({border: "2px solid green"});

    // $("#social-nav li:lt(3)").css({border: "2px solid blue"});

    // $("#social-nav li:gt(2)").css({border: "2px solid blue"}); 

    // $("img[alt]").css({border: "2px solid pink"});

    // $("img[alt=quote]").css({border: "2px solid purple"});

    // $("#contact-methods").next().css({border: "3px solid red"});

    // $("#social-nav").prev().css({border: "3px solid blue"}); 

    // $(".banner-title").parents().css({border: "3px solid pink"});

    // $("#social-nav").children().css({border: "3px solid green"});

    // $("#contact").find(".facebook").css({border: "3px solid purple"});

    // $("#social-nav").closest(".wrapper").css({border: "3px solid orange"});

    // $("#contact-methods").css({border: "2px solid red"})
    //     .next().css({border: "2px solid green"})
    //     .closest("section").css({border: "2px solid blue"});

    //SOME CODE TO PULL IN MY LATEST TWITTER TWEET
    // var tweet = "The big fight live: Ham vs Cheese!";

    // $("#tweets div p").text(tweet);


    // $("section").wrap("<div>");
    // $("section").unwrap();
    // $("section").wrapAll("<div>");

    // var wrapper = "<div class='wrapper'>";
    // var button = $(".button");
    // var wrapped = true;

    // button[0].onclick = function(){
    //     if(wrapped){
    //         $("section").unwrap();
    //         wrapped = false;
    //         button.text("Wrap");
    //     } else{
    //         $("section").wrapAll(wrapper);
    //         wrapped = true;
    //         button.text("Unwrap");
    //     }
    // }

    // $(".button").remove();
    // $("#contact img").remove();

    // console.log($("#contact img").attr("alt"));

//    $("#social-nav").css({
//        "top" : "-400px",
//        "left" : "150px",
//        "opacity" : "0.5",
//        "border-top" : "4px solid red"
//    });

// $("header .wrapper").removeClass("wrapper");
// $("header > div").addClass("wrapper");
// var button = $("#lead-banner a");

// button[0].onclick = function(){
//     $("#points-of-sale").toggleClass("open");
//     return false;
// }

// var myLis = $("#points-of-sale li");

// myLis.on("click", function(){

//     $(this).css({"background": "pink"});
    
//     myLis.off("click");
// });


// $("#lead-banner").on("dblclick", function(){
//     alert("You double clicked me");
//     $("#lead-banner").off("dblclick");
// });

// $(window).load(function(){

// });

// $("*").on("click",function(e){

//     console.log(e.target);
//     console.log("the event type is:" + e.type);
//     console.log("X co-ordinate of the event is: " + e.pageX);
//     console.log("y co-ordinate of the event is: " + e.pageY);
//     e.stopPropagation();
// });

// $("section > h2").on("click", function(){
//     $(this).animate({"width" : "500px", "height" : "100px"},1000,"linear", complete)
      
// })

// function complete(){
//     alert("Animation complete");
// }

// $(".slide-button-up").click(function(){
//     $("#lead-banner").slideToggle(1000, function(){
//         alert("animation complete");
//     });
// });


// var allQuotes = $("blockquote");
// var currentQuote = 0;

// function changeQuote(){
//     $(allQuotes[currentQuote]).fadeOut(200, function(){

//         if(currentQuote == allQuotes.length - 1){
//             currentQuote = 0;
//         } else{
//             currentQuote++;
//         }
    
//         $(allQuotes[currentQuote]).fadeIn(200);


//     });

    

// }

// var quoteTimer = setInterval(changeQuote, 3000);


    var items = $("#points-of-sale li");

    items.click(function(){
        $(this).find("p").slideToggle(500);
    });


});