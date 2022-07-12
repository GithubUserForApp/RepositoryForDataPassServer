var User = require('./models/user_issues_model')


var functions={
    //for adding the user
    addNew: function(req, res){
        //if fields not filled
        if((!req.body.firstName ) ){
            res.json({success:false, msg: 'Enter FirstName'})
        }
        else{
            var newUser= User({
                firstName: req.body.firstName,
            });
            newUser.save(function(err, newUser){
                if(err){
                    res.json({success:false, msg: 'Failed to save'})
                }
                else{
                    res.json({success:true, msg: 'Successfully saved'})
                }
            })
        }
    },
}

module.exports=functions