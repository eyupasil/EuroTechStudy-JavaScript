
/**
 * 
 * İlk olarak ne işe yaradığını açıkla 
 * Sonra developer tools aç 
 * Sources sekmesi latında inceleme yap.
 * Debugger break point koymayı ve breakpointte kodun icrasının durduuğunu göster
 * Sağ tarafta Call Stackk i göster
 * Size stack göstermek için Debug kısmını açtım. Ama burda
 * kodunuzda yolun gitmeyen birşeyler varsa ya da garip değerler döndürüyorsa burdan
 * adım adım giderek kontrolleri yapabilirsiniz.
 */
const tekrarEt = (str, times) => {
	let result = '';
	for (let i = 0; i < times; i++) {
		result += str;
	}
	return result;
};

const buyukHarfeCevir = (str) => {
	return str.toUpperCase() +'!!!</br>';
};

const sozcukFormat = (sozcuk) => {
	let text = buyukHarfeCevir(sozcuk);
	let tekrarlanmısSozcuk = tekrarEt(text, 8);
	return tekrarlanmısSozcuk;
};

const uyariYap = (sozcuk, el) => {
	const h1 = document.createElement('h1');
	h1.innerHTML = sozcukFormat(sozcuk);
	el.appendChild(h1);
};

console.log("Selamm")
uyariYap('Pratik Yapın', document.body);

//sesi Al 




/////JS Sİngle Thread /////
console.log("Birinci")
alert('Selam')
console.log("ikinici")

/**
 * Alert fonk tamamlana kadar JS işlme yapması duryor. 
 * Gerçek kodlama da böyle birşey olmasını istemeyiz. 
 * Yansi 26 Netfiz üzerinden film araması yaptığımzıı düşünelinm.
 * Buradaki işlem zaman alır. Serverea isrtek gidecek dB den iligli veriyi bulacak tekrar
 * kulanıcya gönderecek.
 * Veritabanından veri çekerken ya da bir APİ den veri laırken bunun olmasını istemeyiz.
 * Özet olrak bu durum için JS kendi içinde bir çözümü olmasada etrafında dolaşılabişlmektedir.
 * 
 */


