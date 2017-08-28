var ROW_SIZE = 4;

function appendText() {
    $.ajax({ url: "/api", method: "GET" })
        .done(function (results) {
            //console.log("get /api results:", results);
            
            var data = results.yelpData;
            
            // Create a jquery object to hold events div from home.html
            var $eventHolder = $("#events");

            // For each data item
            $.each(data, function (key) {
                // Build event object                
                var $eventData = $('<div>').addClass("thumbnail").addClass("col-sm-6 col-md-4");
                var $eventLocation = $('<p>').text(data[key].location.display_address);
                var $eventName = $('<h5>').text(data[key].name);
                var $eventImage = $('<img>').attr('src', data[key].image_url);
                var $eventButton = $('<a>')
                    .attr('href', '#')
                    .addClass("btn btn-primary")
                    .addClass("go")
                    .attr('role', 'button')
                    .text("Go!");

                // Append everything
                $eventData.append($eventName);
                $eventData.append($eventImage);
                $eventData.append($eventLocation);
                $eventData.append($eventButton);
                
                // Create new row if needed
                if (key === 0 || (key) % ROW_SIZE === 0) {
                    var $eventRow = $("<div>")
                        .addClass("row")
                        .attr('id', key);
                    
                    // Append new row to events div                   
                    $eventHolder.append($eventRow);
                }
                // Append event data div to the last row in events div
                $('#events .row').last().append($eventData);
            });
        })
}

$(document).ready(function () {
    console.log("ready!");
    appendText();
});