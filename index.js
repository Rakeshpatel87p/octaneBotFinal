var express = require('express'),
    httpRequest = require('request'),
    app = express(),
    http = require('http'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 8080,
    FACEBOOK_PAGE_ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

app.get('/webhook/', function(req, res) {
    if (req.query['hub.verify_token'] === 'super_secret_token') {
        res.send(req.query['hub.challenge']);
    }
    res.send('Error, wrong validation token');
})

app.post('/webhook/', function (req, res) {
  messaging_events = req.body.entry[0].messaging;
  for (i = 0; i < messaging_events.length; i++) {
    event = req.body.entry[0].messaging[i];
    sender = event.sender.id;
    if (event.message && event.message.text) {
      text = event.message.text;
      // Handle a text message from this sender
    }
  }
  res.sendStatus(200);
});

app.listen(process.env.PORT || 8080);
