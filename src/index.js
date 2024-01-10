console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
.then(res => res.json())
.then(image => {
    console.log(image);
    displayImage(image)
});

function displayImage(images){
    const dogImages = document.querySelector('#dog-image-container');
    images.message.forEach(imgUrl =>{
        const dogImg = `<img
            src = ${imgUrl}
        >`;
        dogImages.insertAdjacentHTML('beforeend', dogImg);
    });
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all';

fetch(breedUrl)
.then(res => res.json())
.then(data => {
    console.log(data);
    displayBreed(data.message);
});

let dogBreeds = [];
function displayBreed(breedList){
    for(let key in breedList){
        dogBreeds.push(key)
    }
    for(let breeds of dogBreeds){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.id = "dog-name";
    li.textContent = breeds;ul.append(li);
    }

    const dogStyles = document.querySelectorAll('#dog-name');
    dogStyles.forEach(dog => {
        dog.addEventListener('click', () =>{
            dog.style.color = 'red';
        });
    });

    const breedFilter = document.getElementById('breed-dropdown');
    breedFilter.addEventListener('click', () => {
    const selectedLetter = breedFilter.value;
    filterAndDisplayDogs(selectedLetter);
    });
}

function filterAndDisplayDogs(selectedLetter) {
    const ul = document.getElementById('dog-breeds');
    ul.innerHTML = ''; // Clear the list before re-populating

    const filteredBreeds = dogBreeds.filter(breed => {
        return selectedLetter === '' || breed.startsWith(selectedLetter);
    });

    filteredBreeds.forEach(breed => {
        const li = document.createElement('li');
        li.textContent = breed;
        ul.appendChild(li);
    });
}

