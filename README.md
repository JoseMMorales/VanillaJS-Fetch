# VanillaJS-Fetch

[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) in JavaScript provides [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) method, which you can use to perform requests. This method returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves the [response](https://developer.mozilla.org/en-US/docs/Web/API/Response) of the request. It has just one argument, which is the URL of the resource you wish to fetch.

This repo is about that, how to raise requests, confirming responses, meeting promises from different [APIs](https://developer.mozilla.org/en-US/docs/Web/API) to handle objects received, and finally using VanillaJS to display the [Nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node) in the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

Therefore, you will find uploaded in the project two individual practices, which means two mini-projects with steps to follow up.

## Steps below...

### Practice 1
* Make a GET request to this [API](https://jsonplaceholder.typicode.com/posts) and save all Posts.
* Make a pagination displaying just 20 posts coming from the API.
* Access to DOM creating H1 for title and p for body of each post.
* Create all pages needed to display all data received from API.
* Add buttons (Prev/Next) to navigate through the pages.

API: https://jsonplaceholder.typicode.com/posts

### Practice 2

* Create simple login to make a POST request to this [API](https://reqres.in/api/login) with credentials.
* If the response is successful we will display all users from this [API](https://reqres.in/api/users). 
* If the request is not successful, an alert should be displayed.
* Go through all pages to display all users in the DOM.

API: https://reqres.in/api/login / https://reqres.in/api/users

CREDENTIALS: Username: eve.holt@reqres.in / Password: cityslicka

## Folders structure
#### !Note that both practices have same structure
![Screenshot 2021-01-02 at 17 20 24](https://user-images.githubusercontent.com/43299285/103461460-ce463f80-4d1e-11eb-932f-b391074d161b.png)

## Fetch Basic Syntax
![Screenshot 2021-01-02 at 17 27 47](https://user-images.githubusercontent.com/43299285/103461591-d6eb4580-4d1f-11eb-9563-c2032ff23437.png)

## More about Promises...
Asynchronous functions [(Async)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) expressions are very useful to resolve more than one promise. It will slow the progress of the request until it will be fullfilled.

## Installing
* Clone the project to your local directory.
* $git clone https://github.com/JoseMMorales/VanillaJS-Fetch.git
* $cd VanillaJS-Fetch.
* Right click on index.html file and select "Copy path".
* Open window browser and paste URL.

## Technology:
* HTML5
* CSS3
* VanillaJS

### !!!Note that resources in this project are for learning purposes.

## Author
Jose MMorales