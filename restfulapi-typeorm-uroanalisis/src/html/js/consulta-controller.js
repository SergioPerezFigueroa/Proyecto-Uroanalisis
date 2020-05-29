
$(document).ready(function(){
    console.log('funciona');
    
  });

  $('#guardar').click(function(){
    var parametros = 'ConsultaID='+'2'+"&"+'PacienteID='+'123'+"&"+'MedicoID='+'4'+"&"+'Fecha='+'01-01-2020'+"&"+'Sintomas='+$('#sintomas').val()+"&"+'Receta='+$('#receta').val();
    console.log("enviando : "+parametros);    
  });
  $('#guard').click(function(){
  var parametros = 'ConsultaID='+'2'+"&"+'PacienteID='+'123'+"&"+'MedicoID='+'4'+"&"+'Fecha='+'01-01-2020'+"&"+'sintomas='+$('#Sintomas').val()+"&"+'Receta='+$('#receta');
  console.log("enviando : "+parametros);
  
  $.ajax({
    url:"http://localhost:3007/consulta",
    type: 'POST',
    format: 'json',
    data:parametros,
    dataType: "json",
    success:function(respuesta){
        console.log(respuesta);
  },error:function(error){
    console.error(error);
    console.log("no regreso respuesta");
  }
 });    
});

$('#solicit').click(function(){
  var parametros = 'ExamenID='+'4'+"&"+'PacienteID='+'123'+"&"+'MedicoID='+'4';
  console.log("enviando : "+parametros);
  
  $.ajax({
    url:"http://localhost:3007/examen",
    type: 'POST',
    format: 'json',
    data:parametros,
    dataType: "json",
    success:function(respuesta){
        console.log(respuesta);
  },error:function(error){
    console.error(error);
    console.log("no regreso respuesta");
  }
 });    
});