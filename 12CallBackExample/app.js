// Bu örneğimizde ilk olrak CAllback Functionlarla ASync olarak nasıl yazılacağını göreceğiz. 
//Sonrasında da  Promise ile yeniden düzenleyceğiz. 
//Öreneğimize şu şekilde başlayaım Basit bir buton alalım ve belirli bir zaman sonra hareket ettirelim.

//ilk olarak butonumuzu seçelim 
const btn = document.querySelector('button')
// Bu sefer left ve top ile oynamaycağız, Transform konutuu kullancağım.
// Hareket etiiğini borwser da gösterdikten sonra Settimeout kullanalımç

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`
//     //DAha sonra ikinci settimeout komutunu ekleyeceğim
//     //normlade ayrı olarak da yapabilirim ama takip etmesi zrolaşır
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`
//             setTimeout(() => {
//                 btn.style.transform = `translateX(400px)`
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(500px)`
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// Kodumuz hafif karışmaya başladı ama yinde okunabilir. Çok kötü durumuyor.
// Şimdi bunu Functiona çevirelim.

// const moveXButton = (element,amount,delay) =>{
//     setTimeout(() => {
//         element.style.transform = `translate(${amount}px)`
//     callBackFunc()
//     }, delay);

// }
// moveXButton(btn,100,1000)

//Burada aslında önemli kısma gelelim. 
//Fonksiyonun tekrar edilmesi 
//Bunu yapabilmek için bir parametre daha tanımlayacağız


// const moveXButton = (element, amount, delay, callback) => {
//     setTimeout(() => {
//         element.style.transform = `translate(${amount}px)`
//         if (callback) callback()
//     }, delay);

// }

// moveXButton(btn, 100, 1000, () => {
//     moveXButton(btn, 200, 1000, () => {
//         moveXButton(btn, 300, 1000, () => {
//             moveXButton(btn, 400, 1000, () => {
//                 moveXButton(btn, 500, 1000)
//             })
//         })
//     })
// })

//Yukarıda iç içe yuvalanmış 5 tane callback function götrdük.
//Şimdi snırlara değip değmediğini kontrol delim. 
// Bunu nerede kullacağazı. Request oluştuturkende aynı yapı olacak
//1 Çalıştığında ne olacak, Baaşrısız olduğunda ne oalcak

/**
 * Şimdi örneğimize dönür sınır kontrolun yaapalım 
 * Öenmli olan değip değmemeis değil sadece işlemin başarılı old. ne oalcak, 
 * Başarısızı sonuçl ne olcak? onu göreceğiz. 
 * 
 */

//  const moveXButton = (element, amount, delay, callback) => {
//     const bodyBoundary = document.body.clientWidth
//     const elRigt = element.getBoundingClientRect().right;
//     setTimeout(() => {

//         element.style.transform = `translate(${amount}px)`
//         if (callback) callback()
//     }, delay);

// }

//MAdem getboundingClietRect i gorduk fonksiyonumuz yeniden refaktr<edelim
// Burada ekllemli gitmek yerine curr Left i alıp sadece artış miktarı kadar ilerlesin

// const moveXButton = (element, amount, delay, callback) => {
//     const bodyBoundary = document.body.clientWidth
//     const elRigt = element.getBoundingClientRect().right;
//     const currLeft = element.getBoundingClientRect().left
//     if (elRigt + amount > bodyBoundary) {
//         console.log("Duvar sınırını ulaştınız-gidemenzsiniz.");
//     } else {
//         setTimeout(() => {
//             element.style.transform = `translate(${currLeft + amount}px)`
//             if (callback) callback()
//         }, delay);
//     }


// }


// moveXButton(btn, 100, 1000, () => {
//     moveXButton(btn, 100, 1000, () => {
//         moveXButton(btn, 100, 1000, () => {
//             moveXButton(btn, 100, 1000, () => {
//                 moveXButton(btn, 100, 1000)
//             })
//         })
//     })
// })

/**
 * Yukarıda ne yapmış oldu başarılı olduğunda böyle yap başaarısızı olduğunda şunu bir çatallama yaptık
 * Şimdide buna göre kodumuzu yeniden refaktör edelim.
 * Sonuç olarak Callback func larda şöyle bir yapım olacak 
 * request(succesCallback, failureCallBack)
 */



// const moveXButton = (element, amount, delay, onSuccess, OnFailure) => {
//     const bodyBoundary = document.body.clientWidth
//     const elRigt = element.getBoundingClientRect().right;
//     const currLeft = element.getBoundingClientRect().left
//     if (elRigt + amount > bodyBoundary) {
//         OnFailure()
//         // console.log("Duvar sınırını ulaştınız-gidemenzsiniz.");
//     } else {
//         setTimeout(() => {
//             element.style.transform = `translate(${currLeft + amount}px)`
//             //Geçeceiğin kaul edip sadece onSuccess yazalım 
//             onSuccess()
//         }, delay);
//     }
// }



/**
 * Onsuccess ve on Faliure eklendikten sonra çağırdığımzı yeri yeniden yazmamız gerekecek
 * 
 * */


moveXButton(btn, 100, 1000, () => {
    moveXButton(btn, 100, 1000, () => {
        moveXButton(btn, 100, 1000, () => {
            moveXButton(btn, 100, 1000, () => { 
                moveXButton(btn, 100, 1000) 
            },()=>{
                console.log("Duvar Sınırına ulaşıldı");
            })
        },() => {
            console.log("Duvar Sınırına ulaşıldı");
        })
    }, () => {
        console.log("Duvar Sınırına ulaşıldı");
    })
}, () => {
    console.log("Duvar Sınırına ulaşıldı");
})
// ==> YAnNSI 42 den promise tanımları ile devam et..


/**
 * Promise Chain ile kodumuzu refaktor edelim. 
 * 
 */

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

/**
 * Önce kod parçacığını yaz sonra tamaını yap
 */
// moveXButton(btn,100,1000)
// .then(()=>{
//     moveXButton(btn,100,1000)
//     .then(()=> {
//         moveXButton(btn,100,1000)
//     })
// })
//YA DA FONK RETURN EDEREK İLGİLİ ard arda ekleyebiliridn.
moveXButton(btn, 100, 1000)
    .then(() => {
        return moveXButton(btn, 100, 1000)
    })
    .then(() => {
       return moveXButton(btn, 100, 1000)
    })
    .then(() => {
        return moveXButton(btn, 100, 1000)
    })
    .catch(()=> {
        return console.log("Tüm hatalr burada yakalanır");
   })
   //ENN SON AŞAMA Hata msajını anlamlı Hale getirme
    // .catch(({bodyBoundary,elRigt,amount})=> {
    //       console.log(`Body sınırı = ${bodyBoundary}px'dir`);
    //     console.log(`Buton ${elRigt}sınrııda, ${amount} kadar artıramazsınız.`);
    // })

/**eğer arrow functionlarda tek bir expression varsa return yazmamıza gerek kalmadan döner..
 * 
 */

// moveXButton(btn,100,1000)
// .then(()=> moveXButton(btn,1000,1000))
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .then(()=> moveXButton(btn,100,1000))
// .catch(()=> console.log("Duvara Tosladın"))

/**
 * Son aşama olarak hangi aşamada hata olduğunu bilmek için
 */

//Sonuc oalraka daha kısa bir kod yazmış oldu
//TEk bir tane CATch yazdık 
//Promise ile ilgili oyun bahçesinden Gerçek requestlere dönelm.