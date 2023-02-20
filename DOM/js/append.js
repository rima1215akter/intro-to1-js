//1. where to add
const placesList = document.getElementById('places-list')
//2. what to be added
const li = document.createElement('li')
li.innerText = 'sibling';


//3. add the child
placesList.appendChild(li)

//1. where to add 
const maincontainer = document.getElementById('main container')

//2. where to be add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = 'biryani';
ul.appendChild(li1);


const li2 = document.createElement('li')
li2.innerText = 'iryani';
ul.appendChild(li2);

const li3 = document.createElement('li')
li3.innerText = 'ryani';
ul.appendChild(li3);

section.appendChild(ul);
maincontainer.appendChild(section);


//set innerHTML directly
/* const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress</h1>
<ul>
   <li>T-shirt</li>
   <li>Lungi</li>
   <li>shirt</li>
</ul>
`
maincontainer.appendChild(sectionDress); */