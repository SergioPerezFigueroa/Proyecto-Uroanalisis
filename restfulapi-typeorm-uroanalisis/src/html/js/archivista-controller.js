$(document).ready(function(){
    //Se ejecuta cuando el DOM este cargado completamente
    console.log('funciona');
  });

  $('#btn').click(function(){
  //var parametros = $('#id').val(); //idpaciente
  console.log("enviando");
  
  
    $.ajax({
        url:`http://localhost:3007/examen/${$('#id').val()}`,
        type: 'GET',
        success:function(respuesta){
            console.log(respuesta);
            for(var i=0; i<respuesta.length;i++){
                $('#seleccion').append(`<option value="${respuesta[i].ExamenID}">ExamenID : ${respuesta[i].ExamenID},NExpediente : ${respuesta[i].PacienteID}, nombre del paciente : ${respuesta[i].nombre_paciente}, medico solicitante : ${respuesta[i].nombre_medico}</option>`);
            }
            
      },error:function(error){
        console.error(error);
        console.log("no regreso respuesta");
      }
    });
    
    
  });

  $('#seleccion').change(function(){
      console.log($('#seleccion').val());
      $.ajax({
        url:`http://localhost:3007/examenV/${$('#seleccion').val()}`,
        type: 'GET',
        success:function(respuesta){
            console.log(respuesta);
            $('#nombre').append(respuesta[0].nombre_paciente);
            $('#aspecto').append(respuesta[0].Aspecto);
            $('#bacterias').append(respuesta[0].Bacterias);
            $('#bilirrubina').append(respuesta[0].Bilirubina);
            $('#celulas').append(respuesta[0].Celulas_epiteliales);
            $('#cilindors').append(respuesta[0].Cilindors);
            $('#color').append(respuesta[0].Color);
            $('#cristales').append(respuesta[0].Cristales);
            $('#cuerpos').append(respuesta[0].Cuerpos_cetonicos);
            $('#erotrocitos').append(respuesta[0].Erotrocitos);
            $('#fecha').append(respuesta[0].fecha);
            $('#glucosa').append(respuesta[0].Glucosa);
            $('#gravedad').append(respuesta[0].Gravedad_especifica);
            $('#leucositos').append(respuesta[0].Leucositos);
            $('#levaduras').append(respuesta[0].Levaduras);
            $('#mucus').append(respuesta[0].Mucus);
            $('#nitritos').append(respuesta[0].Nitritos);
            $('#observaciones').append(respuesta[0].Observaciones);
            $('#ph').append(respuesta[0].Ph);
            $('#proteinas').append(respuesta[0].Proteinas);
            $('#sangre').append(respuesta[0].Sangre);
            $('#urobilinogeno').append(respuesta[0].Urobililinogenos);
            $('#medico').append(respuesta[0].nombre_medico);
            $('#genero').append("---");
            $('#edad').append("---");
            $('#expediente').append(respuesta[0].PacienteID);
            $('#esterasa').append(respuesta[0].Esteresa_leucositoria);
            
      },error:function(error){
        console.error(error);
        console.log("no regreso respuesta");
      }
    });
  });