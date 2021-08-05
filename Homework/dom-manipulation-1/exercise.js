/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const pelement = document.querySelector("p");
console.log(pelement);
const site = document.querySelector(".site-header");
console.log(site);
const text = document.querySelector("#jumbotron-text");
console.log(text);
var Pelement = document.querySelectorAll("div.primary-content .lead");
console.log(Pelement)




/*
Task 2
======


When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.querySelector("#alertBtn")
alertButton.addEventListener('click', () =>
alert('Thanks for visiting Bikes for Refugees!')
)



/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const changeColorBtn = document.querySelector("#bgrChangeBtn")
   changeColorBtn.addEventListener('click', (event) => {
    const assignBody = document.querySelector('body')
    assignBody.style.backgroundColor = 'orange';})
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

let addSomeTextBtn = document.querySelector("#TextBtn")

addSomeTextBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    let whereIsShown = document.querySelector('#mainArticles')
    let  paragraph =document.createElement('p') 
    paragraph.textContent = ' LEARN MORE'
    whereIsShown.prepend(paragraph)}

/*

Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let Links = document.querySelector('#largerLinksBtn');
Links.addEventListener('click', event =>{
    let allLinks = document.querySelectorAll('a');
    allLinks.forEach((a) => {
    a.style.fontSize = '40px'})})
/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const addButton = document.querySelector("#addArticleBtn")
addButton.addEventListener('click', () =>{
    const whereIsShown = document.querySelector('#mainArticles')
    const userText = document.querySelector('.addArticle').value;
    const textInputF = document.createElement('p')
    textInputF.textContent = userText
    whereIsShown.prepend(textInputF)
    
})
const userText1 = document.getElementsByClassName('addArticle')
userText1.innerHTML = ""

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
let changeColorBtn = document.querySelector("#bgrChangeBtn")
let index = 0;
changeColorBtn.addEventListener('click', () => {
    let colors = ['yellow', 'blue', 'orange', 'purple'];
    let  assignBody = document.querySelector('body')
    if(index > (colors.length-1)){
       index = 0;     
    }
    assignBody.style.backgroundColor = colors[index];
    index ++;
    })
