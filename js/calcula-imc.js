function calculandoTodosIMCs() {
    percorreArray(trsPacientes, function(pacienteTr) {
        var paciente = montarPaciente(pacienteTr);
    
        var imc = paciente.pegarImc();
    
        var tdImc = pacienteTr.getElementsByClassName('info-imc')[0];
        tdImc.textContent = imc;
    
        console.log(imc); 
    
    });    
}

var botao = document.getElementById('calcula-imcs');
/*botao.onclick = calculandoTodosIMCs;
botao.onclick = function() {
    console.log('Calculando os imcs..');
}*/ 

botao.addEventListener('click', function(){
    console.log('Calculando todos os imcs...');
});
botao.addEventListener('click', calculandoTodosIMCs);



