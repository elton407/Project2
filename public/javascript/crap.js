

var currentURL = window.location.origin;
console.log(currentURL);

$.ajax({ url: currentURL + "/api", method: "GET" })
.done(function(results) {
        // Here we are logging the URL so we have access to it for troubleshooting
        console.log("------------------------------------");
        console.log("URL: " + currentURL + "/all");
        console.log("------------------------------------");
        
        console.log(results);


        var event = results.data;
        var eventHolder = $('.events');
        // Empty current event images
        eventHolder.empty();
        $.each(results, function() {
          // Build the newDiv
          var $newDiv = $('<div>').addClass("card");
          // event name
          var $eventName = $('<h4>').text(+results.yelpData[i].name+).addClass("card-title");
          
          // Build the eventtImage 
          var $eventImage = $('<img>').attr("src", results.yelpData[i].image_url)
          
          });

          $newDiv.append($eventName);
          $newDiv.append($eventImage);
          eventHolder.append($newDiv);
          
        });
      };
};

$(document).ready(function() { 
  createButtons();
});