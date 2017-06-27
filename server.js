var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer  = require('multer');
var cookieParser = require('cookie-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/'}));
// app.use(cookieParser())

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

// app.post('/file_upload', function (req, res) {
//    console.log(req.files.file.name);
//    console.log(req.files.file.path);
//    console.log(req.files.file.type);
//    var file = __dirname + "/" + req.files.file.name;
//
//    fs.readFile( req.files.file.path, function (err, data) {
//       fs.writeFile(file, data, function (err) {
//          if( err ){
//             console.log( err );
//             }else{
//                response = {
//                   message:'File uploaded successfully',
//                   filename:req.files.file.name
//                };
//             }
//          console.log( response );
//          res.end( JSON.stringify( response ) );
//       });
//    });
// })

app.post('/process_post', urlencodedParser, (req, res) => {
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

// app.get('/process_get', (req, res) => {
//    response = {
//       first_name:req.query.first_name,
//       last_name:req.query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })

// app.get('/', (req, res) => {
//    console.log("Got a GET request for the homepage");
//    res.send('Hello WORLD');
// })

// app.get('/', (req, res) => {
//    console.log("Got a GET request for the homepage");
//    res.send('Hello GET');
// })
//
// app.post('/', (req, res) => {
//    console.log("Got a POST request for the homepage");
//    res.send('Hello POST');
// })
//
// app.delete('/del_user', (req, res) => {
//    console.log("Got a DELETE request for /del_user");
//    res.send('Hello DELETE');
// })
//
// app.get('/list_user', (req, res) => {
//    console.log("Got a GET request for /list_user");
//    res.send('Page Listing');
// })
//
// app.get('/ab*cd', (req, res) => {
//    console.log("Got a GET request for /ab*cd");
//    res.send('Page Pattern Match');
// })


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
