var request = new XMLHttpRequest();
request.open("GET", "data/file.json", false);
request.send(null);
var my_JSON_object = JSON.parse(request.responseText);
var innerHtml = "";
my_JSON_object.forEach(function(element) {
    innerHtml += "<li class='list__item'>" +
            "<div class='name'><a href='"+element.html_url+"'>"+element.name+"</a></div>" +
            "<div class='avatar'><img src='"+element.owner.avatar_url+"' alt=''></div>" +
            "<div class='repos_name'><a href="+element.owner.url+">"+element.owner.login+"</a></div>" +
        "</li>"
});

document.getElementsByClassName('list')[0].innerHTML = innerHtml;
