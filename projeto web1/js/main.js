$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
});


//class Main {
    //constructor() {
      this.serverUrl = '127.0.0.1';
      this.headers = [];
      this.method = 'POST';
    }
    setServerUrl(serverUrl) {
      this.serverUrl = serverUrl;
    }
    getServerUrl() {
      return this.serverUrl;
    }
    addHeader(_key, _value) {
      this.headers.push({ key: _key, value: _value });
    }
    getHeader() {
      return this.headers;
    }
    setMethod(_method) {
      this.method = _method;
    }
    getMethod() {
      return this.method;
    }
    request(endPoint, data, callback) {
      var xhr = new XMLHttpRequest();
  
      xhr.open(this.method, this.serverUrl + endPoint);
  
      this.headers.forEach((header) => {
        xhr.setRequestHeader(header.key, header.value);
      });
  
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          callback(this.responseText);
        }
      });
  
      xhr.send(data);
    }
    json(endPoint, objToSend, callback) {
      this.addHeader("content-type", "application/json");
      this.addHeader("cache-control", "no-cache");
      this.request(endPoint, JSON.stringify(objToSend), (responseText) => {
        callback(JSON.parse(responseText));
      });
    }
  }
  module.exports.main = Main;
