const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "purple",
    "indigo",
    "violet"
];
const h1 = document.createElement('h1')
h1.innerText = "Rengi değiştirmek için seçim yapınız."
document.body.prepend(h1)
//PRintCOlor Function 
//Birinci method Parametre ile çağırma 
// const printColor = (box)=>{
//     console.log(box.style.backgroundColor)
// }
//İkinci MEthod this ile kullanım ,
const changeColor = function () {

    h1.style.color = this.style.backgroundColor
    console.log(this.style.color);
}
// her bir renge sahip div oluşturma
for (const color of colors) {
    let box = document.createElement('div')
    box.style.backgroundColor = color
    // box.style.width = "100%"
    // box.style.height="200px"
    box.classList.add('box')
    const container = document.querySelector('#boxes')
    container.appendChild(box)

    //Daha sonra yazdığın fonkisyonu ayrı tanımla
        // Add Event Lsitener 
    // box.addEventListener('click',event =>{
    //     console.log(box.style.backgroundColor);
    // })
   
    box.addEventListener('click', changeColor)
}
// h1 için EVent listener eklenmesi
h1.addEventListener('mouseover', function (e) {
    console.log(this.innerText); 
    console.log(e)
})

//**EVENT OBJESİNİN Anlatımı  */
//Cahnge color çağrıldığında parametresiz  gbi gözüksede bir parametreyle ie beraber çağrılır.
//EVENT parametreisidir.
// Change color EVENT objesine bak içeriğini logla
// PAth içerisinde neresi tıklandı,
//Timestamp pageload dan ne kadr süre sonra tıklandı.
// Ekran da hangi koordinatlara tıkland bunları gösterir.
// Keypressed örneği yap .
document.body.addEventListener('keypress', function (e) {
    //  console.log(e);
})
// Sonuç olarak burdaki eventlerden hangi obje tıklandı ya da hangi tuşa basıldı
//Sayfadan yüklendikten sonra ne akdr süre sonra oldu,
//Ekranın neresinde oldu,koordinatlar ve daha bir sürü obje


//**KEY DOWN, KEY UP VE DİĞER TUŞ VENETLERİ */
//bİR İNPUT EKLEYELİM
const input = document.createElement('input')
input.type = "text"
input.placeholder = "username"
document.body.appendChild(input)
input.style.marginTop = "3rem"
input.style.fontSize = "2rem"

// Input a eventlistener eklenmsi 
input.addEventListener('keydown', function (e) {
    console.log("KEY DOWN");
})
//Keyup
input.addEventListener('keyup', function (e) {
    console.log("KEY UP");
})

input.addEventListener('keypress', function (e) {
    console.log("KEY PRESS");
})
