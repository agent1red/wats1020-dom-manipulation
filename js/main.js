//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////
/*
For the Vote Count This was difficult to understand. 
I started with what made sense to me by variable declaration. 
then broke the function down to sections such as count, calculate, 
and manipulate the progress bar. 

List of link references that helped me out: 

http://learn.jquery.com/using-jquery-core/data-methods/
https://www.youtube.com/watch?v=Jzlzzg_zD1I
https://www.sitepoint.com/use-html5-data-attributes/
http://jsfiddle.net/422gv/
https://www.sitepoint.com/jquery-settimeout-function-examples/
http://www.w3schools.com/jsref/met_win_settimeout.asp\
http://stackoverflow.com/questions/15466802/how-can-i-auto-hide-alert-box-after-it-showing-it
http://www.w3schools.com/jsref/met_win_open.asp
*/


$(document).ready(function() {
  var userInfo = {
    firstName: 'Jane  ',
    lastName: ' Doe  '
  };
  var voteCounts = {
    great: 0,
    greatest: 0,
    total: 0
  };

  /*   javaScript alert box is impossible to autoclose due to the "ok" 
  buton so this is a windows popup function for the voting message.
  Thisis working however I could use message instead of alert but that
  is not workign on some bowers. 
  
  */
  var message = function() {
    var w = window.open('', '', 'width=500,height=200,left=900,top=400');
    w.document.write('5 second timer message</br></br> </br>Currently the total votes so far are ' + voteCounts.total + '. Thank you for you Vote!')
    w.focus()
    setTimeout(function() {
      w.close();
    }, 5000)
  }


  $('.btn-sm').click(function() {

    var navContainer = $('.user-info');
    var loginForm = $('#login-form');
    var fullName = $(".user-fullname");

    fullName.text(userInfo.firstName + "    " + userInfo.lastName);
    fullName.css("fontSize", 20);
    fullName.css("font-weight", "Bold");
    navContainer.css("fontSize", 20);
    navContainer.css("font-weight", "Bold");
    //hide form 
    loginForm.hide();
    navContainer.fadeIn();
  });




  $('.view-details').on('click', function(event) { /*when selecting this class, view-details, which is a class for the 
  default expansion buttons, the function runs with calling the object "event".*/ 

    console.log(event); // acknowledges the event has occured  
    var targetElement = event.target; // varible assigned to the event atribute target
    var container = targetElement.parentElement.parentElement; // variable assigned to the parent element 

    // function indexing element runs for the class .details inside of the target container
    $(container).find('.details').each(function(index, el) {
      // if element in the .class details is visible then when the button is clicked run the fadeout function and change the button text
      if ($(el).is(':visible')) {
        $(el).fadeOut();
        targetElement.innerText = "View Details";
        // else when the element is not visible un the fadein function and change the button text 
      } else {
        $(el).fadeIn();
        targetElement.innerText = "Hide Details";
      }
    })
  })

  //Vote Count section: 



  $('.vote').on('click', function(event) {
    /*Variables defined here in the function. This can be done in different ways.
      Also Jquery assigned to variables. 
    */

    var targetElement = event.target;
    var greatPer = $('.great-progress');
    var greatestPer = $('.greatest-progress');
    var greatSelected = $(targetElement).data("vote") === ("great");
    var greatestSelected = $(targetElement).data("vote") === ("greatest");
    var vcg = voteCounts.great;
    var vcgst = voteCounts.greatest;
    var vct = voteCounts.total;


    /* count number of clicks here with an if else loop using the 
    voteCounts attributes then follow up with a total count outsie 
    the loop. 
*/
    console.log(vcg, vcgst, vct); // not necessary here but I used this for checking the vote count 
    if (greatSelected) {

      voteCounts.great++;


    } else if (greatestSelected) {

      voteCounts.greatest++;

    }

    voteCounts.total++;
    message();
    //Calculate percentage here variable equals the class attributes of voteCounts. Which is default of zero

    var greatCal = (vcg / vct * 100);
    var greatestCal = (vcgst / vct * 100);

    //manipulate percentage box width here with css. 

    $(greatPer).css('width', greatCal + '%');
    $(greatestPer).css('width', greatestCal + '%');
    console.log(greatCal, greatestCal, vct)

  });


});