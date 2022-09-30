/**
 * En soınd ersimizde Asyrın callback Function ve promise ları gördük ki
 *  request yapabilmenin mantığını daha iyi anlayalım, 
 * Bunların request le alkası neydi? zaman alan işlemler olduğu için 
 * requestinden aynı mantıkla yapıalcağı.
 * jAVASCRİPT İLE BİR APİDEN nasıl veri çekileceği, diğer web siterlinden verinin nasıl
 * çekielceğini göreceğiz.
 * Request yapabilmeninn farklı yolları var.
 * (YANSI==>1) 
 * Biz en eskisi iile başayacağız.(XMLHTTPREQUEST )
 * 
 * Hali hazırda
 * AJAX nedir 
 * Wikipedia ve caniuse.com dan farklarını göster can i use da 
 * sayfanın refresh olmadığını göster.
 * NEtwork Tafigini incele 
 * Networkten XHR dönen response ları göster
 * [
    "mdn-javascript_operators_spread",
    "mdn-javascript_operators_spread_spread_in_arrays",
    "mdn-javascript_operators_spread_spread_in_function_calls",
    "mdn-javascript_operators_spread_spread_in_object_literals",
    "mdn-api_svggradientelement_spreadmethod",
    "mdn-css_properties_box-shadow_spread_radius",
    "mdn-javascript_operators_object_initializer_spread_properties",
    "mdn-javascript_builtins_symbol_isconcatspreadable",
    "es6",
    "sr_es9"
]
GElen response incelediğimizde Javascript koduna benziyor ama değil. Gelen veri formatı JSON
SERVERDAN SERVER A yada browserdan server a veri data aktarım metdoudur.
Burda gelen Json JS cevirildi ve DOm manipule dilerek browserda işlendi.

 * 
 * VERİYİ NASIL FORMATLARIZI YA DA VERİYİ NASIL YÖNETİRİZ. 
 * 
 *********XML****************
 *1) XML nedir ona bakalım YANSI 3 ==> 
 elemanların tag almassı durumudr. HTML e çok bezner. 
 Ama amacı tamamen farklıdır. XML veriyi yapılandırmak için kullanılır.  
 * Biz JS bir xlm alıp JS objesine çevirebilriiz. 
 Bunu yapmanın yolu vardır.

 ******JSONNNN************
//YANSI 4 
 *JSON javaScriptObjectNotation gösterimidir. JS de objeye benzesede aynı şey değildir.
 *Veriyi göndermek için kullanılan farklı bir methodddur. js OBject notasyonun çok benzer
 ama arada 2 fark vardır.
 FARK -1 Key kısmında sadece string tutalbilir.
 FARK-2 Funcsiyon gibi yapıları tutmaz.
Bir örnek üzerinden bakalım SWAPİ.cOm
---https://swapi.dev/api/starship/9/ NETWORK SEKMESİNDEN İNCELE

 **JSON formatı sadece javascriptte değil diğer dillerde de kullanabilirsiniz.
 yazdığınız format doğru mu değilmi 
 --- https://jsonformatter.curiousconcept.com/# bu adresten kotrol edilbilir.


 ŞİMDŞİ KENDİ XML REQUESTİMİZİ YAZALIM.

 */

İlk requesti yapma 
SWAPİ uygulamasındaki tüm gezengenleri listeleme...

const firstReq = new XMLHttpRequest()
//Başarılı olduğunda
firstReq.addEventListener('load', () =>{
    console.log("Worked");
    /**
     * 1)Gelen datanın ele alınması 
     * console.log(firstReq.responseText)
     * 2) GElen JSON cevabo JSON a parse et .
     * const data =  JSON.parse(this.responseText)
     * console.log(data)
     * 3) Gelen data.results dan film isimlerini yazdırma 
     */
    //3333333333333333
    //  const data =  JSON.parse(firstReq.responseText)
    //  for (const res of data.results) {
    //      console.log(res.name)
    //  }
})
Hata verdiğinde


/**
 * Chaining results 
 * Eğer ilk gezegeni ele almak isteseydik 
 */
 const firstReq = new XMLHttpRequest()
 //Başarılı olduğunda
 firstReq.addEventListener('load', () =>{
     console.log("Worked");
    const data = JSON.parse(firstReq.responseText)
    const filmUrl = data.results[0].films[0]
    console.log(filmUrl);
    //Şimdi burdan filmleri çekmek için yeni bir Req yapmamız lazım
    const filmReq = new XMLHttpRequest()
    filmReq.addEventListener('load',function(){
        //film datayı ilk yazışta json a çevirme
        const filmData = JSON.parse(this.responseText)
        console.log(filmData)
    })
    filmReq.addEventListener('error',function(e){
        console.log("EROOR",e);
    })
    filmReq.open("GET",filmUrl)
    filmReq.send()
 })
firstReq.addEventListener("error",()=>{
    console.log("ERROR");
})
//tüm filmleri getiriyor.
firstReq.open("GET", "http://swapi.dev/api/planets/")
firstReq.send();//send işlemi browser tarafından gerçekleştirilir.
console.log("REq Sent");

//{ "name": "Tatooine", "rotation_period": "23", "orbital_period": "304", "diameter": "10465", "climate": "arid", "gravity": "1 standard", "terrain": "desert", "surface_water": "1", "population": "200000", "residents": ["https://swapi.dev/api/people/1/", "https://swapi.dev/api/people/2/", "https://swapi.dev/api/people/4/", "https://swapi.dev/api/people/6/", "https://swapi.dev/api/people/7/", "https://swapi.dev/api/people/8/", "https://swapi.dev/api/people/9/", "https://swapi.dev/api/people/11/", "https://swapi.dev/api/people/43/", "https://swapi.dev/api/people/62/"], "films": ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/4/", "https://swapi.dev/api/films/5/", "https://swapi.dev/api/films/6/"], "created": "2014-12-09T13:50:49.641000Z", "edited": "2014-12-20T20:58:18.411000Z", "url": "https://swapi.dev/api/planets/1/" }

/**
 * ÖZet olarak XHR kullanmak sıkıntılı ve iç ice nesting ler var karmaşık 
 * Bu nedenle FETCH daha yaygın ılarak kullanılmaktadır.
 * FETCH yazımı kolay Promise ları destekliyor. 
 * FETCH promises ları destekliyor.
 * Şimdide yukarı daki swapi uygulamsından çektğimiz verileri 
 * FETCH ile yeniden yzalım. 
 * YANSI 5 
 */


const reqWithFetch = fetch("http://swapi.dev/api/planets/")
//YAzmış olduğumuz fetch den bize döne bir promise.
reqWithFetch
    .then((response) => {
        console.log(response);
        // Fetch de bağlantı 404 yada 500 hatası verse bile cvp döndüğü için başarılı
        //sayılack then kısmı icra edielcek.
        // bunu sağlamak için kontrol etmelyiiz.
        if (!response.ok) {
            throw new Error(`Status Code : ${response.status}`)
        } else {



            //Burada status kontrolu yapılabilir.

            // Burada body stream json object e döndürdüğümüzde bir promise 
            //döner. Onun için bir then le data veriyi alabilriiz.
            response.json()
                // İkinci aşamada JSON Yazmak yerine REtrun gönderrerk CHain yapabiliriz
                // Catch kısmına gerk kalmaz
                .then(data => {
                    console.log(data);
                    //Sonraki aşamada filmleri adını
                    // yazdırmak isterse 
                    // for (const res of data.results) {
                    //     console.log(res.name);
                    // }
                    // 
                })
            //Dönen response Readable Stream şeklinde 
            // Byte data şeklinde veri tipi 
            //Yüksek hacimli veri erişebilirsiniz.
            //GElen bu veri tipini okyabimemiz için
        }

    })
    .catch(err => {
        console.log("ERROR", err);
    })

/**
 *  FETCHH 2222222222222222222222222 Chained haline getir.
 * 
 */


const reqWithFetchv2 = fetch("http://swapi.dev/api/planets/")
 .then((response) => {
     if (!response.ok) {
         throw new Error(`Status Code : ${response.status}`)
     } else {
        // 1. Commenteki ksım atılarak promise dönmesi sağlanmıştır. 
        //Böylelikle iç ice olmadan then kısmı eklenetek olayı ele alabilriz. 

        return response.json()

            //  .then(data => {
            //      console.log(data);

            //  })
     }
 })
 .then(data => {

    //Burada film datası çekeceğiz aldığımız URl ile daha büyük veri çekmemiz laızm 
    // Tekrar fetch yazcağız. Dönen cevabı tekrar return edip .then ile yazabilriz.
    console.log("İlk 10 PLANET çekildi");
    const filmUrlv2 = data.results[0].films[0]

    //console.log(filmUrlv2);
    return fetch(filmUrlv2)
 })
 .then((response) => {
    if (!response.ok) {
        throw new Error(`Status Code : ${response.status}`)
    } else {
       // 1. Commenteki ksım atılarak promise dönmesi sağlanmıştır. 
       //Böylelikle iç ice olmadan then kısmı eklenetek olayı ele alabilriz.
       console.log("Planet in ilk filmi "); 
       return response.json()
    }
})
.then(response => {
    console.log("Film ADi");
    console.log(response.title);    
console.log(response);
})

 .catch(err => {
     console.log("ERROR", err);
 })


/** 
 * 3333333333333333333333 FETCH 
 * Refaktorun kod
 * Şimdide ilk 10 veriden sonrası getirme
 * 
*/
İlk olarak kodu düzenle ikinci 10 filmi çekccek şekilde 
Sonra duplicate yerler için Func yaz. ilok olarak Status and parse 

Sonuç oalrak şöyle birşeey olsun 
fetch(url)
then(checkStatusAndParse)
.then (printPlanets)
.then (get10morePlanet
.then (printPlanets)

const checkStatusAndParse = (response)=>{
    if (!response.ok) {
        console.log();
        throw new Error(`Status Code : ${response.status}`)
    } else {
        return response.json()
    }
}

//İkinci olarak PrintPlanets 

const printPlanets = (data)=> {
    console.log("10 tane gezengen yazdırıldı");
    for (const d of data.results) {
        console.log(d.name);
    }
    return  Promise.resolve(data.next)
}
//Ucuncu olarak 

const fetchNextPlanets = (url) =>{
    return fetch(url)
}

const reqWithFetchv2 = fetch("http://swapi.dev/api/planets/")
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(fetchNextPlanets
        //data => {
        // const next10Movie  = data.next
        // console.log(next10Movie);
        // return fetch(next10Movie)
        //}
  )
    .then(checkStatusAndParse)
    .then(printPlanets)
    ///En sonunda 10 tane daha çek
    .then(fetchNextPlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .catch(err => {
        console.log("ERROR", err);
    })

// Yukarıdaki logicte birkaç şeyi tekrar ediyoruz. 
//Response kontrole edip JSON döndürüyoruz

/**
 * 
 * AXİOS EXAMPLE
 * Axios yukarıda yaptığımız işlemleri bizim için otomatik olrak yapan 
 * populer bir kutuphanedir .
 * hemen bir örnek üzerindne görelim fakat axios kullanabilmek için 
 * JS dosyasını dahil etmemiz gerekmektedir.
 * 
 */

//Yukarıdakini öncelikle console log a yaz, dönen Promise değişeken ata ve incele
// axios.get("http://swapi.dev/api/planetsss/")
// .then((res)=>{
//     console.log(res.data);
// })
// .catch(err =>{
//     //Diğerinde olduğu gibi status kontrol etmeye gerek yok 
//     console.log("err",err.message);
// })


/**
 * Mkaing multiple axios requests
 */

//  axios.get("http://swapi.dev/api/planets/")
//  .then(res =>{
//     for (const planet of res.data.results) {
//        console.log(planet.name)
//     }
//  })


// // DAha sonra ki 10 u çekmek için 
// axios.get("http://swapi.dev/api/planets/")
//     .then(res => {
//         for (const planet of res.data.results) {
//             console.log(planet.name)
//         }
//         return axios(res.data.next)
//     })
//     .then(res => {
//         for (const planet of res.data.results) {
//             console.log(planet.name)
//         }
//     }
//     )
//     .catch(err => {
//         console.log(err);
//     })