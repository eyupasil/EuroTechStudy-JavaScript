const macList = [{
    deplasmanTakimi: {
      takim: 'Besiktas',
      skor: 3,
      isWinner: true
    },
    evSahibi: {
      takim: 'Galatasaray',
      skor: 1,
      isWinner: false
    }
  },
  {
    deplasmanTakimi: {
      takim: 'Besiktas',
      skor: 0,
      isWinner: false
    },
    evSahibi: {
      takim: 'Galatasaray',
      skor: 2,
      isWinner: true
    }
  },
  {
    evSahibi: {
      takim: 'Besiktas',
      skor: 1,
      isWinner: true
    },
    deplasmanTakimi: {
      takim: 'Galatasaray',
      skor: 0,
      isWinner: false
    }
  },
  {
    evSahibi: {
      takim: 'Besiktas',
      skor: 0,
      isWinner: false
    },
    deplasmanTakimi: {
      takim: 'Galatasaray',
      skor: 1,
      isWinner: true
    }
  },
  {
    deplasmanTakimi: {
      takim: 'Besiktas',
      skor: 0,
      isWinner: false
    },
    evSahibi: {
      takim: 'Galatasaray',
      skor: 3,
      isWinner: true
    }
  },
  {
    evSahibi: {
      takim: 'Besiktas',
      skor: 4,
      isWinner: true
    },
    deplasmanTakimi: {
      takim: 'Galatasaray',
      skor: 2,
      isWinner: false
    }
  },
  {
    deplasmanTakimi: {
      takim: 'Besiktas',
      skor: 3,
      isWinner: true
    },
    evSahibi: {
      takim: 'Galatasaray',
      skor: 1,
      isWinner: false
    }
  }
];
const parentUl = document.createElement('ul')
for (const mac of macList) {
    const {deplasmanTakimi,evSahibi} = mac;
      //console.log(mac.deplasmanTakimi.takim,mac.evSahibi.takim);
  // console.log(deplasmanTakimi.takim, evSahibi.takim);
    const macLi = document.createElement('li')
    const {takim:esTakim,skor:esSkor} = evSahibi;
    const {takim:dTakim,skor:dSkor} = deplasmanTakimi;

    const myTeam = esTakim ==='Besiktas'? evSahibi:deplasmanTakimi
//    console.log(myTeam);
    //kazanma ya da kaybetme durumuna göre class ekleme
    if(myTeam.isWinner)
        macLi.classList.add('kazanan')
        else macLi.classList.add('kaybeden')
    
  //  KAzanan sonuc italic ve farklı renkte göster
    let sonuc;
    if(esSkor>dSkor){
         sonuc = `${deplasmanTakimi.skor}- <b style="color:red">${evSahibi.skor} </b>`
    }else{
         sonuc = `<b style="color:red">${deplasmanTakimi.skor}</b> - ${evSahibi.skor} `
    }

    
    const takimAdlari = `${deplasmanTakimi.takim} VS ${evSahibi.takim} `
    macLi.innerHTML = `${takimAdlari} ${sonuc}`
    parentUl.appendChild(macLi)
}
document.body.prepend(parentUl)