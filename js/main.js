//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

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

  $('.btn-sm').click(function() {

    var navContainer = $('.user-info');
    var loginForm = $('#login-form');
    var fullName = $(".user-fullname");

    fullName.text(userInfo.firstName + "    " + userInfo.lastName);
    fullName.css("fontSize", 20);
    fullName.css("font-weight","Bold");
    navContainer.css("fontSize", 20);
    navContainer.css("font-weight","Bold");
    //hide form 
    loginForm.hide();
    navContainer.fadeIn();
  });

  // TODO: Create a function that listens for clicks on the voting buttons and
  // looks at the `data-vote` attribute on each button to see what was voted for,
  // then determines the updated vote breakdown to adjust the progress bars.
  //      1. Set up an event listener on the buttons with the `vote` class.
  //      2. When a button is clicked, look at the `data-vote` attribute to determine
  //          what the user is voting for ("great" or "greatest").
  //      3. Increment the counter for whichever vote talley is affected.
  //      4. Determine the respective percentages (out of 100) for each progress bar.
  //      5. Modify the `width` attribute on each progress bar to set the updated percentage.



  $('.view-details').on('click', function(event) { // when selecting this class, view-details, which is a class for the default expansion buttons, the function runs with calling the object "event". 

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
});