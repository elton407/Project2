//Dependencies
var express = require("express");
var router = express.Router();
var db = require("../models/");

/////events/////
//Note: the below may be optional as it is returning the information...
router.get("/events", function(req, res){
    db.events.findAll()
    .then(function(wknd){
        var hbsObject = { event: wknd };
        return res.render("event", hbsObject);
    });
});

//The below will take the information from the events page and update it in the database.
$(document).ready(function(){
    var eventName = $(#eventName);
    var locationName = $(#locationName);
    var eventDate = $(#eventDate);
    var eventTime = $(#eventTime);
    var locationAddress = $(locationAddress);
    $(document).on("submit",".btn btn-primary", handleEventFormSubmit);

    function handleEventFormSubmit(event){
        event.preventDefault();
        if (!eventName.val().trim().trim()){
            return;
        }
        upsertEvent({
            event_name: eventName,
            location_name: locationName,
            event_date: eventDate,
            event_time: eventTime,
            location_address: locationAddress
        })
    }

    function upsertEvent(eventData){
        $.post("/api/events", eventData)
            .then(getEvent);
    }
};

/////guest/////
//The below will modify the boolean value for whether or not someone is attending an event.
$(document).ready(function(){
    //NOTE: we need to add ID to the accept
    var attending = $(#confirmAttending);
    //NOTE: we need to discuss what buttons we will be using for this.
    $(document).on("select", "#confirmAttendence", handleAttendingFormSubmit);

    function handleAttendingFormSubmit(event){

        updateAttending({
            attending: true
        })

    // function updateAttending(guestData){
    //     $.post()
    // }
});




/////user/////
//The below will take the information from the user entered data and put it into the mysql database
$(document).ready(function(){
    //NOTE: grab correct input IDs when we meet.
    var userName = $(#userName);
    var email = $(#email);
    var mobileNumber = $(#mobileNumber);
    //NOTE: grab correct submit ID.
    $(document).on("submit",".btn btn-primary", handleUserFormSubmit);

    function handleUserFormSubmit(event){
        event.preventDefault();
        if (!userName.val().trim().trim()){
            return;
        }
        upsertUser({
            user_name: userName,
            email: email,
            mobile_number: mobileNumber,
        })
    }

    function upsertUser(userData){
        $.post("/api/user", userData)
            .then(getUser);
    }
});


// export
module.exports = router;