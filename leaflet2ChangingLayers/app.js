const ankCoor = [39.9398330700786, 32.86537771247409]
//const map = L.map('map').setView(ankCoor, 13);
const map = L.map('map',{
    center:ankCoor,
    zoom:12,
});

//Streetview ekle 
const osm  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

//Ank Tarihi Camiler 
const hacıBayramVeliCamiCoor = [39.94453775466719, 32.85800571409867]
const kocatepeCamiCoor = [39.916656819346706, 32.86079876491486]
const tacettinSultanCamiCoor = [39.93268943356009, 32.86519463505488]
const aliSerafettinCamiCoor = [39.93676465365066, 32.865187148542134]
const hacibayram = L.marker(hacıBayramVeliCamiCoor).bindPopup("Hacı bayram Veli Camii"),
kocatepe  = L.marker(kocatepeCamiCoor).bindPopup("kocatepe camii"),
tacettinDergahı = L.marker(tacettinSultanCamiCoor).bindPopup("Tacettin Sultan Camii"),
aliSerafettin  = L.marker(aliSerafettinCamiCoor).bindPopup("Ali Şerafettin Cami")

// MArkerların tek bir layer olarak eklenmesi 
const ankTarihiCamiler = L.layerGroup([hacibayram,kocatepe,tacettinDergahı,aliSerafettin])

//Base Layers
// const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// });

const StadiaSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

const baseMaps = {
    "OpenStreetMap": osm,
    "<b><span style='color: red'>Darkmap</span>":StadiaSmoothDark
}
const overlayMaps= {
    "Tarihi Camiler":ankTarihiCamiler
}
const layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

//Dinamik olarak farklı yerlerin eklenip çıkarılması
//ilk olarak alışveriş merkezlerini ekle 
const ankamallCoor = [39.95043283342042, 32.83128447985889]
const kentParkCoor = [39.90972144802558, 32.775975302855805]

const  ankamall = L.marker(ankamallCoor).bindPopup("Ankamall Alişveriş Merkezi"),
 kentpark = L.marker(kentParkCoor).bindPopup("KENTPARK Alişveriş Merkezi")

var alisverisMerkezleri = L.layerGroup([ankamall,kentpark])
//Overlay layerin dinamic eklenmesi 
layerControl.addOverlay(alisverisMerkezleri,"Alışveriş Merkezleri")

//Dinamic OpenTopoMap layer eklenmesi 
const openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
layerControl.addBaseLayer(openTopoMap,"OpenTopoMap")