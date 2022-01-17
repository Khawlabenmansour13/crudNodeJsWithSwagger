


var express = require('express');

var router = express.Router();


var Contact =  require('../models/contact.model');

// ADD FUNCTION 

router.post('/add', function(req, res) {


    var contact = new Contact({
        FullName: req.body.FullName,
        Phone:req.body.Phone,
        Email:req.body.Email
    })

    contact.save(function(err) { 

        if(err) {
            return res.json({ error : "there is an error"+err
            })
        }

        return res.json({message :"Contact created successfully"})
    })
})



//Update

router.put("/update/:id", function(req, res) {

    Contact.findByIdAndUpdate(req.params.id, {
        $set:req.body
    }, function (err,data) {
        if(err) {
            return res.json({ error : "there is an error"+err});

        }
        return res.json({message:"Contact updated",data:data})
    })
})

//Delete 
router.delete("/delete/:id",function(req,res) {
    Contact.findByIdAndRemove(req.params.id, function(err) { 
        if(err) {
            return res.json({ error : "there is an error"+err});

        }
        return res.json({message:"Contact deleted"});

    })
})

//GET 
router.get("/display",function(req,res) {
    Contact.find({},function(err,data ) {
        if(err) {
            return res.json({ error : "there is an error"+err});

        }
        return res.json({data:data});
    });
});



module.exports = router;