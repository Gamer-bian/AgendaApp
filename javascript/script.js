const buttonSave = document.querySelector('.agenda__buttons-save');
const buttonClear = document.querySelector('.agenda__buttons-clear');
const agendaContainerCard = document.querySelector('.agenda__container-cards');
const agendaContactType = document.getElementById('contact-type');
const agendaInputName = document.getElementById('text');
const agendaInputPhone = document.getElementById('phone');

function valueNot(input){
    const valueInput = input.value;
    if(valueInput === '' || valueInput === null || valueInput === undefined){
        input.style.outline = 'none';
        input.style.border = '1px solid #0c6';
        return false;
    }else{
        input.style.outline = 'none';
        input.style.border = '1px solid #0c6';
        return true;
    }
};

function value(input){
    const valueInput = input.value;
    if(valueInput === '' || valueInput === null || valueInput === undefined){
        input.style.outline = '3px solid #f00';
        input.style.border = '1px solid #f00';
        return false;
    }else{
        input.style.outline = '3px solid #0f0';
        input.style.border = '1px solid #0f0';
        return true;
    }
};


buttonClear.addEventListener('click', function(event){
    event.preventDefault();
    allValue = valueNot(agendaContactType) && allValue;
    allValue = valueNot(agendaInputName) && allValue;
    allValue = valueNot(agendaInputPhone) && allValue;
    agendaInputName.value = '';
    agendaInputPhone.value = '';
    agendaContactType.value = '';
    agendaInputName.focus();
}); 

buttonSave.addEventListener('click', function(event){
    event.preventDefault();
    let allValue = true;

    allValue = value(agendaContactType) && allValue;
    allValue = value(agendaInputName) && allValue;
    allValue = value(agendaInputPhone) && allValue;

    if(!allValue){
        alert('necesita completar todos los campos');
    }else{ 
    const agendaCards = document.createElement('div');
    agendaCards.setAttribute('class', 'agenda__cards');

    const tituloPrincipal = document.createElement('h2');
    tituloPrincipal.setAttribute('class', 'agenda__cards-titulo-principal');
    const valueAgendaContactType = agendaContactType.value;
    tituloPrincipal.innerHTML = `Contact - ${valueAgendaContactType}`;

    const agendaCardsName = document.createElement('li');
    agendaCardsName.setAttribute('class', 'agenda__cards-name');
    const valueAgendaInputName = agendaInputName.value;
    agendaCardsName.innerText = `Name - ${valueAgendaInputName}`;

    const agendaCardsPhone = document.createElement('li');
    agendaCardsPhone.setAttribute('class', 'agenda__cards-phone');
    const valueAgendaInputPhone = agendaInputPhone.value;
    agendaCardsPhone.innerText = `Phone - ${valueAgendaInputPhone}`;

    const agendaCardsButtonContainer = document.createElement('div');
    agendaCardsButtonContainer.setAttribute('class', 'agenda__cards-button-container');

    const cardButton = document.createElement('button');
    cardButton.type = 'button';
    cardButton.textContent = 'Delete';
    
    agendaContainerCard.appendChild(agendaCards);
    agendaCards.appendChild(tituloPrincipal);
    agendaCards.appendChild(agendaCardsName);
    agendaCards.appendChild(agendaCardsPhone);
    agendaCards.appendChild(agendaCardsButtonContainer);
    agendaCardsButtonContainer.appendChild(cardButton);

    allValue = valueNot(agendaContactType) && allValue;
    allValue = valueNot(agendaInputName) && allValue;
    allValue = valueNot(agendaInputPhone) && allValue;
    agendaInputName.value = '';
    agendaInputPhone.value = '';
    agendaContactType.value = '';
    agendaInputName.focus();
    }
});