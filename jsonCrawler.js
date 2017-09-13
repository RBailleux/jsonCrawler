function readJSON(file, divId) {
    let request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
    if (request.status == 200){
    	  let json = JSON.parse(request.responseText);
    	  console.log(json);
    	  let res = []
    	  for (let repo of json) {
              let tmp = {}
              tmp.name = repo.name
              tmp.created = repo.created_at
              tmp.description = repo.description
              tmp.author = repo.owner.login
              tmp.avatar = repo.owner.avatar_url
              tmp.url = repo.url
              res.push(tmp)
          }
          console.log(res)
        return res
    } else {
        console.log('Error')
        return false
    }
};

