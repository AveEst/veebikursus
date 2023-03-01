//https://phoenixnap.com/kb/install-node-js-npm-on-windows
//https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module
// nodejs server example

//serveri püstipanek
//http on node-i sisseehitatud moodul
//req - sissetulev sõnum
//res - vastus

//JSON - andmeformaat


//var http = require('http');
 //http.createServer(function (req, res) {
   //res.writeHead(200, {'Content-Type': 'text/html'});
   //res.end('Hello Ave!');
 //}).listen(8080);

const http = require("http");
const host = 'localhost';
const port = 8080;

//Matkaklubi JSON

//arrey sees on matkad objektidena kuna on vaja ära defineerida erinevad väljad
const matkadeAndmed={
    kogus: 2,
    labiviija:"Mihkel",
    matkad:[
        {
            pealkiri:"Rännak ümber Ülemiste",
            kestvus:"1h",
            pikkus: "1km"
        },
        {
            
            pealkiri:"Merematk Tallinna lahel",
            kestvus:"3h",
        },
    ]
};

const requestListener = function (req, res) {
        res.setHeader("Content-Type","application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200);
        res.end(JSON.stringify(matkadeAndmed));
        
    };

    //JavaScript object on vaja teha JSON-iks
    //JSON.stringify()

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});