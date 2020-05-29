$(document).ready(function(){
    console.log('funciona');
    
    $.ajax({
        url:`http://localhost:3007/examen/123`,
        type: 'GET',
        success:function(respuesta){
            console.log(respuesta);
            for(var i=0; i<respuesta.length;i++){
              $('#tabla').append(`<tr>
              <td scope="row">${respuesta[i].nombre_paciente}</td>
              <td>${respuesta[i].Fecha}</td>
              <td>${respuesta[i].nombre_medico}</td>
              <td>${respuesta[i].Observaciones}</td>
              <td><a href="consulta.html" target="_blank">Pasar a consulta</a></td>
          </tr>`);
              }
      },error:function(error){
        console.error(error);
        console.log("no regreso respuesta");
      }
    });
    
  });

  $('#buscar').click(function(){
  var parametros = $('#pacienteid').val(); 
  console.log("enviando: "+parametros);
  $.ajax({
    url:`http://localhost:3007/examen/${parametros}`,
    type: 'GET',
    success:function(respuesta){
        console.log(respuesta);
        for(var i=0; i<respuesta.length;i++){
            $('#tabla').append(`<tr>
            <td scope="row">${respuesta[i].nombre_paciente}</td>
            <td>${respuesta[i].Fecha}</td>
            <td>${respuesta[i].nombre_medico}</td>
            <td>${respuesta[i].Observaciones}</td>
            <td><a href="consulta.html" target="_blank">Pasar a consulta</a></td>
        </tr>`);
            }
  },error:function(error){
    console.error(error);
    console.log("no regreso respuesta");
  }
});  
});

$('#buscarfecha').click(function(){
    var parametros = 'Fecha_inicial='+$('#fecha1').val()+"&"+'Fecha_final='+$('#fecha2').val(); 
    console.log("enviando: "+parametros);
    $.ajax({
        url:"http://localhost:3007/exameneshechos",
        type: 'POST',
        format: 'json',
        data:parametros,
        dataType: "json",
        success:function(respuesta){
            console.log(respuesta);
            for(var i=0; i<respuesta.length;i++){
                $('#tabla').append(`<tr>
                <td scope="row">${respuesta[i].nombre_paciente}</td>
                <td>${respuesta[i].Fecha}</td>
                <td>${respuesta[i].nombre_medico}</td>
                <td>${respuesta[i].Observaciones}</td>
                <td><a href="consulta.html" target="_blank">Pasar a consulta</a></td>
            </tr>`);
                }
      },error:function(error){
        console.error(error);
        console.log("no regreso respuesta");
      }
    });
  });
