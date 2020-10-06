var
oHttp = require('http'),
fs = require('fs'),
index,
favicon,
oServer,
fnGetClientAddress;

const PORT=5000;

favicon = fs.readFileSync('favicon.ico');
index = fs.readFileSync('SXS/index.html');

fnGetClientAddress = function (req) {
        return (req.headers['x-forwarded-for'] || '').split(',')[0]
        || req.connection.remoteAddress;
};

function handleRequest(request, response){

    var
    sOptions = request.url.split("?")[1],
    sRequest = request.url.split("?")[0],
    sClient = fnGetClientAddress(request);

    try {
        switch(sRequest){

        case "/":
          console.log(sClient + " - started a new Battle");
          response.writeHeader(200, {"Content-Type": "text/html"});
          response.write(index);
          response.end();
        break;

    		case "/favicon.ico":
    			response.writeHead(200, {'Content-Type': 'image/x-icon'});
    			response.end(favicon, 'binary');
        break;

    		default:
    			var sData = fs.readFileSync("SXS" + sRequest);

          response.writeHead(202, {'Content-Type': 'application/json'});
          response.end(sData);
    		break;
        }
    } catch(err) {
        console.log(err);
        response.writeHead(400, {'Content-Type': 'text/plain'});
        response.end('Error:' + err);
    }
}

oServer = oHttp.createServer(handleRequest);
oServer.listen(process.env.PORT || 5000, function(){
    console.log("Server listening on: http://localhost:" + PORT);
    console.log(" ");
    console.log("Nachthimmel erleuchtet");
    console.log("Tiefes Rot verschlingt das Grün");
    console.log("Asche nährt neues");
    console.log(" ");
    console.log("Project_SXS");
    console.log("______________________________________________");
});
