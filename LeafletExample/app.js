//Harita değişkenini oluşturdum 
//Ankara kalesi 39.9398330700786, 32.86537771247409
const ankCoor = [39.9398330700786, 32.86537771247409]
//const map = L.map('map').setView(ankCoor, 13);
const map = L.map('map',{
    center:ankCoor,
    zoom:13,
});

//Streetview ekle 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);



//MArker ekleme
const kaleMarker = L.marker(ankCoor).addTo(map);

//Ya da yukarıdakini commente al circle ekle 
const kaleCircle = L.circle(ankCoor, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
}).addTo(map);

//Poligon Ekleme
const kalePolygon = L.polygon([
    [39.939833, 32.861357],
    [39.934833, 32.865367],
    [39.939833, 32.869377]
]).addTo(map);

//Bounding Pop-ups 
kaleMarker.bindPopup("<h2>Ankara kalesi</h2>")
kaleCircle.bindPopup("<h2>Ankara kalesi</h2></br>yuvarlak");
kalePolygon.bindPopup("<h2>Ankara kalesi</h2></br>Poligon");

//Aryı bir pop up eklenmesi 
//Kocatepe Cami koor
//39.916618544760794, 32.86070613597116
const kocatepeCoor = [39.916618544760794, 32.86070613597116]
const kocatepePopUp = L.popup()
    .setLatLng(kocatepeCoor)
    .setContent("<h9>Kocatepe Camii</h9>")
    .openOn(map);

//Haritadan tıklanan bir korrdinatın alınması 
// const locationPopup = L.popup();

// function onMapClick(e) {
//     locationPopup
//         .setLatLng(e.latlng)
//         .setContent("Tıkladığınız yerin koordinatları " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);

//Custom icon oluşturma 
const marker1 = L.icon({
    iconUrl: 'markers/Lmarker3.png',


    iconSize: [50, 75], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
//Ankara eğitim araştırma hastanesi Custom marker ekleme
//39.937016, 32.875756
const ankEgtArasCoor = [39.937016, 32.875756]
//Custom iconu yerleştirme
L.marker(ankEgtArasCoor, { icon: marker1 }).addTo(map);

/**
 * MArker grouplama ve layer
 */
 const cami1Coor = [39.94080945574967, 32.868709659518075]
 const cami1 = L.marker(cami1Coor).addTo(map);

 const cami2Coor = [39.93595021368114, 32.870567142354176]
 const cami2 = L.marker(cami2Coor).addTo(map);

 const cami3Coor = [39.93454670400909, 32.878266293148414]
 const cami3 = L.marker(cami3Coor).addTo(map);

 //Tüm cami markerlarını tek gruba ekleme 
//const camiler = L.LayerGroup([cami1,cami2,cami3])


//YAnNSI GEOJSON OBJECT NEDİR ??
//Addinj GEOJSON OBJET for anıtkabir

const  geojsonAnıtkabir = {
    "type": "Feature",
    "properties": {
        "name": "Anıtkabir",
        "amenity": "Baseball Stadium",
        "popupContent": "Burası Anıttepedeki anıtmezardır"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [  32.835721 ,39.921646],
            [  32.836032 ,39.92171],
            [  32.830838 ,39.929891],
            [  32.831317 ,39.930031],
            [  32.830963 ,39.930874],
            [  32.8318 ,39.931269],
            [  32.833045 ,39.929607],
            [   32.83709 ,39.931751],
            [   32.84165 ,39.925155]
        ]]
    }
};

const myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};
L.geoJSON(geojsonAnıtkabir, {
    style: myStyle
}).addTo(map);

//Pop up kısmının açılması
function onEachFeature(geojsonObj, layer) {
    // does this geojsonObj have a property named popupContent?
    console.log(layer);
    console.log(geojsonObj);
    //  layer.addEventListener('dblclick',function (){
    //     layer.bindPopup("holaaaa")
    //  })
    if (geojsonObj.properties && geojsonObj.properties.popupContent) {
        layer.bindPopup(geojsonObj.properties.popupContent).addTo(map);
    }
}

L.geoJSON(geojsonAnıtkabir, {
    onEachFeature: onEachFeature
}).addTo(map);

// Getting City geojson obejct read from a file

// const geojson = L.geoJSON(iller_polygon, {
//     style: myStyle,
//     onEachFeature: onEachFeature
//   }).addTo(map);

// L.info = L.Control.extend({
//   opsitions :{

//       position:'bottomleft'
//   } 
// }).addTo(map)