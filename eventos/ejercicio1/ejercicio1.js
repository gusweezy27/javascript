var nombres = new Array('Juan','Jeni','Ines','Victor','Ivan','Santi', 'Jorge','Gustavo', 'Luis', 'Mario','Pepe');
			var apellidos = new Array('Perez','Garcia','Villalba','Miguez','Del Campo','Iñigo', 'Ronald','Vallejo', 'Martinez', 'Giron','Rodriguez');
			var edad = new Array(55,18,24,40,29,39, 15,23, 33, 25, 34);
			var diagnostico = new Array('miopia', 'cefalea', 'conjuntivitis','gripe', 'cefalea', 'miopia','conjuntivitis', 'migraña', 'miopia', 'gripe','conjuntivitis');
			var numeross = new Array(2354,5435,3476,5670,1235,3450,6730,1237,6666,4324, 9807);

			var listaPacientes = new Array();

			for(var i=0; i<nombres.length; i++){

				listaPacientes[i] = {
					"nombre": nombres[i],
					"apellido" : apellidos[i],
					"edad": edad[i],
					"diagnostico": diagnostico[i],
					"numeross" : numeross[i]
				}

			}


var main = document.getElementById('main');

/* Creo el select dinamico de enfermedades */


var selectorDiagnostico = document.getElementById('enfermedad');

var listadoEnfermedades = new Array('miopia', 'cefalea', 'conjuntivitis','gripe', 'meningitis', 'gota','diabetes', 'migraña', 'otitis', 'anginas','artritis');


for(var i= 0; i<listadoEnfermedades.length; i++)
{
	selectorDiagnostico.innerHTML += '<option value="'+listadoEnfermedades[i]+'">'+listadoEnfermedades[i]+'</option>';
}




selectorDiagnostico.addEventListener('change', dameDiagnostico);

function dameDiagnostico(event)
{
	filtrarDiagnostico(listaPacientes, this.value);
}



/* termino el select dinamico de enfermedades */

/* Creo el select dinamico de edades */


var selectorEdades = document.getElementById('edades');

for(var j= 1; j<=100; j++)
{
	selectorEdades.innerHTML += '<option value="'+j+'">'+j+'</option>'
}

selectorEdades.addEventListener('change', dameEdad);


function dameEdad(event){

	filtrarEdad(listaPacientes, this.value)
}



/* termino el select dinamico de enfermedades */


/* input de busqueda en javascript */

var cajaTexto = document.getElementById('inputSearch');
var botonConsulta = document.getElementById('consulta');

botonConsulta.addEventListener('click', dameConsulta);


function dameConsulta(){

	var consulta = document.getElementById('inputSearch').value;
	buscarPaciente(listaPacientes, consulta); 
}

function buscarPaciente(pLista,pNombre)
{
	main.innerHTML = "";
	contador = 0
	for(var i=0; i<pLista.length; i++)
	{
		if(pLista[i]['nombre'].toLowerCase() == pNombre.toLowerCase())
		{
			main.innerHTML += '<div class="ficha"><h3>'+pLista[i]['nombre']+'</h3><h4>'+pLista[i]['diagnostico']+'</h4><p>'+pLista[i]['edad']+'</p><p>'+pLista[i]['numeross']+'</p></div>';
			contador++;
		}
	}

	if(contador == 0)
	{
		main.innrHTML = "No existe nada con estos parametros";
	}

}













