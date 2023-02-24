const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1>My dynamic section</h1>
    <p>Extra text added inside paragraph</p>
    <ul>
    <li>first item</li>
    <li>first item</li>
    <li>first item</li>
    <li>first item</li>
    </ul>
`
main.appendChild(section);

const otherSection = document.createElement('other-section');

otherSection.innerHTML = `
   <h1>Other Section</h1>
   <ul>
      <li>last item</li>
      <li>last item</li>
      <li>last item</li>
   </ul>

`
main.appendChild(otherSection);