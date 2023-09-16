const express = require("express")
const app = express()
const session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))
  
  app.get('/',(req,res)=>{
    res.send('welcome')
  })

  app.get('/viewCount',(req,res)=>{
    if(req.session.count){
        req.session.count+=1;
    }else{
        req.session.count=1;
    }

    res.send(`you visited the page ${ req.session.count}times`)
  })

  app.listen(8080,()=>{
    console.log('server connected at port 8080')
  })