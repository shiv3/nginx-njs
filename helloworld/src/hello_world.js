function hello(r) {
    r.return(200, "Hello world!");
}

function header(r) {
    var h = r.headersIn["test"];
    r.headersOut['test'] = "[header]Hello " + h;
    r.status = 200;
    r.contentType = 'text/plain';
    r.sendHeader();
    var b = r.args["test"];
    var msg = '[body]Hello '+ b;
    r.send(msg);
    r.finish();
}

