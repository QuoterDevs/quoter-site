var express = require('express');
var app = express();
var fetch = require('node-fetch')
app.use('/', express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/mon/boticord', async function(req, res) {
  res.redirect('https://boticord.top/bot/736963755904335942')
}) 
app.get('/mon/sdc', async function(req, res){
  res.redirect('https://bots.server-discord.com/736963755904335942')
})
app.get('/hosting', async function(req, res) {
  res.redirect('https://timeweb.com/ru/services/vds?utm_source=ca87013&utm_medium=timeweb&utm_campaign=timeweb-bring-a-friend')
})
app.get('/invite', async function(req, res){
  res.redirect('https://discord.com/oauth2/authorize?client_id=736963755904335942&permissions=8&scope=bot')
})
app.get('/support', async function(req, res) {
  res.redirect('https://discord.gg/Ng2qJqA72m')
})
app.get('/avatar.png', async function(req, res){
  res.sendFile(__dirname + '/public/assets/Quoter.png');
})
app.get('/favicon', async function(req, res){
  res.sendFile(__dirname + '/public/assets/favicon.png');
})

app.use(function(req, res, next) {
    res.sendFile(__dirname + '/public/404.html');
  });

app.listen(8000, () => {
    console.log('App listen on port 8000!');
});