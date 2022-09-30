/**
 * YANSI _6 dan göster
 */

//**********111111111111111111111 */
//Aşağıda fonskiyonda pending olan bir promise döndürüypr 
// Biz bunu işlme tamamlandıktan sonra yapması için 
//.then kısmı içerisinde yazıoyrduk
// function getData() {
//    const data =  axios.get("http://swapi.dev/api/planets/")
//    console.log(data);
// }
// getData();


//**********222222222222222 */
//Then içinde yazdık buraya kadar yeni bir şey yok. 
// function getData() {
//    const data =  axios.get("http://swapi.dev/api/planets/")
//    .then(data =>{
//     console.log(data);
//    })

// }
// getData();


/**
 * PEki biz burdaki callback functionlar olmadan yazmak isteseydik 
 * Burada ASYNC ve await devreye griiyor
 * ilk olarak ASYNc ile başlayalım 
 * 1) Async keywordunu kullandığımız zaman func bize promise döndürür.
 *   Basit bir selamlama func üzerinden gösterelim.
 * 
 */

// function selamlama() {
//     return   "Selamm"
// }
//async eklenmesi, dönen promise a bak 
async function selamlama() {
    return "Selamm"
}
//Diğer bir örnek daha yapalım .
//async keywordu promise yazmamızın pratik hali 
// async function toplama(x,y){
//     //İkinci aşamada x,ve y number kontolu koy
//     if(typeof x !== "number" ||typeof y !== "number" )
//         throw "X ve  Y sayı olmak zorundadır";
//     return x+y
// }
// toplama("", 5)
// .then (res => {
//     console.log("Promise resolved : "+res);
// })
// .catch(err=> {
//     console.log("Promise rejected:"+err);
// })


// /**
//  * Eğer toplama func promise olarak yazacak olsaydık.
//  */
// const toplamav2 = function (x, y) {
//     return new Promise((resolve, reject) => {
//         if (typeof x !== 'number' || typeof x !== 'number') {
//             reject("X ve Y number tipinde olmak zorunda")
//         } resolve(x + y)

//     })
// }
// toplamav2(6, 5)
//     .then(res => {
//         console.log("Promise resolved : " + res);
//     })
//     .catch(err => {
//         console.log("Promise rejected:" + err);
//     })

// Sonuç olarak promise ile yazacağımız şeyi kısaca async keyword ile 
//yazmış olduk 
// Bununlada bitnmiyor diğer bir sihirli kelimemizde await
//YANSI - den göster
//Await KEYWOrd nü bir async fonk içinde kullanabilir. 
// Önüne yazgımız func sonuç dönmesini bekler.
// Örnek züerinden gösteecek olursak 
// SWAPİ örneğimizden yine veri çekelim. 
////*************11111111111111111111111111111 */
//  function getPlanets() {
//     return axios.get("http://swapi.dev/api/planets/")
// }
// getPlanets()
// .then(res => {
//     console.log(res.data);
// })

// /**
//  * 2222222222222222222222
//  *Await ve async eklenmesi 
//  * 
//  */
// async function getPlanets() {
//     //Sonra await sil ne olacakti bak 
//     const res = await axios.get("http://swapi.dev/api/planets/")
//     console.log(res.data);
// }
// getPlanets() 


// /**
//  * 333333333333333333
//  *Error handling 
//  * Promise başarısızo lurda ne oalcak peki ?
//  * adresi yanlış bir şeyle değiştirelim
//  */
// async function getPlanets() {
//     //Sonra await sil ne olacakti bak 
//     const res = await axios.get("http://sswapi.dev/api/planets/")
//     console.log(res.data);
// }
// //Birinci Çözüm fonk . .catch eklenmesi 
// getPlanets().catch(err  => {
//     console.log("In catch ", err);
// })

// /**
//  * İkinc içözüm try and catch bloğu kullanılması 
//  * Yukarıda catch ile alttakinin farkı try catch daha spesiik olmasıdır. 
//// Diğeri chain olarak tüm hatatları yakalar. 
//  */
// async function getPlanets() {
//     try {
//         const res = await axios.get("http://sswapi.dev/api/planets/")
//         console.log(res.data);
//     } catch (error) {
//         console.log("Try-catch error"+error);
//     }

// }
// getPlanets()

/**
 * Using multiple awaits
 */
const btn = document.querySelector('button')
 const moveXButton = (element, amount, delay) => {
    // artık bir promise döndrecek 
    return new Promise((resolve, reject) => {
        const bodyBoundary = document.body.clientWidth
        const elRigt = element.getBoundingClientRect().right;
        const currLeft = element.getBoundingClientRect().left
        if (elRigt + amount > bodyBoundary) {
            reject()
            //EN SON HATA MESAJI GÖSTERMEDE 
           // reject({bodyBoundary,elRigt,amount})
            // console.log("Duvar sınırını ulaştınız-gidemenzsiniz.");
        } else {
            setTimeout(() => {
                element.style.transform = `translate(${currLeft + amount}px)`
                //Geçeceiğin kaul edip sadece onSuccess yazalım 
                resolve()
            }, delay);
        }

    })

}
// moveXButton(btn,100,1000)
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .catch(()=> console.log("Duvara Tosladın"))

//Şimdi func yenide yazalım 
async function animateRight (el,amount) {
    await moveXButton(el,amount,500)
    await moveXButton(el,amount,500)
    await moveXButton(el,amount,500)
    await moveXButton(el,amount,500)
    await moveXButton(el,amount,500)
    await moveXButton(el,amount,500)
   await moveXButton(el,50,1000)
}
animateRight(btn,50)
.catch(err=> {
console.log("Duvara tosladın");
animateRight(btn,-100)
})