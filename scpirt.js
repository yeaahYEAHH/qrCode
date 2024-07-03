let listPay = ['Оплата за обучение','Оплата за общежитие','Оплата за дополнительное образование','Оплата за утерю','Оплата за спорт','Платные услуги', 'Оплата за обучение','Оплата за общежитие','Оплата за дополнительное образование','Оплата за утерю','Оплата за спорт','Платные услуги']

let select = document.querySelector('#selectPay');
let buttonClose =document.querySelector('#close'); 
let buttonQr = document.querySelector('#createQr');

let modal = document.querySelector('.modal');
let selectList = document.querySelector('.select');

selectList.style.setProperty("left", window.getComputedStyle(select).width * 2);

for( index in listPay){
	selectList.innerHTML += `<p id='selectItem${index}'>${listPay[index]}</p>`
}

select.addEventListener('click', (e) => {
	selectList.style.setProperty("top", window.getComputedStyle(select).height);
	selectList.classList.toggle('active')
})


selectList.addEventListener('click', (e) => {
	select.value = e.target.textContent
})

select.onblur = () => {
	selectList.classList.toggle('active')
}

buttonQr.addEventListener('click', () => {
	modal.classList.toggle('active')
})

buttonClose.addEventListener('click', () => {
	modal.classList.toggle('active')
})

modal.onmouseover = function(e) {
	if(e.target == modal) modal.classList.toggle('active')
};

