const emptyList = document.querySelector('.emptyList');
const loginForm = document.querySelector('.login');
const userName = document.querySelector('#username');
const passWord = document.querySelector('#password');

loginForm.addEventListener('submit', logSubmit);

const LOGIN_URL = "https://reqres.in/api/login/"; 
const USERS_URL = "https://reqres.in/api/users";

let credentials = 0; 
function logSubmit(e) {
	e.preventDefault();

	credentials = {
    email: userName.value,
    password: passWord.value
	}
	fetchPost(LOGIN_URL);
}

function renderList(allData, emptyList) {
	emptyList.innerHTML = "";
	
	allData.forEach(user => emptyList.innerHTML += 
		`<li> 
			${user.id}
			${user.first_name}
			${user.last_name}
		</li>`);
}

function fetchPost(LOGIN_URL) {
	fetch(LOGIN_URL, {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(credentials)
	})
	.then(response => {
			if (response.ok) {
				fetchUsers();
			} else {
				throw new Error("Something went wrong with POST! " + response.statusText);
			}
	}).catch(error => console.log(error));
}

async function fetchUsers() {
  let allData = [];
  let morePagesAvailable = true;
  let currentPage = 0;

  while(morePagesAvailable) {
    currentPage++;
    const response = await fetch(`${USERS_URL}?page=${currentPage}`)
    let { data, total_pages } = await response.json();
    data.forEach(e => allData.push(e));
		morePagesAvailable = currentPage < total_pages;
	}
	renderList(allData, emptyList);
	return allData;
}


