require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const mongoose=require("mongoose");

/*mongoose.connect(process.env.DB_URL,{},(err)=>{
    if (!err) return console.log('connected to DB')
    console.log(err)
})
*/
mongoose.connect(process.env.DB_URL, {})
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err));

const PORT=process.env.PORT || 3500
app.use(express.urlencoded({extended:true}))


app.use(express.static(path.join(__dirname,""./frontend/build")))
app.get('*',function(req,res){res.sendFile(path.join(__dirname,""./frontend/build/index.html"));});


app.use(cookieParser())
app.use(cors())
app.use('/auth',require('./Controller/Routes/auth'))
app.listen(PORT,()=>{
    console.log('listening on '+PORT)
})
