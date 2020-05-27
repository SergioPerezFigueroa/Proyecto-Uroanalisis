$(document).ready(function(){
    //Se ejecuta cuando el DOM este cargado completamente
    console.log('funciona');
  });

  $('#btn-guarar').click(function(){
  var parametros = `{"EmpleadoID":${$('#id').val()},"Password":"${$('#password').val()}"}`; 
  console.log("enviando: "+parametros);
    
    $.ajax({
        url:"http://localhost:3007/login",
        type: 'POST',
        format: 'json',
        data:parametros,
        dataType: "json",
        async: false,
        success:function(respuesta){
            console.log(respuesta);
            //$('#contenedor-respuesta').append(`<p>acertado: ${respuesta.MSG}</p>`);
      },error:function(error){
        console.error(error);
        console.log("no regreso respuesta");
        //$('#contenedor-respuesta').append(`<p>rechazado: ${respuesta.MSG}</p>`);
      }
    });
    

   
    //console.log(parametros);
  });