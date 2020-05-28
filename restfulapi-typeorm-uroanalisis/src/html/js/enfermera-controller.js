$(document).ready(function(){
    //Se ejecuta cuando el DOM este cargado completamente
    console.log('funciona');
  });

  $('#btn-buscar').click(function(){
  var parametros = $('#id').val(); 
  console.log("enviando: "+parametros);
  
  
    $.ajax({
        url:`http://localhost:3007/paciente/${parametros}/historial_preclinica`,
        type: 'GET',
        success:function(respuesta){
            console.log(respuesta);
            for(var i=0; i<respuesta.length;i++){
            $('#tabla').append(`<tr>
            <td scope="row">${respuesta[i].PacienteID}</td>
            <td>${respuesta[i].PrimerNombre}</td>
            <td>${respuesta[i].SegundoNombre}</td>
            <td>${respuesta[i].PrimerApellido}</td>
            <td>${respuesta[i].Temperatura}</td>
            <td>${respuesta[i].Presion}</td>
            <td>${respuesta[i].Peso}</td>
            <td>${respuesta[i].Altura}</td>
        </tr>`);
            }
      },error:function(error){
        console.error(error);
        console.log("no regreso respuesta");
      }
    });
    
    
  });