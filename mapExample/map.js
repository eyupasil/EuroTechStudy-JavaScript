function initMap() {
  const myLatLng = { lat: 50.18884, lng: 8.58802 };

  const map = new google.maps.Map(
    document.getElementById("map"),
    {
      zoom: 16,
      center: myLatLng,
    }
  );


  var icon = {
    url: "marker2.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};
  //Adding a marker
  var markerEuroTech = new google.maps.Marker(
    {
      
      position: myLatLng,
      map: map,
      icon :icon
     // icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
    }
  )

  //Marker a info window eklenmesii
  const infWndw = new google.maps.InfoWindow(
    {
      content: "<h1>Euro Tech Study</h1>"
    }
  );
  markerEuroTech.addListener('click', function () {
    infWndw.open({
      anchor: markerEuroTech,
      map,
      shouldFocus: true
    })
  })
 // Marker ekleme işini fonksiyona dönüştürmek için 
// öncelikle çağıran fonksiyon uyazalım 
//addMarker(koor,iconImage,content)
  //Multiple Marker eklenmesi 
  function addMarker(props) {

    const marker = new google.maps.Marker({
      position: props.koordinatlar,
      map: map,
      icon: props.iconImage,
      scaledSize: new google.maps.Size(10, 10),
      title: "EuroTech Study",

      animation: google.maps.Animation.DROP
    });
    if (props.iconImage) {
      marker.setIcon(props.iconImage)
    }
    //İçerisinde content varsa infowindow ekleme
    if (props.content) {

      var infoWindow = new google.maps.InfoWindow({
        content: props.content

      });
      marker.addListener('click', () => {
        infoWindow.open(map, marker)
      });
    }
    marker.addListener("contextmenu",function(){
      this.setMap(null);
    })
  }

  //Son aşama yerlerin lokasyona dönüştürülmesi
  const myPlaces = [
    {
      koordinatlar: { lat: 50.18884, lng: 8.58802 },
      iconImage: 'ed-le.svg',
      content: '<h3>JavaScript Learning Center</h3>'
    },
    {
      koordinatlar: { lat: 50.18710, lng: 8.59176 },
      content: '<h3>Telekom Company</h3>'
    },
    {
      koordinatlar: { lat: 50.1905200427433, lng: 8.596578129380138 },
      iconImage: 'otomobil.jpg',
      content: '<h3>Automobile Company</h3>'
    }
  ]

  for (const place of myPlaces) {
    addMarker(place)
  }
  // addMarker(
  //     {
  //         koordinatlar: { lat: 50.18884, lng: 8.58802 },
  //         iconImage: 'ed-le.svg',
  //         content: '<h3>JavaScript Learning Center</h3>'
  //     });
  // addMarker(
  //     {
  //         koordinatlar: { lat: 50.18710, lng: 8.59176 },
  //         iconImage: 'lolipop.svg',
  //         content: '<h3>Telekom Company</h3>'
  //     });

  // addMarker({
  //     koordinatlar: { lat: 50.1905200427433, lng: 8.596578129380138 },
  //     iconImage: 'peng.svg',
  //     content: '<h3>Automobile Company</h3>'
  // })

  ////
  // Listen for click on Map 
  google.maps.event.addListener(map, 'click', event => {

    addMarker({
      koordinatlar: event.latLng
      // ,iconImage:'peng.svg'
    })

  })

  //Listen for Right Click
  google.maps.event.addListener(map, 'click', event => {

    addMarker({
      koordinatlar: event.latLng
      // ,iconImage:'peng.svg'
    })

  })
  // Find The Current Location
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");
  locationButton.classList.add("button-29")

  locationButton.textContent = "Konumumu Göster";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent(`<h3>Konumunuz Bulundu.</h3><h6>${pos.lat},${pos.lng}</h6>`);
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });

  // //Son aşama yerlerin lokasyona dönüştürülmesi
  // const myPlaces = [
  //     {
  //         koordinatlar: { lat: 50.18884, lng: 8.58802 },
  //         iconImage: 'ed-le.svg',
  //         content: '<h3>JavaScript Learning Center</h3>'
  //     },
  //     {
  //         koordinatlar: { lat: 50.18710, lng: 8.59176 },
  //         content: '<h3>Telekom Company</h3>'
  //     },
  //     {
  //         koordinatlar: { lat: 50.1905200427433, lng: 8.596578129380138 },
  //         iconImage: 'peng.svg',
  //         content: '<h3>Automobile Company</h3>'
  //     }
  // ]

  //  for (const place of myPlaces) {
  //     addMarker(place)
  //  }
  // // addMarker(
  // //     {
  // //         koordinatlar: { lat: 50.18884, lng: 8.58802 },
  // //         iconImage: 'ed-le.svg',
  // //         content: '<h3>JavaScript Learning Center</h3>'
  // //     });
  // // addMarker(
  // //     {
  // //         koordinatlar: { lat: 50.18710, lng: 8.59176 },
  // //         content: '<h3>Telekom Company</h3>'
  // //     });

  // // addMarker({
  // //     koordinatlar: { lat: 50.1905200427433, lng: 8.596578129380138 },
  // //     iconImage: 'peng.svg',
  // //     content: '<h3>Automobile Company</h3>'
  // // })


}
// Adding stlized marker
const svgMarker = {
  path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  fillColor: "blue",
  fillOpacity: 0.6,
  strokeWeight: 0,
  rotation: 0,
  scale: 2,
  anchor: new google.maps.Point(15, 30),
};
//Google marker değiştirme
const image = 'peng.svg';
const marker = new google.maps.Marker({
  position: myLatLng,
  size: new google.maps.Size(50, 50),
  map: map,
  //  icon:image,
  title: "EuroTech Study",
  //aNİMATİOs DROP, BOUNCE
  animation: google.maps.Animation.DROP
});
//Markera info window eklenmesi

var infoWindow = new google.maps.InfoWindow({
  content: '<h3>JavaScript Learning Center</h3>'

});
marker.addListener('click', () => {
  infoWindow.open(map, marker)
});






