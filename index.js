var request = new XMLHttpRequest();
request.open("GET", "data/file.json", false);
request.send(null);
var my_JSON_object = JSON.parse(request.responseText);
var innerHtml = "";
my_JSON_object.forEach(function(element) {
    innerHtml += "<li class='list__item'>" +
            "<div class='name'>"+element.name+"</div>" +
            "<div class='avatar'><img src='"+element.owner.avatar_url+"' alt=''></div>" +
            "<div class='repos_name'>"+element.owner.login+"</div>" +
            "<div class='repos_url'>"+element.owner.url+"</div>" +
        "</li>"
});

document.getElementsByClassName('list')[0].innerHTML = innerHtml;
