//Cocuğunuz sizden bir bisiklet istedi siz de durumunuz müsait değil 
// Almak istemediniz ya da alamdınız bu, zaman alacak bir işlem olduğu için 
//Çocugunuza Promise(Soz) verdiniz .
//Bunu bir HTTP request yada Apiden çektiğiniz data için de
// düşünebilirsiniz. GEnelde zaman alan işlmeler diyelim.
//==> YANSI 44 e git

//Promises lar her zaman iki tane paramet alırlar 
// 1. Resolve, 2. Reject
//console.log da incelediğimizde bekliyor statüsünde gözüküyor
// Ne kabul edildi, ne de reddedildi.


/**111111111 */
// Promise Syntax ından sonra , HEr zaman iki tane fonksiyon parametre aldığından bahsedelim
//İlk başta boş bir promise oluştur içeriğine bak 
//Pending gösterdikten sonra rejected göster 
//Sonra Resolve göster
//Buraya kadar somut olarak tam anlaşılmasada ana mantığı bu ..

// const bisikletAlinacakMi = new Promise((resolve,reject)=>{
//     resolve()//ilk yazışta ekleme
// })

//Daha orjinal bi şey yazalım 
// Şimdide rastgelee kabul olup ya da reddolacağı ile ilgili 
//bir resolve yazalım 
// const bisikletAlinacakMi = new Promise((resolve,reject)=>{
//     let rndm = Math.random()
//     console.log(rndm);
//     rndm > 0.5 ? resolve(): reject() 
// })

/**2222 THEN KISMI */
//Herbir method then kısmına sahiptir. 
//Başarılı olduğu takdirde ne yapılcağı THEN kısmında belirlenir.
//Then kısmı ayrı yazıldığı birleşik de yazılabilir. 
// const bisikletAlinacakMi = new Promise((resolve,reject)=>{
//     let rndm = Math.random()
//     console.log(rndm);
//     rndm > 0.5 ? resolve(): reject() 
// })
// bisikletAlinacakMi.then(()=>{
//     console.log("OLEYYY!! Babam bisklet aldı.");
// })


 //333 Catch ayrı yazılacağı gibi . ile de then den sonraya eklenebilir.
//  bisikletAlinacakMi.catch(()=>{
//     console.log(":(( Bisiklet yok, Kötü BAba...");
//  })



 // Özet olarak promise objesi new keyword ile oluşturudk . 
 // Then ve Catch ksıımlarnı gördük
 // REsolve yani başarılı olursa THEN icra edilecek
 // Başarısız olursa CATCH kısmı harekete geçeek.
 // Şimdi kirli callback functonlara geri dönelim.


/**44444 ZAman gecikmesi eklenmesi */

 // Buraya kadar gördüklerimizi if else ile de yazardık niye bu kadar 
 //karmaşık işlmeler girdik diyebiliriniz. 
 //Şimdi burada bisiklet alma ya da eşinizin istediği bir şey almanız zaman alacağı için kodumuza 
//gecikme ekleyelim.
 // O zaman kodumuza biraz gecikme / settimeout ekleyelim.
//  const bisikletAlinacakMi = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let rndm = Math.random()
//         console.log(rndm);
//         rndm > 0.5 ? resolve(): reject()
//     }, 4000);
    
// })
// bisikletAlinacakMi.then(()=>{
//     console.log("OLEYYY!! Babam bisklet aldı.");
// })

//  bisikletAlinacakMi.catch(()=>{
//     console.log(":(( Bisiklet yok, Kötü BAba...");
//  })


 /**
  * 55555 Functiona Promise döndürme
  * Promise direk yazabileceğimiz gibi bir foksiyona promise 
  * döndrürebilirizz
  * Biraz önce promise bir değişkene tanımlayabildiğimiz gibi 
  * bir fonksiyon içinde Promise da return edebiliriz.
  */

  const bisikletNeoldu = ()=>{
     return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let rndm = Math.random()
            console.log(rndm);
            rndm > 0.5 ? resolve(): reject()
        }, 4000);
        
    })
  } 
  bisikletNeoldu().then(()=>{
    console.log("OLEYYY!! Babam bisklet aldı.");
}).catch(()=>{
    console.log(":(( Bisiklet yok, Üzgün Çocuk...");
 })



