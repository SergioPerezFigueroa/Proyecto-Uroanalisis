$(document).ready(function(){
    console.log('funciona');
  });

  $('#buscar').click(function(){
  var parametros = $('#id').val(); 
  console.log("enviando: "+parametros);
  
    
    $.ajax({
        url:`http://localhost:3007/examen/${parametros}`,
        type: 'GET',
        success:function(respuesta){
            console.log(respuesta);
            for(var i=0; i<respuesta.length;i++){
              $('#tabla').append(`<tr>
              <td scope="row">${respuesta[i].ExamenID}</td>
              <td>${respuesta[i].nombre_paciente}</td>
              <td>${respuesta[i].Fecha}</td>
              <td>${respuesta[i].nombre_medico}</td>
              <td><button type="button" value="${respuesta[i].ExamenID}" onclick="alert('Se a ingresado la muestra del examen :${respuesta[i].ExamenID}');">Ingresar muestra</button></td>
          </tr>`);
              }
      },error:function(error){
        console.error(error);
        console.log("no regreso respuesta");
      }
    });
    
  });

  void function Ingresarmuestra(k){
    var parametros = 'EmpleadoID='+k; 
    $.ajax({
        url:`http://localhost:3007/examen/${parametros}/Recepcionista`,
        type: 'PUT',
        success:function(respuesta){
      },error:function(error){
        console.error(error);
        console.log("no regreso respuesta");
      }
    });
  }