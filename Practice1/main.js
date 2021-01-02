const elementDom = document.querySelector('.emptyDiv');

function fetchPostData(page_size, page_number) {
  fetch('https://jsonplaceholder.typicode.com/posts/')
  	.then(postData => { 
			return postData.json();
		})
		.then(data => {
			const elements = paginate(data, page_size, page_number);
			displayData(elementDom, elements);
		})
};

function paginate(arrayEmpty, page_size, page_number) {
	return arrayEmpty.slice((page_number - 1) * page_size, page_number * page_size);
}

function displayData(elementDom, elements) {
	elementDom.innerHTML = '';
	
	elements.map((post) => {
		const newID = document.createElement("p");
		const newH1 = document.createElement("h1");
		const newP = document.createElement("p");
		newID.textContent = post.id;
		newH1.textContent = post.title;
		newP.textContent = post.body;
		elementDom.append(newID, newH1, newP);
	});
}

let currentPage = 1;
let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', changePagination));

function changePagination(e) {
	const button = e.currentTarget;
	const buttonTarget = button.dataset.page;

	buttonTarget === 'previous' ? currentPage = Math.max(currentPage - 1, 1):
																currentPage = Math.min(currentPage + 1, 5);

	elementDom.innerHTML = '';

	fetchPostData(20, currentPage);
}

fetchPostData(20, 1);
