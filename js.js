


// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('#msg');
// const userList = document.querySelector('.users');
// const serverSelect = document.querySelector('#server'); // Pasirinktojo lauko elementas

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     // Tikriname, ar klaidos pranešimas jau yra rodomas
//     if (msg.classList.contains('error')) {
//         return; // Jei taip, nutraukiame funkcijos vykdymą
//     }

//     if (nameInput.value === '' || emailInput.value === '') {
//         msg.classList.add('error');
//         msg.innerHTML = 'Pasirinkite produktą';
//         setTimeout(() => {
//             msg.innerHTML = ''; // Pašaliname klaidos pranešimą
//             msg.classList.remove('error');
//         }, 3000);
//     } else {
//         // Sukuriame naują sąrašo elementą
//         const li = document.createElement('li');
//         // Pridedame įvestų duomenų tekstą į sąrašo elementą
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
//         // Pridedame pasirinktą serverį į sąrašo elementą
//         li.appendChild(document.createTextNode(`, Pasirinktas produktas: ${serverSelect.value}`));
        
//         if (userList !== null) {
//             userList.appendChild(li); // Pridedame sąrašo elementą į sąrašą
//         } else {
//             console.error('Element with class "users" not found.');
//         }
        
//         // Išvalome įvestų duomenų laukus
//         nameInput.value = '';
//         emailInput.value = '';
//     }
// }


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('.users');
const serverSelect = document.querySelector('#server');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (msg.classList.contains('error')) {
        return;
    }

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Užpildyti visus laukus';
        setTimeout(() => {
            msg.innerHTML = '';
            msg.classList.remove('error');
        }, 3000);
    } else {
        const li = document.createElement('li');
        
        // Pridėti pasirinktą serverį pirmą
        li.appendChild(document.createTextNode(`Pasirinktas produktas: ${serverSelect.value}`));
        
        // Pridėti įvestą kiekį
        li.appendChild(document.createTextNode(`, Kiekis: ${nameInput.value}`));

        // Pridėti pasirinktą datą
        li.appendChild(document.createTextNode(`, Data: ${emailInput.value}`));

        if (userList !== null) {
            userList.appendChild(li);
        } else {
            console.error('Element with class "users" not found.');
        }
        
        nameInput.value = '';
        emailInput.value = '';
    }
}
