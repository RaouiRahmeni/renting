const express = require('express');
const bodyParser = require('body-parser');

const Admin = require('../database-mongodb/Admin.js');
const Host = require('../database-mongodb/Host.js');
const Visitor = require('../database-mongodb/Visitor.js');
const Announcement = require('../database-mongodb/Announcement.js')
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
//login request
app.post('/api/renting/login', function (req, res) {
  // console.log("data from req:", req.body);
  Host.find(req.body, (error, data) => {
    if (error) {
      throw error
    }
    else {
      if (data.length > 0) {
        // console.log("data from db host:", data);
        
        res.send(data)
      } else {
        Visitor.find(req.body, (error, data) => {
          if (error) {
            throw error
          }
          else {
            if (data.length > 0) {
              // console.log("data from db visitor:", data);
              
              res.send(data)
            } else {
              Admin.find(req.body, (error, data) => {
                if (error) {
                  throw error
                }
                else {
                  // console.log("data from db admin:", data);
                 
                  res.send(data)
                }
              })
            }

          }
        })

      }

    }
  })


});
///signup request

app.post('/api/renting/signup/host', function (req, res) {
  console.log("data from req:", req.body);

  var host = new Host(req.body);
  host.save(function (err) {
    if (err) return handleError(err);
    // saved!
  });

});
app.post('/api/renting/signup/visitor', function (req, res) {
  // console.log("data from req:", req.body);
  Visitor.create(req.body, (error) => {
    if (error) {
      throw error
    }

  })
});



///create an annoucement request
app.post("/api/announcement", function (req, res) {
  // console.log(req.body);

  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const { title, description, address, numberOfRooms, numberOfVisitors, picture1, picture2, picture3, picture4, picture5,
    strongPoints, extraAccomodations, startDate, endDate } = req.body

  Announcement.create(req.body, (error) => {
    if (error) {
      res.send(error)
    }
  })
  // if(!title || !description || !address || !numberOfRooms|| !numberOfVisitors|| !picture1 || !picture2 || 
  //   !picture3 || !picture4 || !picture5 || !strongPoints || !extraAccomodations || !startDate || !endDate 
  //   || endDate<startDate || startDate < date){
  //  return res.status(400).json({
  //    message: 'Announcement informations are required',
  //  });



  // }else{
  //    Announcement.create(req.body,(error)=>{
  //   if(error) {
  //     res.send(error  )
  //   }
  // })
  // }

})

app.get('/api/renting/fetching', function (req, res) {
  Announcement.find().populate('host').exec(function (err, data) {
    if (err) {
      console.error("iam in error",err) 

    } else {
      res.send(data)
    }
  })
})

//add to favoris
app.put('/api/renting/favoris/add/:id', function (req, res) {

  console.log("req in server: ", req.params);
  
  Visitor.findByIdAndUpdate(
    req.params.id ,
    { $push: { Favoris: req.body.favoris } },
    { new: true, useFindAndModify: false }, (error, data) => {
      if (error) {
                throw error
              }
              else {
                 console.log("data from db:", data);
                res.send(data)
              }
    }
  );
  Announcement.findByIdAndUpdate(
    req.body.favoris  ,
    { $push: { visitor: req.params.id} },
    { new: true, useFindAndModify: false }, (error, data) => {
      if (error) {
                throw error
              }
              else {
                 console.log("data from db:", data);
                res.send(data)
              }
    }
  );

});
//get favoris 
app.get('/api/renting/fetching/favoris/:id', function (req, res) {
  Announcement.find({visitor:req.params.id}).populate("visitor host").exec( (err, data)=> {
    if (err) {
      console.error("i am in error");
      throw err

    } else {
      
      console.log("data from query:",data);
      res.send(data)
    }
  })
})

//delete announcement from the favoris in visitor and visitor  in announcements

app.put('/api/renting/favoris/delete/:_id', function (req, res) {

  console.log("req in server: ", req.body);
  
  Visitor.findByIdAndUpdate(
    req.params ,
    {$pull:{Favoris: { $in:[req.body.favoris]} }},{new:true},(error, data) => {
      if (error) {
                throw error
              }
              else {
                 console.log("data from db:", data);
                res.send(data)
              }
    }
  );
  Announcement.findByIdAndUpdate(
    req.body.favoris ,
    { $pull: { visitor:  { $in:[req.params]}} },
    {new:true},(error, data) => {
      if (error) {
                throw error
              }
              else {
                 console.log("data from db:", data);
                res.send(data)
              }
    }
  );

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});