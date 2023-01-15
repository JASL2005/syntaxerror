// Importing modules
const express = require('express');
const path = require('path');
const { CLIENT_RENEG_LIMIT } = require('tls');
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.set('views', __dirname + '/views');
app.use('/public', express.static('public'));



app.get('/', (req, res) => {
  res.render("forms.ejs")
});
  
app.get('/login', (req, res) => {
    res.render("login.ejs")
  });

app.post('/login',(req,res) => {
    console.log(req.body);
    console.log("hi")
    res.render("labs.ejs")
})


app.listen(3000, () => {
  console.log('Server is up on port 3000');
});