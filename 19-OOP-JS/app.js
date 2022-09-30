//En sonunda eklenecek.
class MotorluAraclar  {
    constructor(yil,marka,model){
        console.log("Motorolu araç Constructor");
        //1111111
        // console.log("Constructur içinden geldim");
        // console.log(yil,marka,model);
        //2222222
        this.yil= yil,
        this.marka= marka,
        this.model = model
    }
    marsBas() {
        console.log("Hann hannn");
    }
    ozellikleriniGoster(){
        return `${2022-this.yil} yaşında bir ${this.marka} ${this.model}`
    }
}

class Araba extends MotorluAraclar{


    /**
     * 1.Class ilk oluşturulduğunda icra edilecek işlemler
     * 2.Constructor içinden this ile bağlanırız. 
     *  
     */
     // constructor(yil,marka,model){
    //     //1111111
    //     // console.log("Constructur içinden geldim");
    //     // console.log(yil,marka,model);
    //     //2222222
    //     this.yil= yil,
    //     this.marka= marka,
    //     this.model = model
    // }
    // marsBas() {
    //     console.log("tır tırrr");
    // }
    // ozellikleriniGoster(){
    //     return `${2022-this.yil} yaşında bir ${this.marka} ${this.model}`
    // }
    
  
    constructor(yil,marka,model,motorGucu){
        console.log("Araba Constructor");
        super(yil,marka,model);
        this.motorGucu = motorGucu
    }

    dortTekeriKilitle(){
        return `4 teker kilitlendi.`
    }


    /// SUPER KEYWORDUN DE anlatılacak 


}

//const myCar = new Araba(1990,"ford","mustang")


class Motorsiklet extends MotorluAraclar {


    /**
     * 1.Class ilk oluşturulduğunda icra edilecek işlemler
     * 2.Constructor içinden this ile bağlanırız. 
     *  
     */
   
  
    // constructor(yil,marka,model){
    //     //1111111
    //     // console.log("Constructur içinden geldim");
    //     // console.log(yil,marka,model);
    //     //2222222
    //     this.yil= yil,
    //     this.marka= marka,
    //     this.model = model
    // }
    // marsBas() {
    //     console.log("tır tırrr");
    // }
    // ozellikleriniGoster(){
    //     return `${2022-this.yil} yaşında bir ${this.marka} ${this.model}`
    // }
    tekTekereKalk(){
        return `Tek teker üstünde gidiyorum`
    }

}

//const myMoto = new Motorsiklet(1990,"Yamaha","R1000")


/// Şimdi ortak olan özellikleri farklı bir sınıfa taşıyalım. 
//tekrar oluşturuğun değişkenleri çağır. Boş obje gelecek..
// Sonrasında extend et.



/// Şimdi Yeni Extend edilen değerlerle yeni değişkenler olutşru 

//const mySecondCar = new Araba(2016,"Toyota","Corolla")
//const mySecondMotoBike =  new Motorsiklet(2020,"Suzuki","SS500")


// ÜSt klası çağırma SUPER KEYWORD 
// Araba class nın içinde yeni özelliler olmasını isteseydim 

const araba3 = new Araba(2020,"BMW","3.20","2000cc")
