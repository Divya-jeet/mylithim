const express = require('express');

const router = express.Router();

let movies=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
router.get('/movies',(req,res)=>{
    res.send(movies)
""
})
// router.get('/movies/:indexNumber',(req,res)=>{
//     let index = req.params.indexNumber  
//     res.send(movies[index])
// })
router.get('/movies/:indexNumber',(req,res)=>{
    let index = req.params.indexNumber
    if(index>movies.length){
        res.send("please give a valid index")
    }else{
        res.send(movies[index])
    }
})
let films=[ {
    'id': 1,
 'name': 'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   }]
//    router.get('/films',(req,res)=>{
//     res.send(films)
//    })
   router.get('/films/:filmid',(req,res)=>{
    let filmid = req.params.filmid
    if (filmid>films.length){
        res.send('Please use a valid index')
    }
    else{
        res.send(films[filmid-1])
    }
})

module.exports = router;