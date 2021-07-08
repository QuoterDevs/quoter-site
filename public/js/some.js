let data = new XMLHttpRequest();
    data.open("GET", 'http://localhost:3000/fetch?url=http://localhost:5000', true)
    data.responseType = 'json';
    data.send()
    data.onload = function() {
      min.innerHTML = data.response.some;
    }  