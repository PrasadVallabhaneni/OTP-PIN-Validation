const express = require("express");
const app = express();
var port = process.env.PORT || 3001;
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post('/:otp',(req,res)=>{
  let arr=['5764','1964','1576'];
  if(arr.includes(req.params.otp)){
      res.status(200).json({message:'Your otp is verified successfully'})
  }else{
      res.status(422).json({message:'You have entered wrong otp'})
  }
})






app.listen(port, () => console.log(port));