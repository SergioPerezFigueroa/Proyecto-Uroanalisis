

$(document).ready(function(){
    //Se ejecuta cuando el DOM este cargado completamente
    console.log('funciona');
  });

  $('#btn').click(function(){
  //var parametros = $('#id').val(); //idpaciente
  console.log("enviando");
  
  $.ajax({
    url:`http://localhost:3007/examenes/${$('#id').val()}`,
    type: 'GET',
    success:function(respuesta){
        console.log(respuesta);
        $('#recepcionista').append(respuesta.RecepcionistaID);
        $('#expediente').append(respuesta.PacienteID);
        $('#medico').append(respuesta.MedicoID);
  },error:function(error){
    console.error(error);
    console.log("no regreso respuesta");
  }
});
    
});

  $('#guardar').click(function(){
      console.log("vamo a guardar");  
      var parametros = 'AnalistaID='+'2'+"&"+'Fecha='+'01-01-2020'+"&"+'Color='+$('#color').val()+"&"+'Aspecto='+$('#aspecto').val()+"&"+'Gravedad_especifica='+$('#gravedad').val()+"&"+'Esteresa_leucositoria='+$('#esteresa').val()+"&"+'Nitritos='+$('#nitritos').val()+"&"+'Ph='+$('#ph').val()+"&"+'Proteinas='+$('#proteinas').val()+"&"+'Glucosa='+$('#glucosa').val()+"&"+'Cuerpos_cetonicos='+$('#cuerpos').val()+"&"+'Urobililinogenos='+$('#urobilinogenos').val()+"&"+'Bilirubina='+$('#Bilirrubina').val()+"&"+'Sabgre='+$('#sangre').val()+"&"+'Celulas_epiteliales='+$('#celulas').val()+"&"+'Erotrocitos='+$('#erotrositos').val()+"&"+'Leucositos='+$('#leucositos').val()+"&"+'Bacterias='+$('#bacterias').val()+"&"+'Mucus='+$('#mucus').val()+"&"+'Cristales='+$('#cristales').val()+"&"+'Cilindors='+$('#cilindors').val()+"&"+'Levaduras='+$('#levaduras').val()+"&"+'Observaciones='+$('#observaciones').val();
     /*
      $.ajax({
        url:`http://localhost:3007/examen/${$('#id').val()}`,
        type: 'PUT',
        data:parametros,
        dataType: "json",
        success:function(respuesta){
            console.log(respuesta);
      },error:function(error){
        console.error(error);
        console.log("no regreso respuesta");
      }
    });
    */
  });