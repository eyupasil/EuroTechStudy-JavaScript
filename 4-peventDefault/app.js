const form = document.querySelector('#form')
//Daha sonra alttaki tanımlamalr yap
const krediKartı = document.querySelector('#cc')
const sartlart = document.querySelector('#sartlar')
const urunler = document.querySelector('#urunler')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log("kredi kartı", krediKartı.value);
    console.log("sartlar KAbul", sartlart.checked);
    console.log("secili ürün", urunler.value);
})
// İkinci Bölüm sadece submit değilde anlık değiimlerden haberdar olmak istersek 
//Herbir input u tek tek kontrol edebilriiz. 
// İlk önce burayı yap                            
 const formData = {}
// krediKartı.addEventListener('input',e => formData['ccNum'] =e.target.value)
// sartlart.addEventListener('input',e=> formData['sartlarKabul']=e.target.checked)
// urunler.addEventListener('input',e => formData['urun']=e.target.value)

//dahasonra Fonksiyon şeklinde göster
// Öncelikle hepsine bierer isim veiriz.
for (const input of [krediKartı,sartlart,urunler]) {
    input.addEventListener('change',({target})=>{
        //Önce targeti yazıp burdan ne geldiğini göster
        //console.log(target);
        const {name,type,value,checked} = target
        formData[name] = type ==='checkbox' ? checked :value
        console.log(formData);
    })
}