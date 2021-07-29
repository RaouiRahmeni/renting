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
  console.log("data from req:",req.body);
  Host.find(req.body,(error, data) => {
    if (error) {
      throw error
    }
    else {
      if(data.length>0){
        console.log("data from db host:", data);
        // data[data.length]="host"
        console.log('data to send to client',data);
        res.send(data)
      }else {
        Visitor.find(req.body,(error, data) => {
          if (error) {
            throw error
          }
          else {
            if(data.length>0){
              console.log("data from db visitor:", data);
              // data[data.length]="visitor"
              console.log('data to send to client',data);
              res.send(data)
            }else{
              Admin.find(req.body,(error, data) => {
                if (error) {
                  throw error
                }
                else {
                  console.log("data from db admin:", data);
                  // data[data.length]="admin"
                  console.log('data to send to client',data);
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
  console.log("data from req:", req.body);
  Visitor.create(req.body,(error) => {
    if (error) {
      throw error
    }
    
  })
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


///create an annoucement request
app.post("/api/announcement", function(req,res){
  console.log(req.body);

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  const {title,description,address,numberOfRooms,image1,image2,image3,image4,image5,strongPoints,extraAccomodations,startDate, endDate} = req.body
  
  if(!title || !description || !address || !numberOfRooms|| !image1 || !image2 || !image3 || !image4 || !image5 || !strongPoints || !extraAccomodations || !startDate || !endDate || endDate<startDate || startDate < date){
   return res.status(400).json({
     message: 'Announcement informations are required',
   });



  }else{
     Announcement.create(req.body,(error)=>{
    if(error) {
      res.send(error  )
    }
  })
  }
 
})