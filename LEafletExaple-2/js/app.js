var map = L.map('map', {
    zoomControl: false
  }).setView([40.0100708, 34.9986292], 5, );

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);


var myStyle = {
    "color": "#483D8B",
    "weight": 2,
    "opacity": 0.9,
    "fillOpacity": 0.2
  };

const geojson = L.geoJSON(iller_polygon, {
    style: myStyle,
    onEachFeature: onEachFeature
  }).addTo(map);



  function onEachFeature(feature, layer) {
    layer.on({
     mouseover: cityHighligt,
      mouseout: resetCityHighligt,
      click: zoomToFeature
    });
  };

  const myDisplayDiv = document.querySelector('#display')
  console.log(myDisplayDiv);
  function cityHighligt(e) {
     const layer = e.target;
     info.update(layer.feature.properties);

    layer.setStyle({
      weight: 2,
      color: '#7FFFD4',
      dashArray: '9',
      fillOpacity: 0.4
    });

    // if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    //   layer.bringToFront();
    // }
  }
  function resetCityHighligt(e) {
    geojson.resetStyle(e.target);
    info.update();
   // myDisplayDiv.innerHTML = ""
  }
  const myClickedCoordinates = document.createElement('ul')
  function zoomToFeature(e) {
    let props = e.target.feature.properties
    map.fitBounds(e.target.getBounds());
    //Alttaki div in modify edilmesi 
    console.log(e);
   console.log(e.target.feature.properties.name)
   myDisplayDiv.innerHTML = `${props.name}</br> Plaka Kodu: ${props.plaka}</br> Nufüs : ${props.population}`
    // Tıklanan yerin koordinatını alma 
   var latlng = map.mouseEventToLatLng(e.originalEvent);
   const myLi = document.createElement('li')
   myLi.innerText =  `X= ${latlng.lat}, Y=${latlng.lng}`
   document.body.appendChild( myClickedCoordinates);
   myClickedCoordinates.appendChild(myLi)
   console.log(latlng.lat + ', ' + latlng.lng);
  }

//Harita üzerine veri ekleme / görüntüleme
//Alttaki resimeklemeyi yaptıktan sonra bu örneği yap
var info = L.control();

info.onAdd = function(map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
 return this._div;
};

info.update = function( props) {
   // console.log(this);
  this._div.innerHTML = '<h4>Türkiye İller Haritası</h4>' + '</b><br />' + (props ?
    '<b>' + props.name + '</b><br/>' + '</b><br />' + 'Nüfus:' + props.population :
    '<b>' + 'Bir İl Seçin');
};

info.addTo(map);

// LAyer üzerine kontrol eklenmesii 

L.Control.gisLogo = L.Control.extend({
  onAdd: function(map) {
      var img = L.DomUtil.create('img');

      img.src = 'img/gis.png';
      img.style.width = '100px';

      return img;
  },

  onRemove: function(map) {
      // Nothing to do here
  }
});

L.control.watermark = function(opts) {
  return new L.Control.gisLogo(opts);
}

L.control.watermark({ position: 'bottomleft' }).addTo(map);


  
const tryInfo = L.control({position:'bottomright'});
tryInfo.onAdd = function (map){
    this._div = L.DomUtil.create('button')
    this._div.addEventListener('click',function(){
       tryInfo.callCllick()
    })
    this._div.innerText = "Send"
    console.log(this);
    return this._div
}
tryInfo.addTo(map)

tryInfo.callCllick= function() {
    alert("Selamm ")
}