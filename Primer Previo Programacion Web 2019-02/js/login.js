localStorage.setItem("pass","1234");
localStorage.setItem("user","admin");

document.querySelector('#ingresar').addEventListener('click', function() { 
	usuario=document.querySelector("#usuario").value;
	password=document.querySelector("#password").value;

	if(usuario==user){
		if(password==pass){
			console.log(true);

			window.location="index.html";
		}

		document.querySelector("#alerta").innerHTML="Password incorrecto";
	}
	document.querySelector("#alerta").innerHTML="Usuario no encontrado";

});


