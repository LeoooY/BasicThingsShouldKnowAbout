const express = require('express');
const app=express();

const port = process.env.PORT || 10023;

app.listen(port);
console.log('Magic happens on port '+port);


const router = express.Router();
router.get('/', (req,res)=>{
  res.send('<h1>Hello Wolrd </h1>');
  // res.send('');
});

router.use( (req,res,next)=>{
  console.log('There is a requesting');
  next();
})


app.use('/home',router);
