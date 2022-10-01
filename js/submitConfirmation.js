//dom elements
const modalSubmit = document.getElementsByClassName('container-confirmation-submit');
const closeModalSubmit = document.getElementsByClassName('close-modal-submit');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');
//fin de dom elements

//submit confirmation

//modal submit
function displayModalSubmit() {
    modalbg.style.display = 'none';
    modalSubmit[0].style.display = 'block';
}
//fin de modal submit

//close submit
function closeSubmit() {
    modalSubmit[0].style.display = 'none';
    first.style.display = 'none';
    last.style.display = 'none';
    email.style.display = 'none';
    birthdate.style.display = 'none';
    quantity.style.display = 'none';
}
//fin de close submit