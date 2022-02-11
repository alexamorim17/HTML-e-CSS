

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk  = false;
let emailOk = false;
let assuntoOk = false;

nome.style.width = "100%"
email.style.width = "100%"


function validarNome(){
	let txt = document.querySelector('#txtNome')

	if(nome.value.length < 3){
		txt.innerHTML = 'Nome inválido'
		txt.style.color = 'red'
		nomeOk = false;
		

	} else{
		txt.innerHTML = 'Nome Válido'
		txt.style.color = 'green'
		nomeOk = true;
	}
}

function validarEmail(){
	let txtEmail = document.querySelector('#txtEmail')

	if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
		txtEmail.innerHTML = 'E-mail inválido'
		txtEmail.style.color = 'red'
		emailOk = false
		
	}else{
		txtEmail.innerHTML = 'E-mail válido'
		txtEmail.style.color = 'green'
		emailOk = true
	}
}

function validarAssunto(){
	let txtAssunto = document.querySelector('#txtAssunto')

	if(assunto.value.length >= 100){
		txtAssunto.innerHTML = 'Texto está grande, digite no máximo 100 caracteres'
		txtAssunto.style.color = 'red'
		txtAssunto.style.display = 'block'
		assuntoOk = false
		
	}else{
		txtAssunto.style.display = 'none'
		assuntoOk = true
	}
}

function enviar(){

	if(emailOk == true && assuntoOk == true && nomeOk == true){


		alert('Formulario enviado com sucesso !')

	}else{
		alert('Preencha o formulário corretamente antes de enviar ...')
	}
}