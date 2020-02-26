const db = require("../models");

// Defining methods for the studyController
module.exports = {
  findCookie: function(req, res) {
if(req.session.userName) {
    res.json(req.session)
}
else {
  //console.log("no username saved")
}
  },
  create: function(req, res) {
    db.Study
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllPosts: function(req, res) {
    //console.log("findAllPosts")
    db.Study
    .find({})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findSubjectPosts: function(req, res) {
    //console.log("findPosts")
    //console.log(req.body.params.q.subject)
    db.Study
    .find({subject: req.body.params.q.subject})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  createReply: function(req, res) {
    //console.log(req.body)
    db.Study
    .findOneAndUpdate({_id: req.body.id}, 
    {$push: {replies: {userName: req.body.userName, replyContent: req.body.replyContent}}},
    {
      returnNewDocument: true
  })
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findYourReplies: function(req, res) {
    //console.log(req.body.userName)
    db.Study
    .find({user: {userName: req.body.userName, email: req.body.email}})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
   findUser: function(req, res) {
    //console.log("Session: ___l")
    const response = {session: req.session}
    //console.log(req.body)
    db.User
      .find({userName: req.body.params.q.userName, password: req.body.params.q.password})
      .sort({ date: -1 })
      .then(dbModel => {
      response.dbModel = dbModel,
      req.session.userName = response.dbModel[0].userName,
      req.session.email = response.dbModel[0].email,
      res.json(response);
    }).catch(err => res.status(422).json(err));
  },
  findAllUsers: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: function(req, res) {
    //console.log("Session: ___c")
    //console.log(req)
    db.User.find({
        userName: req.body.userName
    }).then(function(results) {
      if (results.length > 0) {
        res.send("false");
      } else {
        db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      }
    });
    
  },
};
