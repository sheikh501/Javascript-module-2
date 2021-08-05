/*
Clicking on the buttons should change the "theme" of the website:
- When clicking **blue** it should change:
  - **Jumbotron** background color to `#588fbd`
  - **Donate a bike** button background color to `#ffa500`
  - **Volunteer** button background color to `black` and text color to `white`
- When clicking **orange** it should change:
  - **Jumbotron** background color to `#f0ad4e`
  - **Donate a bike** button background color to `#5751fd`
  - **Volunteer** button background color to `#31b0d5` and text color to `white`
- When clicking **green** it should change:
  - **Jumbotron** background color to `#87ca8a`
  - **Donate a bike** button background color to `black`
  - **Volunteer** button background color to `#8c9c08`
  */

 const changeClrs = function(jumboBackground, donateBackground, VolunteerBack, volunteerTcolor) {
    const jumbo = document.querySelector('.jumbotron');
    jumbo.style.backgroundColor = jumboBackground;
    
    const donateBtn = document.querySelector('.btn.btn-primary.btn-lrg')
    donateBtn.style.backgroundColor = donateBackground;

    const VolunteerBtn = document.querySelector('.btn.btn-secondary.btn-lrg')
    VolunteerBtn.style.backgroundColor = VolunteerBack;
    VolunteerBtn.style.color = volunteerTcolor
}

const blueBtn = document.querySelector('#blueBtn');
blueBtn.addEventListener('click', () => changeClrs('#588fbd', '#ffa500', 'black', 'white'))


const orangeBtn = document.getElementById('orangeBtn')
orangeBtn.addEventListener('click', () => changeClrs('#f0ad4e', '#5751fd', '#31b0d5', 'white'))

const greenBtn = document.getElementById('greenBtn')
greenBtn.addEventListener('click', () => changeClrs('#87ca8a', 'black', '#8c9c08'))
/*
Just below the buttons, there's a form called **Register with us**.
Continue working in `./js/main.js` to add the following functionality:
When the submit button is pressed, it should check that all the form fields are valid:
- The **Your name**, **Email** and **Describe yourself** 
fields need to be non-empty (Hint: their `value` length has to be greater than zero)
- For the **Email** field also check if it contains the `@` character
For all the fields that invalid, it should make their background color `red`.
IF all the fields are valid, when you click **Submit** it should:
- Display an alert to thank you for filling out the form
- Blank out (make empty) all the text fields
**Important hint:** In your function that handles clicks on the `Submit` button 
you will need to call `event.preventDefault()` to stop the browser from refreshing the page. 
To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault
*/
const submitFunction = function (e){
    e.preventDefault() 
let mailField = document.querySelector('#exampleInputEmail1')
let nameField = document.querySelector('#example-text-input')
let describeYfield = document.querySelector('#exampleTextarea')
let invalidMail = (!mailField.value.includes('@'));
let invalidName = nameField.value.trim().length == 0;
let invalidDesc = describeYfield.value.trim().length === 0
let validMail = mailField.value.includes('@');
let validDesc = describeYfield.value.trim().length > 0;
let validName = nameField.value.trim().length > 0;
if ( validName && validDesc && validMail) {
    alert("Thank you for filling out the form")
    mailField.value = '';
    nameField.value = '';
    describeYfield.value = '';
    mailField.style.backgroundColor = 'white' 
    nameField.style.backgroundColor = 'white'                          
    describeYfield.style.backgroundColor = 'white'
} 
else if(invalidMail && invalidName && invalidDesc)  
    {mailField.classList.add('redBackground');
    nameField.classList.add('redBackground');
    describeYfield.classList.add('redBackground')
} 
    else if (validMail && validName && invalidDesc){
    describeYfield.classList.add('redBackground')
} 
    else if(validMail && invalidName && validDesc){
    nameField.classList.add('redBackground')
}  
    else if(invalidMail && validName && validDesc){
    mailField.classList.add('redBackground')
}  
}
//not quite describe me queda marcado en rojo 

let submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', submitFunction)