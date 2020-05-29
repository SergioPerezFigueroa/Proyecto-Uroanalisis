

$(document).ready(function(){
    //Se ejecuta cuando el DOM este cargado completamente
    console.log('funciona');
  });

  $('#btn-guardar').click(function(){
    var parametros = 'PacienteID='+$('#PacienteID').val()+"&"+'Presion='+$('#Presion').val()+"&"+'Temperatura='+$('#Temperatura').val()+"&"+
    'Estatura ='+$('#Estatura').val()+"&"+'Peso='+$('#Peso').val()+"&"; 
    console.log("enviando: "+parametros);
    


    $.ajax({
        url:"http://localhost:3007/preclinica",
        type: 'POST',
        format: 'json',
        data:parametros,
        dataType: "json",
        success:function(respuesta){
            console.log(respuesta);
            //$('#contenedor-respuesta').append(``);
      },error:function(error){
        console.error(error);
        console.log("no regreso respuesta");
      }
    });
    


});