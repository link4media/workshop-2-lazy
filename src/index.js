import {registerImage} from './lazy'

// RANDOM FUNCTION
const maximum = 122;
const minimum = 1;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

// FUNCTION: CREATE NODE for div container and image
const createImageNode = () => {
    const container = document.createElement('div')
    container.className = "newDiv";

    const image = document.createElement('img')
    image.className = "imgStyles";
    image.width = '400';
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; // dataset = info between HTML and JS

    container.appendChild(image);
    

    return container;
}
// **** CREATE ADD FOX BUTTON ->
const createButtonNode = () => {
    const divContainer = document.createElement('div')
    divContainer.className = 'buttonContainer';

    const button = document.createElement('button');
    button.type = 'button';
    button.id = 'addButton';
    button.className = 'button1Styles';
    button.innerHTML = 'ADD FOX'

    const button2 = document.createElement('button');
    button2.type = 'button';
    button2.id = 'removeButton';
    button2.className = 'button2Styles';
    button2.innerHTML = 'REMOVE ALL'

    divContainer.appendChild(button);
    divContainer.appendChild(button2);


    const reference = document.querySelector('div.text-center');
    const imageContainer = document.getElementById('images');
    reference.insertBefore(divContainer, imageContainer);
}
createButtonNode();
// CREATE ADD FOX BUTTON **** <-


// GETTING IMAGES AND DISPLAYING THEM
const mountNode = document.getElementById('images')

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
    console.log('⚪ Called foxes:')
}

const addFox = document.getElementById('addButton')

addFox.addEventListener('click', addImage)


// REMOVE ALL
const removeButton = document.getElementById('removeButton');
const divToRemove = 'newDiv';

removeButton.addEventListener('click', () => {
    const elementsToRemove = document.getElementsByClassName(divToRemove);
    console.log('All foxes are removed!');
    while (elementsToRemove.length > 0) {
        elementsToRemove[0].parentNode.removeChild(elementsToRemove[0]);
    }
});