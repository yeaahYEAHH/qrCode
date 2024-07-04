let inputFullName = document.querySelector("#fullname"),
	inputType = document.querySelector("#type"),
	inputPrice = document.querySelector("#price");

let modal = document.querySelector('.modal'), 
	select =  document.querySelector('.select');

let imgQr = document.querySelector("#imgQr")

let listPay = ['Оплата за обучение','Оплата за общежитие','Оплата за дополнительное образование','Оплата за утерю','Оплата за спорт','Платные услуги', 'Оплата за обучение','Оплата за общежитие','Оплата за дополнительное образование','Оплата за утерю','Оплата за спорт','Платные услуги'];

select.style.setProperty("top", `${inputType.offsetHeight}px`);

inputType.onclick = function() {
	select.classList.toggle('active')
	for( index in listPay){
		select.innerHTML += `<p id='selectItem${index}'>${listPay[index]}</p>`
	}
}

select.onclick = (event) => {
	inputType.value = event.target.textContent
	select.classList.toggle('active')
}

document.getElementById('paymentForm').addEventListener('submit', function(event) {
	event.preventDefault(); 
	if (this.checkValidity()) {
		generateQRCode();
	} else {
		this.reportValidity();
	}
});

function generateQRCode() {
	modal.classList.toggle('active')
	imgQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ST00012|Name=АУ "Нефтеюганский политехнический колледж"|PersonalAcc=03224643718000008700|BankName=РКЦ Ханты-Мансийск г. Ханты-Мансийск|BIC=007162163|CorrespAcc=40102810245370000007|PayeeINN=8604020653|KPP=860401001|PURPOSE=${inputType.value}|PersAcc=230430740|CHILDFIO=${inputFullName.value}|PayerAddress=Ханты-Мансийский Автономный округ - Югра АО, Нефтеюганск г, мкр.11, дом № 32, квартира 2|Sum=${inputPrice.value}`
}

modal.onmouseover = (event) => {if(event.target == modal) modal.classList.toggle('active');}