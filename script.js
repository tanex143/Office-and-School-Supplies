function initMap() {
    let home = {lat: 8.509074, lng: 124.774874};

    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 18, center: home});

    let marker = new google.maps.Marker({
        position: home,
        map: map
    });
  }


let one = new String('test');
let two = new Number(123);
let three = new Array(20,25,30);
let four = new Object('test');
let five = new Boolean(true);












