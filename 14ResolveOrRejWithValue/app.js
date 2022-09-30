//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
/**1111 */
// const fakeRequest = (url) => {
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(() => {
// 			let random = Math.random()
// 			random <0.3 ? reject():resolve() 
// 		}, 3000);
// 	})
// }
// fakeRequest.then(()=>{
// 	console.log("REQUEST WORKED");
// }).catch(()=>{
// 	console.log("REQUEST FAILED");
// })

/**PArametre ile çalıştırma 
 * 222222
 * Burada sadece reject kısmına response parameteresi eklendi
*/

// const fakeRequest = (url) => {
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(() => {
// 			let random = Math.random()
// 			if (random<0.3) {
// 				reject({status:404})
// 			}else resolve()
// 		}, 3000);
// 	})
// }
// fakeRequest.then(()=>{
// 	console.log("REQUEST WORKED");
// }).catch((res)=>{
// 	console.log(res.status);
// 	console.log("REQUEST FAILED");
// })

/**Örneğimizi daha anlamlı halen getirelim.
 * 333
 * Biraz daha gereçkci bir örnek olsun 
*/
// const fakeRequest = (url) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const pages = {
// 				'/users': [
// 					{ id: 1, username: "Ayça" },
// 					{ id: 2, username: "Bilal" }
// 				],
// 				'/about': "This is about PAge"
// 			}
// 			const data = pages[url]
			
// 			if (data) {
// 				resolve({ status: 200 , data})
// 			} else reject({ status: 404 })



// 		}, 1000);
// 	})
// }
// fakeRequest('/users')
// 	.then((res) => {
// 		console.log('Status Code', res.status);
// 		console.log('Data', res.data);
// 		console.log('REQUEST WORKED!');
// 	})
// 	.catch((res) => {
// 		console.log(res.status);
// 		console.log('REQUEST FAILED');
// 	});

	/**
	 * 44444444444444
	 * Promise chain ile birbirini bağlama
	 */

	 const fakeRequest = (url) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const pages = {
					'/users'        : [
					{ id: 1, username: "Ayça" },
 					{ id: 2, username: "Bilal" }
					],
					'/users/1'      : {
						id        : 1,
						username  : 'Ayça',
						upvotes   : 360,
						city      : 'Ankara',
						topPostId : 35
					},
					'/users/5'      : {
						id       : 2,
						username : 'Bilal',
						upvotes  : 571,
						city     : 'Sivas'
					},
					'/posts/35' : {
						id    : 35,
						title :
							'Şuraya gittim, bunu yedim!!'
					},
					'/about'        : 'This is the about page!'
				};
				const data = pages[url];
				if (data) {
					resolve({ status: 200, data }); //resolve with a value!
				}
				else {
					reject({ status: 404 }); //reject with a value!
				}
			}, 1000);
		});
	};
	
	fakeRequest('/users')
		.then((res) => {
			console.log(res);
			const id = res.data[0].id;
			return fakeRequest(`/users/${id}`);
		})
		.then((res) => {
			console.log(res);
			const postId = res.data.topPostId;
			return fakeRequest(`/posts/${postId}`);
		})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log('Birşeyler ters gitti!', err);
		});
	