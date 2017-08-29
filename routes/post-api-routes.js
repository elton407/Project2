var db = require("../models/");

module.exports = function (app) {
    app.post("/event/create", function (req, res) {

        db.Event.create({
            event_name: req.body.eventName
            //console.log(req.body.h4.modalBody);
            //PINvitation: 123456
        })
            // pass the result of our call
            .then(function (results) {
                // log the result to our terminal/bash window
                res.json({ testData: results });
                console.log(results);
            });
    })
};