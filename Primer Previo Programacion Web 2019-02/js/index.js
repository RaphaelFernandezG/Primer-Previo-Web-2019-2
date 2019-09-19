


function traerDatos2(cols) {

	$.ajax({
		url: "../js.info.json",
		success: function(respuesta) {

			let datos = respuesta;	

			let res = document.querySelector(`${"#tableInfo"} tbody`);
			res.innerHTML = '';

			let cab = document.querySelector(`${"#tableInfo"} thead`);
			cab.innerHTML = '';

			let item = datos [0];
			let columnas = null;

			if(cols != null) {
				columnas = cols;
			}else{
				columnas = new Array();
				for (var key in item) {
					columnas.push(key);
				}
			}

			let cabecera = '';
			for (var key in columnas) {
				cabecera += `<th>${columnas[key]}</th>`;
			}

			cab.innerHTML += `<tr>${cabecera}</tr>`;


			for(let item of datos) {
				resul = '';
				for (var key in columnas) {
					resul += `<td>${item[columnas[key]]}</td>`;
				}
				res.innerHTML += `<tr>
	      				${resul}
	    			</tr>`;
			}
		},
		error: function() {
	        console.log("No se ha podido obtener la información");
	    }
	});
}

$("#guardar").click(function() { 
		traerDatos2('#table72',)
	});


