function createElement(data) {
    let p = document.createElement("p");                        
    let d = document.createTextNode(data);    
    x.appendChild(d);                                           
    document.body.appendChild(p); 
}

function queryWikipedia(callback) {
    let req = new XMLHttpRequest();
    req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    req.responseType = "json"
    req.onload = function () {
        let req = req.response;
        callback(req.query.pages[21721040].extract);
    }
    req.send();
}

queryWikipedia(createElement)