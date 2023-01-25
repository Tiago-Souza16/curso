var textArea1 = document.querySelector("#areatxt1");
var textArea2 = document.querySelector("#areatxt2");

function limpar(){

document.getElementById("areatxt2").value = "";

}

function copiar(){

	var textoCopiado = document.getElementById("areatxt2");
	textoCopiado.select();
	textoCopiado.setSelectionRange(0, 9999);
	document.execCommand("copy");
}

function btnencriptar(){

	var textEncriptado = encriptar(textArea1.value);
	textArea2.value = textEncriptado;
	textArea1.value = "";

}

function encriptar(stringEncriptada){

	let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
	stringEncriptada = stringEncriptada.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++){

		if(stringEncriptada.includes(matrizCodigo[i] [0])){
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo [i] [0] , matrizCodigo [i] [1]);
		}

	}
	return stringEncriptada;

}

function btndesencriptar(){

	var textDesencriptado = desencriptar(textArea1.value);
	textArea2.value = textDesencriptado;
	textArea1.value = "";

}

function desencriptar(stringdesencriptada){

	let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
	stringdesencriptada = stringdesencriptada.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++){

		if(stringdesencriptada.includes(matrizCodigo[i] [1])){
			stringdesencriptada = stringdesencriptada.replaceAll(matrizCodigo [i] [1] , matrizCodigo [i] [0]);
		}

	}

	return stringdesencriptada;

}