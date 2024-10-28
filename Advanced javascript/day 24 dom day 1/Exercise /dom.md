// Getting elements by tag name

// syntax
document.getElementsByTagName('tagname')

//Getting elements by class name

//syntax
document.getElementsByClassName('classname')


//Getting an element by id

//syntax
document.getElementById('id')

Getting elements by using querySelector methods


Getting elements by using querySelector methods
The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name.

querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

let firstTitle = document.querySelector('h1') // select the first available h1 element
let firstTitle = document.querySelector('#first-title') // select id with first-title
let firstTitle = document.querySelector('.title') // select the first available element with class title


querySelectorAll: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.



const allTitles = document.querySelectorAll('h1') # selects all the available h1 elements in the page



// adding attribute

n attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.

const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'

// adding attribute  using setAttribute

The setAttribute() method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute. Let's add class and id attribute for the fourth title.

 const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')



// Another way to setting an attribute

titles[3].className = 'title'
titles[3].id = 'fourth-title'



//Adding class  using  classList

The class list method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.

titles[3].classList.add('title', 'header-title')

//Adding text to Html element 


// adding text content using textcontent

const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'


//Adding Text Content using innerHTML

const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'






