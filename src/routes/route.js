const express = require('express');
const router = express.Router()




let persons= [
   {
      name: "PK",
      age: 10,
      votingStatus: false
   },
   {
      name: "SK",
      age: 20,
      votingStatus: false
   },
   {
      name: "AA",
      age: 70,
      votingStatus: false
   },
   {
      name: "SC",
      age: 5,
      votingStatus: false
   },
   {
      name: "HO",
      age: 40,
      votingStatus: false
   }
   ]
   
 
router.post('/person', function(req,res){
   const votingAge=req.query.votingAge
   const updatedPersons=[]
   persons.forEach((person)=>{
      if(person.age>=votingAge){
         person.votingStatus=true
         updatedPersons.push(person)
      }
   })
return res.send({updatedPersons:updatedPersons})
})


module.exports = router;
// adding this comment for no reason