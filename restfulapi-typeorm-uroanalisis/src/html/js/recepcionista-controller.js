$(document).ready(function(){
    //Se ejecuta cuando el DOM este cargado completamente
    console.log('funciona');
  });

  $('#btn-buscar').click(function(){
  var parametros = $('#id').val(); 
  console.log("enviando: "+parametros);
  console.log(typeof parametros);
  //console.log("combertido a :");
  //parametros = parseInt(parametros);
  //console.log(typeof parametros +"  "+ parametros);
  
    
    $.ajax({
        url:`http://localhost:3007/enfermero/${parametros}`,
        type: 'GET',
        success:function(respuesta){
            console.log(respuesta);
      },error:function(error){
        console.error(error);
        console.log("no regreso respuesta");
      }
    });
    

  });