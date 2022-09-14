function calculandoTodosIMCs() {
    percorreArray(trsPacientes, function(pacienteTr) {
        var paciente = montarPaciente(pacienteTr);
    
        var imc = paciente.pegarImc();
    
        var tdImc = pacienteTr.getElementsByClassName('info-imc')[0];
        tdImc.textContent = imc[0];       

        var tdSituacao = pacienteTr.getElementsByClassName('info-situacao')[0];
        tdSituacao.textContent = imc[1];       

    });    
}

var botao = document.getElementById('calcula-imcs');

botao.addEventListener('click', calculandoTodosIMCs);



