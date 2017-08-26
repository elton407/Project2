
  // $("#my_select").on('change',function(){
 //    var getValue =$(this).val();
 //    alert(getValue);
 //    category = getValue;
 //    console.log(category);
 //  });
 // alert('hello');
 var currentURL = window.location.origin;
 console.log(currentURL);
 $.ajax({ url: currentURL + "/api", method: "GET" })
 .done(function(results) {
        // Here we are logging the URL so we have access to it for troubleshooting
        console.log("------------------------------------");
        console.log("URL: " + currentURL + "/all");
        console.log("------------------------------------");
        // Here we then log the NYTData to console, where it will show up as an object.
        console.log(results);


        for (var i = 0; i < results.yelpData.length; i++) {
          console.log("results:", results.yelpData[i].name);
          console.log("imgLink:", results.yelpData[i].image_url);
          console.log("results:", results.yelpData[i].location);


          


          console.log(results.yelpData[0].name);

          function appendText() {
            // var txt1 = "<h1>"+results.yelpData[i].name+"</h1>";               // Create element with HTML  
            // var txt2 = $("<p></p>").text(results.yelpData[i].image_url);   // Create with jQuery
            // var txt3 = "<p>"+results.yelpData[i].location.address1+"</p>"; 
            // var txt4 = "<p>"+results.yelpData[i].location.city+"</p>"
            // var txt5 = "<p>"+results.yelpData[i].location.state+"</p>"
            // $("body").append(txt1, txt2, txt3, txt4, txt5);      // Append the new elements 

            var newDiv = $('<div class = "col-lg-4 id="imgdiv">');
            var newPara = "<h4>"+results.yelpData[i].name+"</h4>";
            var newEvent = $('<img>');
            var locationAddy = "<p>"+results.yelpData[i].location.display_address+"</p>";

            newEvent.attr("src", results.yelpData[i].image_url);

            newEvent.addClass("eventImage");

            $(newPara).appendTo(newDiv);
            $(newEvent).appendTo(newDiv);
            $(locationAddy).appendTo(newDiv);
            $("#events").append(newDiv);
          }


          appendText();
        }
      });


function changePlaceholder () {
  $(".form-control").val("anytext");
 console.log('hello');
}
 
 changePlaceholder();


// .val("").focus().blur()
//     function appendText() {
//     var txt1 = "<p>Text.</p>";               // Create element with HTML  
//     var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
//     var txt3 = document.createElement("p");  // Create with DOM
//     txt3.innerHTML = "Text.";
//     $("body").append(txt1, txt2, txt3);      // Append the new elements 
// }

// appendText();