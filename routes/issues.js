const express = require("express");
const router= express.Router(); 
const UserIssueModel= require('../models/user_issues_model'); 

router.post("/createUserIssue", async(req,res)=>{ //first end point
    const userIssue= new UserIssueModel({ 
        firstName: req.body.firstName,
        /*LastName: req.body.LastName,
        EmailId: req.body.EmailId,
        Department: req.body.Department,
        OppurtunityType: req.body.OppurtunityType,
        Role: req.body.Role,
        EligiblityCriteria: req.body.EligiblityCriteria*/
    })
    try{
        const newUserIssue =  await userIssue.save();
        //res.status(201).json(newUserIssue);
        res.json(newUserIssue);
    }
    catch(error){
        res.json({ msg: error });
    }
})

router.get("/getUserIssues", async(req,res)=>{
    try{
        let UserIssue=await UserIssueModel.find();
        res.json(UserIssue);
    }
    catch(e){
        res.json({ msg: e });
    }
});

module.exports = router;