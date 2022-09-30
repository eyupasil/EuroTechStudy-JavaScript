//İkisi birbirine değiyor mu ? 
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}
//Skor ekleme 
let skor= 0;
const h1Skor = document.querySelector('h1')

//Sound Ekleme
const coinSound = document.querySelector('#coinSound')
const avatar = document.querySelector('#player')

window.addEventListener('keyup', function (e) {
	//Event listener çalışıyor mu check
	//console.log(e.key);
	if (e.key === 'ArrowDown') {
		const curTop = convertToNum(getComputedStyle(avatar).top)
		avatar.style.top = `${curTop + 30}px`
		console.log(avatar.style.top);
	} else if (e.key === 'ArrowUp') {
		const curTop = convertToNum(getComputedStyle(avatar).top)
		avatar.style.top = `${curTop - 30}px`
	} else if (e.key === 'ArrowLeft') {
		const curLeft = convertToNum(getComputedStyle(avatar).left)
		avatar.style.left = `${curLeft - 30}px`
		avatar.style.transform = 'scale(-1,1)'
	} else if (e.key === 'ArrowRight') {
		const curLeft = convertToNum(getComputedStyle(avatar).left)
		avatar.style.left = `${curLeft + 30}px`
		avatar.style.transform = 'scale(1,1)'
		console.log(avatar.style.right);
	}

	
	//Coin ve avatar çakışıyormu Son Safa
	if(isTouching(avatar,coin)){
	 moveCoin()
	 skor +=1
	h1Skor.innerText = `Skor = ${skor} `
	coinSound.play()
	}	
})
const convertToNum = function (pos) {
	if (!pos) {
		return 0;
	} return parseInt(pos.slice(0, -2))
}
// Coini sayfa züerinde rastgele hareket ettime 
const coin = document.querySelector('#coin')
const moveCoin = () => {
	const x = Math.floor(Math.random()*window.innerWidth) 
	const y = Math.floor(Math.random()*window.innerHeight) 
	coin.style.left = `${x}px`
	coin.style.top = `${y}px`
}

moveCoin();