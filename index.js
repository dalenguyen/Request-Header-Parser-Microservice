var app = require('express')()
var port = process.env.PORT || 8080

app.get('/', function(req, res){
	var ipaddress = req.headers['x-forwarded-for']
	var language = req.headers['accept-language']
	var software = req.headers['user-agent']

	language = language.split(',')[0]
	software = software.split('(')[1].split(')')[0]

	res.json({
		ipaddress: ipaddress,
		language: language,
		software: software
	})
}).listen(port, function(err){
	if(err) throw err
	console.log('I am on port: ' + port)
})
