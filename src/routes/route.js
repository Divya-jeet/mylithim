const express = require('express');
const router = express.Router()


router.get('/missingNumber',(req,res)=>{
    const arr=[1,2,3,5,6,7];
    let missingNumber=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]+1 !==arr[i+1]){
            missingNumber=arr[i]+1;
            break;
        }
    }
    res.send(`the missing number is  ${missingNumber}`)
});

router.get('/missingNumber2',(req,res)=>{
    const arr=[33, 34, 35, 37, 38];
    let missingNumber=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]+1 !==arr[i+1]){
            missingNumber=arr[i]+1;
            break;
        }
    }
    res.send(`the missing number is  ${missingNumber}`)
});





module.exports = router;
// adding this comment for no reason