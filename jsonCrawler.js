function readJSON(file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
    if (request.status == 200){
    	  var json = JSON.parse(request.responseText);
    	  console.log(json);
    }
};